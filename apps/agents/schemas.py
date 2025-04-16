from pydantic import BaseModel
from typing import Optional, List, Union

class AgentRequest(BaseModel):
    prompt: str
    platform: Optional[str] = None
    goal: Optional[str] = None
    form_schema: Optional[dict] = None

class AgentResponse(BaseModel):
    result: Union[str, dict, list]