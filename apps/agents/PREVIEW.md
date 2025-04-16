# 🔍 API Prompt & Response Examples

## FormBuilderAgent
**Prompt:** 'Create a form for a coaching intake'
**Response:**
```json
{
  "result": {
    "title": "Coaching Intake",
    "questions": [
      { "label": "Full Name", "type": "text" },
      { "label": "Goals", "type": "textarea" }
    ]
  }
}
```

## DistributionAgent
**Prompt:** 'Suggest Instagram CTA for RSVP form'
**Response:**
```json
{
  "result": {
    "cta": "Tap to RSVP 🗓️",
    "qrOverlayCaption": "Scan to Join",
    "utmParams": "?utm_source=instagram&utm_campaign=rsvp"
  }
}
```