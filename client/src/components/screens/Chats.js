import "../../App.css";
import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import ChatButton from "../../custom/ChatButton";
import { image } from "../constants/images";
const Chats = React.memo(() => {
  const navigate = useNavigate();
  const [chats, setChats] = useState([
    {
      userName: "Chat With Chatbot!",
      profileImage: image.chatbot,
      role: "chatbot",
      messages: [
        {
          id: 1,
          text: "Hello, how can i help you?",
          timestamp: "2024-09-07T10:30:00Z",
          sender: "chatbot",
        },
        {
          id: 2,
          text: "I need help in creating a new Stunning website",
          timestamp: "2024-09-07T10:31:00Z",
          sender: "user",
        },
      ],
    },
    {
      userName: "Chat with me",
      profileImage: image.tolgamendi,
      role: "human",
      messages: [
        {
          id: 1,
          text: "Hey, how's everything?",
          timestamp: "2024-09-07T11:00:00Z",
          sender: "chatbot",
        },
        {
          id: 2,
          text: "All good here, what about you?",
          timestamp: "2024-09-07T11:01:00Z",
          sender: "user",
        },
        {
          id: 3,
          text: "Can't complain, life's busy!",
          timestamp: "2024-09-07T11:02:00Z",
          sender: "chatbot",
        },
        {
          id: 4,
          text: "I hear that. Busy as always.",
          timestamp: "2024-09-07T11:03:00Z",
          sender: "user",
        },
      ],
    },
    {
      userName: "View my services",
      profileImage: image.chatbot,
      role: "human",
      messages: [
        {
          id: 1,
          text: "Hey, how's everything?",
          timestamp: "2024-09-07T11:00:00Z",
          sender: "chatbot",
        },
        {
          id: 2,
          text: "All good here, what about you?",
          timestamp: "2024-09-07T11:01:00Z",
          sender: "user",
        },
        {
          id: 3,
          text: "Can't complain, life's busy!",
          timestamp: "2024-09-07T11:02:00Z",
          sender: "chatbot",
        },
        {
          id: 4,
          text: "I hear that. Busy as always.",
          timestamp: "2024-09-07T11:03:00Z",
          sender: "user",
        },
      ],
    },
  ]);
  const [query, setQuery] = useState("");

  return (
    <>
      <div className="bg-green-500 py-6 px-4 -z-10 pb-10">
        <h1 className="text-3xl text-white font-bold">Hi there 👋 </h1>
        <p className="mt-3 text-white font-medium text-sm">
          Need help? Search our help center for answers or start a conversation:
        </p>
      </div>
      <div className="chat_bar w-11/12 bg-white shadow-lg shadow-slate-100 rounded-lg py-6 px-4 bottom-4 relative z-10 ">
        <h1 className="font-medium text-lg mb-1">Conversation</h1>
        <div className="input_container flex w-full items-center justify-between h-12 border border-slate-200 mb-2">
          <input
            value={query}
            disabled
            onChange={(text) => setQuery(text.target.value)}
            type="text"
            className="flex-1 h-full outline-none pl-3"
          />
          <div className="flex items-center justify-center bg-green-600 w-12 h-full cursor-pointer">
            <FiSearch size={20} color="#fff" />
          </div>
        </div>
        {chats?.map((item, index) => (
          <ChatButton
            onClick={() => navigate("/chat", { state: item })}
            item={item}
            key={index}
          />
        ))}
      </div>
    </>
  );
});

export { Chats };
