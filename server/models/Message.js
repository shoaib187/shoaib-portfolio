const mongoose = require("mongoose");
const messageSchema = new mongoose.Schema({
  text: String,
  sender: String,
  recipient: String,
  timestamp: Date,
});
const Message = mongoose.model("Message", messageSchema);
module.exports = Message;
