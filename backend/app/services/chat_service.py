from app.ai.llm_service import LLMService
from app.memory.conversation_memory import conversation_memory


class ChatService:

    llm = LLMService()

    @staticmethod
    def process_message(session_id: str, message: str) -> str:

        # Save user's message
        conversation_memory.add_message(
            session_id,
            "user",
            message
        )

        # Retrieve conversation history
        history = conversation_memory.get_history(session_id)

        # Get AI response
        response = ChatService.llm.chat(history)

        # Save assistant response
        conversation_memory.add_message(
            session_id,
            "assistant",
            response
        )

        return response