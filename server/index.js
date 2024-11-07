// const express = require("express");
// const app = express();
// const cors = require("cors");
// const router = require("./routes/route");
// const mongoose = require("mongoose");
// const bodyParser = require("body-parser");
// const { MongoClient } = require("mongodb");
// const Users = require("./models/User");
// require("dotenv").config();
// const URL = process.env.URL;
// console.log("MongoDB URL: ", URL);
// app.use(express.json());
// app.use(bodyParser.json());
// app.use(cors());
// const PORT = 5432;

// const http = require("http");
// const { Server } = require("socket.io");

// const server = http.createServer(app);
// const io = new Server(server, {
//   cors: {
//     origin: "*", // Replace with your client’s URL in production
//     methods: ["GET", "POST"],
//   },
// });

// io.on("connection", (socket) => {
//   console.log("A user connected: " + socket.id);
//   socket.on("message", (msg) => {
//     console.log("Message received:", msg);
//     io.emit("message", `Server response to: ${msg}`);
//   });

//   socket.on("disconnect", () => {
//     console.log("User disconnected: " + socket.id);
//   });
// });

// server.listen(PORT, () => {
//   console.log(`Server listening on port ${PORT}`);
// });

// const client = new MongoClient(URL);

// const connectToMongoose = async () => {
//   try {
//     await mongoose.connect(URL, {
//       serverSelectionTimeoutMS: 30000,
//     });
//     console.log("Connected to mongoose ");
//   } catch (error) {}
// };

// const connectToMongoDb = async () => {
//   try {
//     await client.connect();
//     console.log("Connected to mongodb database");
//   } catch (error) {
//     console.log("Error while connecting to mongoDb database", error.message);
//   }
// };

// app.use("/", router);

// // app.get("/", (req, res) => {
// //   res.send("Hello World!");
// // });

// app.get("/home", (req, res) => {
//   res.send("Welcome to Home Page!");
// });

// app.get("/about", async (req, res) => {
//   try {
//     const users = await Users.find();
//     return res.status(200).json(users);
//   } catch (err) {
//     console.log("Error while getting users!", err);
//   }
// });

// app.get("/get_user", (req, res) => {
//   res.send({ message: "Shoaib" });
// });

// if (mongoose.connection.readyState === 0) {
//   connectToMongoose();
// }

// app.listen(PORT, () => {
//   try {
//     console.log("Server is running on port ", PORT);
//     connectToMongoDb();
//   } catch (error) {
//     console.log("Error while running server internal server error!");
//   }
// });

const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const cors = require("cors");
const Message = require("./models/Message");
const User = require("./models/User");
const app = express();
const { MongoClient } = require("mongodb");
const socketIo = require("socket.io");

const http = require("http");
const { Server } = require("socket.io");
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "*",
    credentials: true,
    methods: ["GET", "POST"],
    allowedHeaders: ["my-custom-header"],
  },
});

app.use(express.json());
app.use(cors());

const PORT = 4000;

// Connect to Mongoose
const connectToMongoose = () => {
  try {
    mongoose.connect(
      "mongodb+srv://ms0319255:hkPA6m6dTEsnw2vJ@trinity.imcsgrs.mongodb.net/?appName=Trinity"
    );
    console.log("Connected to mongoose!");
  } catch (error) {
    console.log("Error while connecting to mongoose database!", error.message);
  }
};

// Connect to MongoDb
const client = new MongoClient(
  "mongodb+srv://ms0319255:hkPA6m6dTEsnw2vJ@trinity.imcsgrs.mongodb.net/?appName=Trinity"
);

const connectToMongoDb = async () => {
  try {
    await client.connect();
    console.log("Connected to mongodb database");
  } catch (error) {
    console.log("Error while connecting to mongoDb database", error.message);
  }
};

app.get("/", (req, res) => {
  res.send({ message: "hi shoaib" });
});

// Registration Endpoint
app.post("/register", async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const user = new User({
      username: req.body.username,
      password: hashedPassword,
    });
    await user.save();
    res.status(201).send("User registered successfully");
  } catch (error) {
    res.status(400).send("User registration failed");
  }
});
// Login Endpoint
app.post("/login", async (req, res) => {
  const user = await User.findOne({ username: req.body.username });
  if (user && (await bcrypt.compare(req.body.password, user.password))) {
    const token = jwt.sign({ id: user._id }, "secretkey"); // Replace 'secretkey' with a real secret key
    // console.log(token);
    return res.json({ token });
  } else {
    return res.status(400).send("Invalid credentials");
  }
});

app.get("/users", async (req, res) => {
  const users = await User.find({}, "username"); // Only return username
  res.json(users);
});

// Real-time chat with Socket.io
io.on("connection", (socket) => {
  console.log("A new user has connected", socket.id);
  // Listen for incoming messages from clients
  socket.on("message", (message) => {
    // Broadcast the message to all connected clients
    io.emit("message", message);
  });

  // Handle disconnections
  socket.on("disconnect", () => {
    console.log(socket.id, " disconnected");
  });
});

server.listen(PORT, () => {
  try {
    console.log("Server is running on port ", PORT);
    // connectToMongoose();
    // connectToMongoDb();
  } catch (error) {
    console.log("Error while running server internal server error!");
  }
});
