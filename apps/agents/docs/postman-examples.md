# 📬 Postman & Curl Examples – Module 2

## 🚀 FormBuilderAgent (Curl)
```bash
curl -X POST http://localhost:8000/agents/form_builder \
     -H "Content-Type: application/json" \
     -d '{"prompt": "Create a form for event RSVP"}'
```

**Response:**
```json
{
  "result": {
    "title": "Event RSVP",
    "questions": [
      { "label": "Name", "type": "text" },
      { "label": "Will you attend?", "type": "radio" }
    ]
  }
}
```

---

## 📱 DistributionAgent (Postman JSON)
**POST** `http://localhost:8000/agents/distribution`
```json
{
  "prompt": "Get RSVP form CTA",
  "platform": "Instagram",
  "goal": "Lead generation"
}
```

**Response:**
```json
{
  "result": {
    "cta": "Tap here to RSVP 🎉",
    "utmParams": "?utm_source=instagram&utm_campaign=rsvp"
  }
}
```