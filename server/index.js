require("dotenv").config();
const express = require("express");
const http = require("http");
const mongoose = require("mongoose");
const { Server } = require("socket.io");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const cors = require("cors");

const app = express();
const server = http.createServer(app);
const io = new Server(server, { cors: { origin: "*" } });

app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 8000;
const MONGO_URI = process.env.MONGO_URI;

// Connect to MongoDB
const connectToMongoose = () => {
  try {
    mongoose.connect(MONGO_URI, {
      serverSelectionTimeoutMS: 30000,
    });
    console.log("MongoDB connected");
  } catch (error) {
    console.error("MongoDB connection error:", error);
  }
};

// User schema
const UserSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String,
});
const User = mongoose.model("User", UserSchema);

// Message schema
const MessageSchema = new mongoose.Schema({
  senderId: String,
  receiverId: String,
  content: String,
  timestamp: { type: Date, default: Date.now },
  read: { type: Boolean, default: false },
});
const Message = mongoose.model("Message", MessageSchema);

// Register user
app.post("/register", async (req, res) => {
  const { username, email, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = new User({ username, email, password: hashedPassword });

  await newUser.save();
  return res.json({ message: "User registered successfully" });
});

// Login user and generate token
app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (user && (await bcrypt.compare(password, user.password))) {
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
    res.json({ token, userId: user._id, username: user.username });
  } else {
    res.status(401).json({ message: "Invalid credentials" });
  }
});

// Socket.IO events
io.on("connection", (socket) => {
  console.log("User connected:", socket.id);

  // Listen for messages
  socket.on("sendMessage", async ({ senderId, receiverId, content }) => {
    try {
      const message = new Message({ senderId, receiverId, content });
      await message.save();
      io.to(receiverId).emit("receiveMessage", message);
    } catch (error) {
      console.log("Error saving message:", error);
    }
  });

  socket.on("disconnect", () => {
    console.log("User disconnected:", socket.id);
  });
});

server.listen(PORT, () => {
  connectToMongoose();
  console.log(`Server running on port ${PORT}`);
});
