import "../App.css";
import React, { useState } from "react";
import Chat from "../components/screens/Chat";
import { Route, Routes } from "react-router-dom";
import { Chats } from "../components/screens/Chats";

const ChatComponent = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Chats />} />
        <Route path="/chat" element={<Chat />} />
      </Routes>
    </>
  );
};

export { ChatComponent };
