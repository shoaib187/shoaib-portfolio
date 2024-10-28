const express = require("express");
const app = express();

const API_BASE_URL = process.env.SECRET_KEY || 5432;

app.get("/", (req, res) => {
  res.send({ message: "Welcome to my App!" });
});

app.listen(API_BASE_URL, () => {
  console.log(`Server is running on port ${API_BASE_URL}`);
});
