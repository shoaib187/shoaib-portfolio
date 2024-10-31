const express = require("express");
const app = express();
const cors = require("cors");
const router = require("./routes/route");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const { MongoClient } = require("mongodb");
require("dotenv").config();

const URL = process.env.URL;
// console.log("MongoDB URL: ", URL);

app.use(express.json());
app.use(bodyParser.json());
app.use(cors());
const API_BASE_URL = 5432;

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
    await client.connect({
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to mongodb database");
  } catch (error) {
    console.log("Error while connecting to mongoDb database", error.message);
  }
};

app.use("/", router);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/home", (req, res) => {
  res.send("Welcome to Home Page!");
});

app.get("/about", (req, res) => {
  res.send("Welcome to about Page!");
});

app.listen(API_BASE_URL, () => {
  try {
    console.log("Server is running on port ", API_BASE_URL);
    connectToMongoDb();
    connectToMongoose();
  } catch (error) {
    console.log("Error while running server internal server error!");
  }
});
