import ChatMessage from "./ChatMessage";
import type { ChatMessage as Message } from "../types/Chat";

interface Props {

    messages: Message[];

}

function ChatWindow({ messages }: Props) {

    return (

        <div
            style={{
                height: "500px",
                overflowY: "auto",
                border: "1px solid #ddd",
                padding: "20px",
                borderRadius: "10px",
                marginBottom: "20px"
            }}
        >

            {messages.map((msg) => (

                <ChatMessage
                    key={msg.id}
                    message={msg}
                />

            ))}

        </div>

    );

}

export default ChatWindow;