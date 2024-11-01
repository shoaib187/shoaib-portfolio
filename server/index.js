const express = require("express");
const app = express();
const cors = require("cors");
const router = require("./routes/route");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const { MongoClient } = require("mongodb");
const Users = require("./models/User");
require("dotenv").config();

const URL = process.env.URL;
console.log("MongoDB URL: ", URL);

app.use(express.json());
app.use(bodyParser.json());
app.use(cors());
const PORT = 5432;

const client = new MongoClient(URL);

const connectToMongoose = async () => {
  try {
    await mongoose.connect(URL, {
      serverSelectionTimeoutMS: 30000,
    });
    console.log("Connected to mongoose ");
  } catch (error) {}
};

const connectToMongoDb = async () => {
  try {
    await client.connect();
    console.log("Connected to mongodb database");
  } catch (error) {
    console.log("Error while connecting to mongoDb database", error.message);
  }
};

app.use("/", router);

// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });

app.get("/home", (req, res) => {
  res.send("Welcome to Home Page!");
});

app.get("/about", async (req, res) => {
  try {
    const users = await Users.find();
    return res.status(200).json(users);
  } catch (err) {
    console.log("Error while getting users!", err);
  }
});

app.get("/get_user", (req, res) => {
  res.send({ message: "Shoaib" });
});

if (mongoose.connection.readyState === 0) {
  connectToMongoose();
}

app.listen(PORT, () => {
  try {
    console.log("Server is running on port ", PORT);
    connectToMongoDb();
  } catch (error) {
    console.log("Error while running server internal server error!");
  }
});
