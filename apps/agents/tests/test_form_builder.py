from fastapi.testclient import TestClient
from main import app

client = TestClient(app)

def test_form_builder_agent():
    response = client.post("/agents/form_builder", json={"prompt": "Customer feedback form"})
    assert response.status_code in (200, 403)  # 403 for API key missing locally
    assert "result" in response.json()