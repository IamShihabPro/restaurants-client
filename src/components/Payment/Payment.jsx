import React from "react";
import CheckoutForm from "./CheckoutForm";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

const Payment = () => {
  const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY);

  return (
    <div className="container mx-auto flex flex-col items-center mt-10">
      <h1 className="text-3xl font-semibold mb-6">Secure Payment</h1>

      <div className="w-full lg:w-1/2 mx-auto px-4">
        <Elements stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
