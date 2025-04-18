import os
import google.generativeai as genai
from dotenv import load_dotenv

load_dotenv()
genai.configure(api_key=os.getenv("GEMINI_API_KEY"))

model = genai.GenerativeModel("gemini-pro")

async def call_gemini(prompt: str) -> str:
    response = model.generate_content(prompt)
    return response.text.strip()