from fastapi.testclient import TestClient
from main import app

client = TestClient(app)

def test_insight_agent():
    response = client.post("/agents/insight", json={"form_schema": {"questions": [{"label": "Email"}, {"label": "Name"}]}})
    assert response.status_code in (200, 403)
    assert "result" in response.json()