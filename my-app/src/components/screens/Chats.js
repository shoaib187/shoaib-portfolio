import "../../App.css";
import { useEffect, useState } from "react";
import { FiSearch } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import ChatButton from "../../custom/ChatButton";

const Chats = () => {
  const navigate = useNavigate();
  const [chats, setChats] = useState([
    {
      userName: "john_doe",
      profileImage: "https://randomuser.me/api/portraits/men/1.jpg",
      role: "sender",
      messages: [
        {
          id: 1,
          text: "Hello, how are you?",
          timestamp: "2024-09-07T10:30:00Z",
          sender: "john_doe",
        },
        {
          id: 2,
          text: "I'm doing well, thank you!",
          timestamp: "2024-09-07T10:31:00Z",
          sender: "jane_smith",
        },
        {
          id: 3,
          text: "What's new with you?",
          timestamp: "2024-09-07T10:32:00Z",
          sender: "john_doe",
        },
        {
          id: 4,
          text: "Not much, just working.",
          timestamp: "2024-09-07T10:33:00Z",
          sender: "jane_smith",
        },
        {
          id: 5,
          text: "Sounds good!",
          timestamp: "2024-09-07T10:34:00Z",
          sender: "john_doe",
        },
        {
          id: 6,
          text: "Let's catch up later.",
          timestamp: "2024-09-07T10:35:00Z",
          sender: "jane_smith",
        },
        {
          id: 7,
          text: "Sure, see you then.",
          timestamp: "2024-09-07T10:36:00Z",
          sender: "john_doe",
        },
        {
          id: 8,
          text: "Bye for now!",
          timestamp: "2024-09-07T10:37:00Z",
          sender: "jane_smith",
        },
        {
          id: 9,
          text: "Take care!",
          timestamp: "2024-09-07T10:38:00Z",
          sender: "john_doe",
        },
        {
          id: 10,
          text: "You too!",
          timestamp: "2024-09-07T10:39:00Z",
          sender: "jane_smith",
        },
      ],
    },
    {
      userName: "michael_brown",
      profileImage: "https://randomuser.me/api/portraits/men/3.jpg",
      role: "receiver",
      messages: [
        {
          id: 1,
          text: "Hey, how's everything?",
          timestamp: "2024-09-07T11:00:00Z",
          sender: "michael_brown",
        },
        {
          id: 2,
          text: "All good here, what about you?",
          timestamp: "2024-09-07T11:01:00Z",
          sender: "emily_jones",
        },
        {
          id: 3,
          text: "Can't complain, life's busy!",
          timestamp: "2024-09-07T11:02:00Z",
          sender: "michael_brown",
        },
        {
          id: 4,
          text: "I hear that. Busy as always.",
          timestamp: "2024-09-07T11:03:00Z",
          sender: "emily_jones",
        },
        {
          id: 5,
          text: "We should catch up soon.",
          timestamp: "2024-09-07T11:04:00Z",
          sender: "michael_brown",
        },
        {
          id: 6,
          text: "Definitely. Let me know when you're free.",
          timestamp: "2024-09-07T11:05:00Z",
          sender: "emily_jones",
        },
        {
          id: 7,
          text: "Will do!",
          timestamp: "2024-09-07T11:06:00Z",
          sender: "michael_brown",
        },
        {
          id: 8,
          text: "Talk soon!",
          timestamp: "2024-09-07T11:07:00Z",
          sender: "emily_jones",
        },
        {
          id: 9,
          text: "For sure, take care.",
          timestamp: "2024-09-07T11:08:00Z",
          sender: "michael_brown",
        },
        {
          id: 10,
          text: "You too!",
          timestamp: "2024-09-07T11:09:00Z",
          sender: "emily_jones",
        },
      ],
    },
    {
      userName: "olivia_wilson",
      profileImage: "https://randomuser.me/api/portraits/women/8.jpg",
      role: "sender",
      messages: [
        {
          id: 1,
          text: "Hey, what's new?",
          timestamp: "2024-09-07T12:00:00Z",
          sender: "olivia_wilson",
        },
        {
          id: 2,
          text: "Not much, how about you?",
          timestamp: "2024-09-07T12:01:00Z",
          sender: "daniel_martinez",
        },
        {
          id: 3,
          text: "Just working on some projects.",
          timestamp: "2024-09-07T12:02:00Z",
          sender: "olivia_wilson",
        },
        {
          id: 4,
          text: "Sounds interesting!",
          timestamp: "2024-09-07T12:03:00Z",
          sender: "daniel_martinez",
        },
        {
          id: 5,
          text: "Yeah, keeping me busy.",
          timestamp: "2024-09-07T12:04:00Z",
          sender: "olivia_wilson",
        },
        {
          id: 6,
          text: "Good to stay busy!",
          timestamp: "2024-09-07T12:05:00Z",
          sender: "daniel_martinez",
        },
        {
          id: 7,
          text: "True, talk later?",
          timestamp: "2024-09-07T12:06:00Z",
          sender: "olivia_wilson",
        },
        {
          id: 8,
          text: "Sure, take care.",
          timestamp: "2024-09-07T12:07:00Z",
          sender: "daniel_martinez",
        },
        {
          id: 9,
          text: "Bye!",
          timestamp: "2024-09-07T12:08:00Z",
          sender: "olivia_wilson",
        },
        {
          id: 10,
          text: "Later!",
          timestamp: "2024-09-07T12:09:00Z",
          sender: "daniel_martinez",
        },
      ],
    },
    {
      userName: "isabella_clark",
      profileImage: "https://randomuser.me/api/portraits/women/10.jpg",
      role: "receiver",
      messages: [
        {
          id: 1,
          text: "Hey, long time no talk!",
          timestamp: "2024-09-07T13:00:00Z",
          sender: "isabella_clark",
        },
        {
          id: 2,
          text: "I know, how have you been?",
          timestamp: "2024-09-07T13:01:00Z",
          sender: "james_garcia",
        },
        {
          id: 3,
          text: "Doing well, staying busy.",
          timestamp: "2024-09-07T13:02:00Z",
          sender: "isabella_clark",
        },
        {
          id: 4,
          text: "Same here.",
          timestamp: "2024-09-07T13:03:00Z",
          sender: "james_garcia",
        },
        {
          id: 5,
          text: "We should catch up soon.",
          timestamp: "2024-09-07T13:04:00Z",
          sender: "isabella_clark",
        },
        {
          id: 6,
          text: "Let's plan something!",
          timestamp: "2024-09-07T13:05:00Z",
          sender: "james_garcia",
        },
        {
          id: 7,
          text: "Definitely!",
          timestamp: "2024-09-07T13:06:00Z",
          sender: "isabella_clark",
        },
        {
          id: 8,
          text: "Let me know when you're free.",
          timestamp: "2024-09-07T13:07:00Z",
          sender: "james_garcia",
        },
        {
          id: 9,
          text: "Will do!",
          timestamp: "2024-09-07T13:08:00Z",
          sender: "isabella_clark",
        },
        {
          id: 10,
          text: "Talk later!",
          timestamp: "2024-09-07T13:09:00Z",
          sender: "james_garcia",
        },
      ],
    },
    {
      userName: "sophia_lopez",
      profileImage: "https://randomuser.me/api/portraits/women/12.jpg",
      role: "sender",
      messages: [
        {
          id: 1,
          text: "Hey, David!",
          timestamp: "2024-09-07T14:00:00Z",
          sender: "sophia_lopez",
        },
        {
          id: 2,
          text: "Hey, how are you?",
          timestamp: "2024-09-07T14:01:00Z",
          sender: "david_thomas",
        },
        {
          id: 3,
          text: "I'm doing well, thanks!",
          timestamp: "2024-09-07T14:02:00Z",
          sender: "sophia_lopez",
        },
        { id: 4, text: "That's great to hear!", timestamp: "" },
      ],
    },
  ]);
  const [filteredUser, setFilteredUser] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const filtered = chats.filter((item) =>
      item.userName.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredUser(filtered);
  }, [query]);

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
            onChange={(text) => setQuery(text.target.value)}
            type="text"
            className="flex-1 h-full outline-none pl-3"
          />
          <div className="flex items-center justify-center bg-green-600 w-12 h-full cursor-pointer">
            <FiSearch size={20} color="#fff" />
          </div>
        </div>
        {filteredUser.map((item, index) => (
          <ChatButton
            onClick={() => navigate("chat", { state: item })}
            item={item}
            key={index}
          />
        ))}
      </div>
    </>
  );
};

export { Chats };
