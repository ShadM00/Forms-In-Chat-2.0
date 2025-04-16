from utils.gemini import call_gemini
from schemas import AgentRequest, AgentResponse

async def handle_distribution(request: AgentRequest) -> AgentResponse:
    prompt = f"Suggest a CTA and QR overlay for a {request.goal} campaign on {request.platform}."
    result = await call_gemini(prompt)
    return AgentResponse(result=result)