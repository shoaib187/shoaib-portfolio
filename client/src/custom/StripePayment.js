import React, { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import {
  Elements,
  useStripe,
  useElements,
  CardNumberElement,
  CardExpiryElement,
  CardCvcElement,
  AddressElement,
  PaymentElement,
} from "@stripe/react-stripe-js";

const stripePromise = loadStripe(
  "pk_test_51QWD0TGqld81teEZSxGlOrNEcxPIwgoBRouzCn7o2Mef3B2s3psSNiDz9lMGn3ByamaBmP4qUNgvVWq8BPPWjcnd00Hlhps6MN"
);

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [loading, setLoading] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("card");

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    const response = await fetch(
      "http://localhost:5000/create-payment-intent",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          amount: 2000,
          paymentMethodType: paymentMethod,
        }),
      }
    );

    const data = await response.json();
    if (!data.clientSecret) {
      alert("Payment initialization failed. Please try again.");
      setLoading(false);
      return;
    }

    let result;
    if (paymentMethod === "card") {
      result = await stripe.confirmCardPayment(data.clientSecret, {
        payment_method: {
          card: elements.getElement(CardNumberElement),
        },
      });
    } else if (paymentMethod === "paypal") {
      result = await stripe.confirmPayPalPayment(data.clientSecret);
    }

    if (result.error) {
      alert(`Payment Failed: ${result.error.message}`);
    } else {
      alert("Payment Successful!");
    }
    setLoading(false);
  };

  return (
    <div style={{ maxWidth: "400px", margin: "auto", textAlign: "center" }}>
      <h2>Select Payment Method</h2>
      <select
        value={paymentMethod}
        onChange={(e) => setPaymentMethod(e.target.value)}
        style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
      >
        <option value="card">Credit/Debit Card</option>
        <option value="paypal">PayPal</option>
      </select>

      {paymentMethod === "card" && (
        <div>
          <CardNumberElement
            options={{ style: { base: { fontSize: "16px" } } }}
          />
          <CardExpiryElement
            options={{ style: { base: { fontSize: "16px" } } }}
          />
          <CardCvcElement options={{ style: { base: { fontSize: "16px" } } }} />
          <AddressElement options={{ mode: "billing" }} />
          {/* <PaymentElement options={{ wallets: { googlePay: "auto" } }} /> */}
        </div>
      )}

      <button
        type="submit"
        onClick={handleSubmit}
        disabled={!stripe || loading}
        style={{
          width: "100%",
          padding: "10px",
          backgroundColor: "#007bff",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        {loading ? "Processing..." : `Pay with ${paymentMethod.toUpperCase()}`}
      </button>
    </div>
  );
};

const StripePayment = () => (
  <Elements stripe={stripePromise}>
    <CheckoutForm />
  </Elements>
);

export default StripePayment;
