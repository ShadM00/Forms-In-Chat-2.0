import axios from 'axios';
import prisma from '../lib/prisma';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const prompt = body.prompt;
    if (!prompt || typeof prompt !== 'string') {
      return new Response(JSON.stringify({ error: 'Invalid or missing prompt' }), { status: 400 });
    }

    // Call the Python agent service to generate the JSON schema
    const agentResponse = await axios.post('http://localhost:8001/generate-schema', { prompt });
    const schema = agentResponse.data.schema;
    if (!schema) {
      return new Response(JSON.stringify({ error: 'Agent did not return a schema' }), { status: 500 });
    }

    // Save the form to the database
    const newForm = await prisma.form.create({
      data: {
        userId: 'user123', // Placeholder user ID
        prompt,
        schema,
      },
    });

    return new Response(JSON.stringify({ id: newForm.id, message: 'Form created successfully' }), { status: 201 });
  } catch (error) {
    console.error('Error creating form:', error);
    return new Response(JSON.stringify({ error: 'Failed to create form' }), { status: 500 });
  }
}

export async function GET(req: Request) {
  const url = new URL(req.url);
  const id = url.pathname.split('/').pop();

  try {
    if (id && id !== 'forms') {
      // GET /forms/:id - get form by id
      const form = await prisma.form.findUnique({
        where: { id },
      });
      if (!form) {
        return new Response(JSON.stringify({ error: 'Form not found' }), { status: 404 });
      }
      return new Response(JSON.stringify(form), { status: 200 });
    } else {
      // GET /forms - get all forms (no filtering yet)
      const forms = await prisma.form.findMany();
      return new Response(JSON.stringify(forms), { status: 200 });
    }
  } catch (error) {
    console.error('Error fetching form(s):', error);
    return new Response(JSON.stringify({ error: 'Failed to fetch form(s)' }), { status: 500 });
  }
}

export async function PUT(req: Request) {
  const url = new URL(req.url);
  const id = url.pathname.split('/').pop();

  if (!id || id === 'forms') {
    return new Response(JSON.stringify({ error: 'Form ID is required' }), { status: 400 });
  }

  try {
    const body = await req.json();
    // Update the form with the provided fields (e.g., schema)
    const updatedForm = await prisma.form.update({
      where: { id },
      data: body,
    });
    return new Response(JSON.stringify(updatedForm), { status: 200 });
  } catch (error) {
    console.error('Error updating form:', error);
    if (error.code === 'P2025') {
      // Prisma error code for record not found
      return new Response(JSON.stringify({ error: 'Form not found' }), { status: 404 });
    }
    return new Response(JSON.stringify({ error: 'Failed to update form' }), { status: 500 });
  }
}

export async function DELETE(req: Request) {
  const url = new URL(req.url);
  const id = url.pathname.split('/').pop();

  if (!id || id === 'forms') {
    return new Response(JSON.stringify({ error: 'Form ID is required' }), { status: 400 });
  }

  try {
    const deletedForm = await prisma.form.delete({
      where: { id },
    });
    // Return 204 No Content on successful deletion
    return new Response(null, { status: 204 });
  } catch (error) {
    console.error('Error deleting form:', error);
    if (error.code === 'P2025') {
      // Prisma error code for record not found
      return new Response(JSON.stringify({ error: 'Form not found' }), { status: 404 });
    }
    return new Response(JSON.stringify({ error: 'Failed to delete form' }), { status: 500 });
  }
}