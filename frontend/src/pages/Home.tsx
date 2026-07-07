import { useState } from "react";

import ChatInput from "../components/ChatInput";
import ChatWindow from "../components/ChatWindow";

import type { ChatMessage } from "../types/Chat";

function Home() {

    const [messages, setMessages] = useState<ChatMessage[]>([
        {
            id: 1,
            sender: "assistant",
            message: "👋 Welcome to FinAssist. How may I assist you today?"
        }
    ]);

    const sendMessage = (text: string) => {

        const userMessage: ChatMessage = {

            id: Date.now(),

            sender: "user",

            message: text

        };

        const botMessage: ChatMessage = {

            id: Date.now() + 1,

            sender: "assistant",

            message: "I'm still under development 😊"

        };

        setMessages((prev) => [

            ...prev,

            userMessage,

            botMessage

        ]);

    };

    return (

        <div
            style={{
                width: "900px",
                margin: "50px auto"
            }}
        >

            <h1>

                🏦 FinAssist

            </h1>

            <ChatWindow messages={messages} />

            <ChatInput onSend={sendMessage} />

        </div>

    );

}

export default Home;