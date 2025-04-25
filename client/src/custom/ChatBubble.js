import React from "react";

export default function ChatBubble({ item }) {
  console.log("item", item);
  return (
    <div
      className={`px-4 py-2 max-w-[80%] mb-2 flex ${
        item?.sender === "bot"
          ? "bg-white self-start rounded-tl-3xl rounded-tr-3xl rounded-br-3xl"
          : "bg-green-500 self-end rounded-tl-3xl rounded-tr-3xl rounded-bl-3xl"
      }`}
    >
      <p
        style={{ color: item?.sender === "bot" ? "black" : "#fff" }}
        className="font-medium text-sm"
      >
        {item?.text}
      </p>
    </div>
  );
}
