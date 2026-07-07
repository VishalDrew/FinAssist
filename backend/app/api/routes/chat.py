from fastapi import APIRouter

from app.schemas.chat import ChatRequest, ChatResponse
from app.services.chat_service import ChatService

router = APIRouter(
    prefix="/chat",
    tags=["Chat"]
)

@router.post("/", response_model=ChatResponse)
def chat(request: ChatRequest):

    reply = ChatService.process_message(request.message)

    return ChatResponse(response=reply)