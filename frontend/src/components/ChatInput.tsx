import { useState } from "react";

interface Props {

    onSend: (message: string) => void;

}

function ChatInput({ onSend }: Props) {

    const [message, setMessage] = useState("");

    const send = () => {

        if (!message.trim()) return;

        onSend(message);

        setMessage("");

    };

    return (

        <div
            style={{
                display: "flex",
                gap: "10px"
            }}
        >

            <input

                value={message}

                onChange={(e) => setMessage(e.target.value)}

                placeholder="Ask FinAssist..."

                style={{
                    flex: 1,
                    padding: "12px"
                }}

            />

            <button onClick={send}>

                Send

            </button>

        </div>

    );

}

export default ChatInput;