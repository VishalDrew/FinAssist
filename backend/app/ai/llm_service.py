from app.ai.providers.gemini_provider import GeminiProvider
from app.ai.prompts.system_prompt import SYSTEM_PROMPT


class LLMService:

    def __init__(self):
        self.provider = GeminiProvider()

    def chat(self, message: str):

        prompt = f"""
{SYSTEM_PROMPT}

User:
{message}

Assistant:
"""

        return self.provider.generate(prompt)