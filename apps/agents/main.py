from fastapi import FastAPI
from apps.agents.agents.form_builder import handle_form_builder, AgentRequest, AgentResponse

app = FastAPI()

@app.post("/generate-schema", response_model=AgentResponse)
async def generate_schema(request: AgentRequest):
    result = await handle_form_builder(request.prompt)
    return result