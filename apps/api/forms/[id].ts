import type { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;

  if (typeof id !== "string") {
    return res.status(400).json({ error: "Invalid form ID" });
  }

  try {
    if (req.method === "GET") {
      const form = await prisma.form.findUnique({
        where: { id },
        include: {
          questions: true,
        },
      });

      if (!form) {
        return res.status(404).json({ error: "Form not found" });
      }

      res.status(200).json(form);
    } else if (req.method === "PUT") {
      const { prompt, schema } = req.body;
      if (!prompt || !schema || !Array.isArray(schema.questions)) {
        return res.status(400).json({ error: "Invalid request body" });
      }

      await prisma.form.update({
        where: { id },
        data: {
          prompt,
        },
      });

      await prisma.formQuestion.deleteMany({
        where: { formId: id },
      });

      await prisma.formQuestion.createMany({
        data: schema.questions.map((q: any) => ({
          formId: id,
          question: q.question,
          type: q.type,
        })),
      });

      const updatedForm = await prisma.form.findUnique({
        where: { id },
        include: {
          questions: true,
        },
      });

      if (!updatedForm) {
        return res.status(404).json({ error: "Form not found after update" });
      }

      res.status(200).json(updatedForm);
    } else if (req.method === "DELETE") {
      await prisma.form.delete({
        where: { id },
      });
      res.status(204).end();
    } else {
      res.setHeader("Allow", ["GET", "PUT", "DELETE"]);
      res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  } catch (error) {
    console.error("Error handling form request:", error);
    res.status(500).json({ error: "Internal server error" });
  }
}