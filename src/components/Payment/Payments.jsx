import React from "react";
import CheckoutForm from "./CheckoutForm";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";


const Payments = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;

    const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY);
    return (
        <div className="fixed inset-0 flex items-center justify-center z-50">
        <div className="fixed inset-0 bg-gray-800 opacity-50" onClick={onClose}></div>
        <div className="bg-white p-4 rounded shadow-md relative z-10 w-96">
          <button
            className="absolute top-0 right-0 m-2 text-gray-700 hover:text-gray-900"
            onClick={onClose}
          >
            ✕
          </button>
          {children}

         <div className="mt-4">
          <h1 className="text-lg text-center font-bold font-serif mt-4 mb-8">Payments Here</h1>
            <Elements  stripe={stripePromise}>
            <CheckoutForm />
            </Elements>
         </div>
        </div>
      </div>
    );
};

export default Payments;