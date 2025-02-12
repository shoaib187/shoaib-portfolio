import React, { useState, useEffect } from "react";
import io from "socket.io-client";
// import { TextField, Button, List, ListItem } from "@mui/material";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";

const socket = io("http://localhost:5000"); // Backend URL

function App1() {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    // Listen for incoming messages
    socket.on("receive_message", (data) => {
      setMessages((prev) => [...prev, data]);
    });
  }, []);

  const sendMessage = () => {
    const messageData = {
      text: message,
      senderId: "user123", // Replace with logged-in user ID
      recipientId: "user456", // Replace with recipient ID
    };
    socket.emit("send_message", messageData);
    setMessage("");
  };

  return (
    <div className="App">
      <h1>Chat App</h1>
      <List>
        {messages.map((msg, index) => (
          <ListItem key={index}>{msg.text}</ListItem>
        ))}
      </List>
      <TextField
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type a message..."
      />
      <Button onClick={sendMessage}>Send</Button>
    </div>
  );
}

export default App1;
