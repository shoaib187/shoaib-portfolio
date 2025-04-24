import "../../App.css";
import React, { useRef, useState } from "react";
import { FiChevronLeft, FiSend } from "react-icons/fi";
import { useLocation, useNavigate } from "react-router-dom";
import ChatBubble from "../../custom/ChatBubble";
import { MdEmojiEmotions } from "react-icons/md";
import EmojiPicker from "emoji-picker-react";
import axios from "axios";
export default function Chat() {
  const location = useLocation();
  const navigate = useNavigate();
  const item = location.state;
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);

  const [messages, setMessages] = useState([
    { text: "Hi! How can I help you?", sender: "bot" },
  ]);
  const [message, setMessage] = useState("");
  const inputRef = useRef(null);

  // Handle emoji click
  const handlePickEmoji = (emojiObject) => {
    // Insert emoji at cursor position
    const input = inputRef.current;
    const cursorPos = input.selectionStart;
    const beforeText = message.substring(0, cursorPos);
    const afterText = message.substring(cursorPos);

    setMessage(beforeText + emojiObject.emoji + afterText);
    // Move cursor position after emoji
    setTimeout(() => {
      input.selectionStart = input.selectionEnd =
        cursorPos + emojiObject.emoji.length;
      input.focus();
    }, 0);
  };

  // Handle text field changes
  const handleChange = (e) => {
    e.preventDefault();
    setMessage(e.target.value);
  };

  const handleSendMessage = () => {
    setMessage("");
    setMessages([...messages, message]);
    // console.log("message is ", message);
  };

  return (
    <div className="chat w-full overflow-y-scroll h-full relative flex flex-col items-center">
      <div className="flex w-full items-center bg-green-500 py-3 px-2 sticky top-0 left-0 right-0">
        <div
          className="flex items-center cursor-pointer"
          onClick={() => navigate("/")}
        >
          <FiChevronLeft size={24} color="#fff" />
          <img
            src={item?.profileImage}
            alt="image not found"
            className="w-10 h-10 rounded-full ml-2"
          />
        </div>
        <div className="ml-2">
          <h1 className="text-white text-sm font-medium capitalize">
            {item?.userName}
          </h1>
          <p className="text-white text-xs">Online</p>
        </div>
      </div>
      <div className="w-full pt-4 min-h-max bg-slate-50">
        <>
          <div className="px-4 flex flex-col">
            {messages?.map((item, index) => (
              <ChatBubble item={item} key={index} />
            ))}
          </div>
          <div className="bg-slate-50 px-4 py-2 sticky bottom-0 left-0 right-0 border-t border-t-slate-100">
            <div className="flex w-full items-center justify-between h-10 border border-slate-200  rounded-full overflow-hidden">
              <div
                className="flex items-center justify-center bg-white w-10 h-full cursor-pointer"
                onClick={() => setShowEmojiPicker(!showEmojiPicker)}
              >
                <MdEmojiEmotions size={20} className="text-slate-400" />
              </div>
              <input
                ref={inputRef}
                value={message}
                onChange={handleChange}
                type="text"
                className="flex-1 h-full outline-none pr-2 z-10"
              />
              <div
                onClick={handleSendMessage}
                className="flex items-center justify-center bg-green-600 w-12 h-full cursor-pointer"
              >
                <FiSend size={20} color="#fff" />
              </div>
            </div>
          </div>
        </>
      </div>
      <>
        {showEmojiPicker && (
          <EmojiPicker
            onEmojiClick={handlePickEmoji}
            allowExpandReactions={true}
            width={"100%"}
            style={{
              position: "absolute",
              tio: 0,
              left: 0,
              right: 0,
            }}
            emojiStyle="facebook"
            previewConfig={{ showPreview: false }}
          />
        )}
      </>
    </div>
  );
}
