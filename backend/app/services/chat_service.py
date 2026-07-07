from app.services.llm_service import LLMService


class ChatService:

    llm = LLMService()

    @staticmethod
    def process_message(message: str):

        return ChatService.llm.chat(message)