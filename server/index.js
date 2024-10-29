const express = require("express");
const app = express();
const cors = require("cors");
const router = require("./routes/route");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const { MongoClient } = require("mongodb");
require("dotenv").config();

app.use(express.json());
app.use(bodyParser.json());
app.use(cors());
const API_BASE_URL = process.env.SECRET_KEY || 5432;

const URL =
  "mongodb+srv://ms0319255:hkPA6m6dTEsnw2vJ@trinity.imcsgrs.mongodb.net/?appName=Trinity";
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

app.listen(API_BASE_URL, () => {
  try {
    console.log("Server is running on port ", API_BASE_URL);
    connectToMongoDb();
    connectToMongoose();
  } catch (error) {
    console.log("Error while running server internal server error!");
  }
});
