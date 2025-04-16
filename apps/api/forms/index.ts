import type { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient, Prisma } from "@prisma/client";

const prisma = new PrismaClient();

type FormQuestionInput = {
  question: string;
  type: string;
};

type FormCreateInput = {
  prompt: string;
  schema: {
    questions: FormQuestionInput[];
  };
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    try {
      const body: FormCreateInput = req.body;
      if (!body.prompt || !body.schema || !Array.isArray(body.schema.questions)) {
        return res.status(400).json({ error: "Invalid request body" });
      }

      const form = await prisma.form.create({
        data: {
          prompt: body.prompt,
          questions: {
            create: body.schema.questions.map((q) => ({
              question: q.question,
              type: q.type,
            })),
          },
        },
        select: {
          id: true,
          prompt: true,
          questions: true,
          createdAt: true,
          updatedAt: true,
        },
      });

      res.status(201).json(form);
    } catch (error) {
      console.error("Error creating form:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  } else if (req.method === "GET") {
    try {
      const forms = await prisma.form.findMany({
        select: {
          id: true,
          prompt: true,
          questions: true,
          createdAt: true,
          updatedAt: true,
        },
      });
      res.status(200).json(forms);
    } catch (error) {
      console.error("Error fetching forms:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  } else {
    res.setHeader("Allow", ["POST", "GET"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}