from fastapi.testclient import TestClient
from main import app

client = TestClient(app)

def test_distribution_agent():
    response = client.post("/agents/distribution", json={"prompt": "Launch event", "platform": "Instagram", "goal": "RSVP"})
    assert response.status_code in (200, 403)
    assert "result" in response.json()