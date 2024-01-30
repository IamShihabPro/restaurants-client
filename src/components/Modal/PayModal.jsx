// PayModal.jsx
import { Elements } from '@stripe/react-stripe-js';
import React from 'react';
import CheckoutForm from '../Payment/CheckoutForm';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY);

const PayModal = ({ isOpen, onClose, overallTotal, data, resultData }) => {
  return (
    <div
      className={`fixed inset-0 font-serif ${
        isOpen ? 'block' : 'hidden'
      } bg-black bg-opacity-50 z-50`}
    >
      <div className="flex items-center justify-center h-screen">
        <div className="bg-white p-6 rounded-lg w-96 relative">
          <button
            className="absolute top-0 right-0 m-2 text-gray-700 hover:text-gray-900 p-4 font-bold"
            onClick={onClose}
          >
            ✕
          </button>

          <div className="mt-4">
            <h1 className="text-lg text-center font-bold font-serif mt-4 mb-8">Payments Here</h1>
            <Elements stripe={stripePromise}>
              <CheckoutForm overallTotal={overallTotal} data={data} address={resultData} />
            </Elements>
          </div>        
        </div>
      </div>
    </div>
  );
};

export default PayModal;
