from unittest.mock import patch
from agents.form_builder import handle_form_builder
from schemas import AgentRequest

@patch("utils.gemini.call_gemini")
def test_form_builder_mocked(mock_call):
    mock_call.return_value = '{"title": "Test Form", "questions": [{"label": "Name", "type": "text"}]}'
    request = AgentRequest(prompt="Make a feedback form")
    result = handle_form_builder(request)
    assert "questions" in result.result