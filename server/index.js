require("dotenv").config();
const express = require("express");
const cors = require("cors");
const http = require("http");
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

const app = express();
const server = http.createServer(app);
const path = require("path");
app.use("/ads.txt", express.static(path.join(__dirname, "ads.txt")));

app.use(cors());
app.use(express.json());

app.post("/create-payment-intent", async (req, res) => {
  try {
    const { amount, paymentMethodType } = req.body;

    if (!amount || amount <= 0) {
      return res.status(400).json({ error: "Invalid amount" });
    }

    let paymentMethodTypes = ["card"]; // Default payment method

    // Enable additional payment methods dynamically
    if (paymentMethodType === "paypal") {
      paymentMethodTypes.push("paypal");
    } else if (paymentMethodType === "link") {
      paymentMethodTypes.push("link");
    } else if (paymentMethodType === "cashapp") {
      paymentMethodTypes.push("cashapp");
    }

    const paymentIntent = await stripe.paymentIntents.create({
      amount: amount, // Amount in cents
      currency: "usd",
      payment_method_types: paymentMethodTypes,
    });

    if (!paymentIntent.client_secret) {
      throw new Error("Failed to create payment intent");
    }

    return res.json({ clientSecret: paymentIntent.client_secret });
  } catch (error) {
    console.error("Error creating payment intent:", error.message);
    return res.status(500).json({ error: error.message });
  }
});

server.listen(5000, () => console.log("Server running on port 5000"));
