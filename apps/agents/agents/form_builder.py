from utils.gemini import call_gemini
from schemas import AgentRequest, AgentResponse

async def handle_form_builder(request: AgentRequest) -> AgentResponse:
    """
    Handle the form builder agent request.

    Args:
        request (AgentRequest): The request object containing the user prompt.

    Returns:
        AgentResponse: The response object containing the generated JSON form schema as a string.
    """
    # Enhanced prompt to instruct Gemini to generate a structured JSON schema for a conversational form
    prompt = (
        f"Generate a detailed JSON schema for a conversational form based on the following user prompt. "
        f"The schema should define form fields, types, labels, validation rules, and conversational flow.\n\n"
        f"User prompt: {request.prompt}\n\n"
        f"Output only valid JSON."
    )
    result = await call_gemini(prompt)
    return AgentResponse(result=result)