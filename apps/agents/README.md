# FormsInChat Agents

This directory contains AI agent implementations for the FormsInChat project.

## Form Builder Agent

The form builder agent converts a user text prompt into a structured JSON schema representing a conversational form. It uses the Google Gemini (Generative AI) API to generate the schema.

### Usage

The main function is `handle_form_builder` in `agents/form_builder.py`. It accepts an `AgentRequest` object with a `prompt` string and returns an `AgentResponse` with the generated JSON schema string.

Example function signature:

```python
async def handle_form_builder(request: AgentRequest) -> AgentResponse
```

### Dependencies

- Python 3.8+
- `google-generativeai` Python SDK
- `python-dotenv` for environment variable management

### Environment Setup

Set the environment variable `GEMINI_API_KEY` with your Google Gemini API key. You can use a `.env` file with the following content:

```
GEMINI_API_KEY=your_api_key_here
```

### How It Works

- The agent constructs a detailed prompt instructing Gemini to generate a JSON schema for a conversational form based on the user prompt.
- It calls the Gemini API via the `call_gemini` function in `utils/gemini.py`.
- The response text is returned as the JSON schema string.

### Example Invocation

```python
from schemas import AgentRequest
from agents.form_builder import handle_form_builder
import asyncio

async def main():
    request = AgentRequest(prompt="Create a registration form with name, email, and password fields.")
    response = await handle_form_builder(request)
    print(response.result)

asyncio.run(main())