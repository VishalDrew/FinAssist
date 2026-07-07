from app.ai.providers.gemini_provider import GeminiProvider
from app.ai.prompts.system_prompt import SYSTEM_PROMPT


class LLMService:

    def __init__(self):
        self.provider = GeminiProvider()

    def chat(self, history) -> str:

        prompt = SYSTEM_PROMPT + "\n\n"

        for message in history:
            prompt += f"{message['role']}: {message['content']}\n"

        prompt += "\nassistant:"

        return self.provider.generate(prompt)