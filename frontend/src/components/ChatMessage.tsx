import type { ChatMessage as Message } from "../types/Chat";

interface Props {

    message: Message;

}

function ChatMessage({ message }: Props) {

    const isUser = message.sender === "user";

    return (

        <div
            style={{
                display: "flex",
                justifyContent: isUser ? "flex-end" : "flex-start",
                marginBottom: "15px"
            }}
        >

            <div
                style={{
                    background: isUser ? "#2563eb" : "#e5e7eb",
                    color: isUser ? "white" : "black",
                    padding: "12px",
                    borderRadius: "10px",
                    maxWidth: "70%"
                }}
            >

                {message.message}

            </div>

        </div>

    );

}

export default ChatMessage;