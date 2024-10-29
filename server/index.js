const express = require("express");
const app = express();
const cors = require("cors");
const API_BASE_URL = process.env.SECRET_KEY || 5432;

app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "UPDATE", "DELETE", "PUT", "PATCH"],
    credentials: true,
  })
);

app.use(cors());
app.get("/api/dummyData", (req, res) => {
  res.send({ message: "Welcome to my App!" });
});

app.listen(API_BASE_URL, () => {
  console.log(`Server is running on port ${API_BASE_URL}`);
});

// backend    https://shoaib-portfolio-kohl.vercel.app/api/dummyData
// frontend   https://shoaib-portfolio-kz7z.vercel.app
