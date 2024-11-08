import React, { useState, useEffect } from "react";
import io from "socket.io-client";
import axios from "axios";

const socket = io("http://localhost:8000");

function App1({ userId, username, receiverId }) {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    // Fetch chat history
    axios
      .get(`http://localhost:8000/messages?user1=${userId}&user2=${receiverId}`)
      .then((res) => setMessages(res.data))
      .catch((err) => console.log(err));

    // Listen for new messages
    socket.on("receiveMessage", (msg) => {
      if (msg.receiverId === userId) {
        setMessages((prevMessages) => [...prevMessages, msg]);
      }
    });

    return () => {
      socket.off("receiveMessage");
    };
  }, [userId, receiverId]);

  const sendMessage = () => {
    if (message.trim()) {
      const newMessage = { senderId: userId, receiverId, content: message };
      socket.emit("sendMessage", newMessage);
      setMessages((prev) => [...prev, newMessage]);
      setMessage("");
    }
  };

  return (
    <div>
      <div className="message-container">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={msg.senderId === userId ? "sent" : "received"}
          >
            {msg.content}
          </div>
        ))}
      </div>
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type a message..."
      />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
}

export default App1;
