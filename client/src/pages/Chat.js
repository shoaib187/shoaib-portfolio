import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import io from "socket.io-client";
import axios from "axios";
import { jwtDecode } from "jwt-decode";

const socket = io("http://localhost:5000");

export default function Chat() {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");
  const token = localStorage.getItem("token");
  const userId = localStorage.getItem("userId");

  useEffect(() => {
    if (!token) {
      navigate("/");
      return;
    }

    const decoded = jwtDecode(token);
    socket.emit("join", decoded.userId);

    socket.on("update_users", (userList) => setUsers(userList));
    socket.on("receive_message", (msg) =>
      setMessages((prev) => [...prev, msg])
    );

    return () => socket.off();
  }, [token, navigate]);

  useEffect(() => {
    if (selectedUser) {
      axios
        .get(`http://localhost:5000/api/messages/${userId}/${selectedUser}`)
        .then((res) => setMessages(res.data))
        .catch((err) => console.error("Fetch error", err));
    }
  }, [selectedUser, userId]);

  const sendMessage = async () => {
    if (message.trim() && selectedUser) {
      const msg = { sender: userId, receiver: selectedUser, message };
      socket.emit("private_message", msg);
      await axios.post("http://localhost:5000/api/messages/send", msg);
      setMessages((prev) => [...prev, msg]);
      setMessage("");
    }
  };

  return (
    <div className="flex h-screen">
      <div className="w-1/3 bg-gray-200 p-4">
        <h2 className="text-xl font-bold mb-4">Users</h2>
        {users.map(
          (user) =>
            user !== userId && (
              <div
                key={user}
                className="p-2 bg-white my-2 cursor-pointer"
                onClick={() => setSelectedUser(user)}
              >
                {user}
              </div>
            )
        )}
      </div>

      <div className="w-2/3 flex flex-col bg-gray-100">
        <div className="flex-grow p-4 overflow-auto">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`p-2 my-1 ${
                msg.sender === userId ? "bg-blue-300 text-right" : "bg-gray-300"
              }`}
            >
              {msg.message}
            </div>
          ))}
        </div>

        <div className="p-4 flex">
          <input
            className="border p-2 w-full"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button
            className="bg-blue-500 text-white px-4 ml-2"
            onClick={sendMessage}
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}
