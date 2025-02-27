const express = require("express");
const Message = require("../models/Message");

const router = express.Router();

// Save Message
router.post("/send", async (req, res) => {
  try {
    const { sender, receiver, message } = req.body;

    const newMessage = new Message({ sender, receiver, message });
    await newMessage.save();

    res.status(201).json({ message: "Message sent!" });
  } catch (error) {
    res.status(500).json({ error: "Error sending message" });
  }
});

// Fetch Messages
router.get("/:sender/:receiver", async (req, res) => {
  try {
    const { sender, receiver } = req.params;
    const messages = await Message.find({
      $or: [
        { sender, receiver },
        { sender: receiver, receiver: sender },
      ],
    }).sort("timestamp");

    res.json(messages);
  } catch (error) {
    res.status(500).json({ error: "Error fetching messages" });
  }
});

module.exports = router;
