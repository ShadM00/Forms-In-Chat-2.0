from utils.gemini import call_gemini
from schemas import AgentRequest, AgentResponse

async def handle_insight(request: AgentRequest) -> AgentResponse:
    prompt = f"Analyze this form schema and suggest the optimal question order with explanations: {request.form_schema}"
    result = await call_gemini(prompt)
    return AgentResponse(result=result)