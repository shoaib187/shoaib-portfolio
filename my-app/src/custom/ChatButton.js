import React from "react";
import { FiChevronRight } from "react-icons/fi";
export default function ChatButton({ item, onClick }) {
  return (
    <div
      onClick={onClick}
      className="flex items-center justify-between p-3 border border-slate-100 rounded-lg cursor-pointer mb-2 hover:bg-slate-50"
    >
      <div className="flex w-full">
        <img
          src={item?.profileImage}
          className="w-10 h-10 rounded-full object-cover"
        />
        <div className="pl-4">
          <h1 className="font-medium text-sm capitalize">{item?.userName}</h1>
          <p style={{ fontSize: 12 }}>{item?.messages[0]?.text.slice(0, 27)}</p>
        </div>
      </div>
      <div className="">
        <FiChevronRight size={24} />
      </div>
    </div>
  );
}
