import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useEffect, useState } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useAuth from "../../hooks/useAuth";
import './CheckoutForm.css'
import useCart from "../../hooks/useCart";
import { useNavigate } from "react-router-dom";

const CheckoutForm = ({overallTotal, data, address}) => {
  const stripe = useStripe();
  const elements = useElements();
  const [cardError, setCardError] = useState('')
  const [clientSecret, setClientSecret] = useState("");
  const [transactionId, setTransactionId] = useState('')
  const [processing, setProcessing] = useState(false)
  const [axiosSecure] = useAxiosSecure()
  const [ refetch] = useCart();
  const navigate = useNavigate()

  const {user} = useAuth()

  useEffect(() => {
    axiosSecure.post('/create-payment-intent', { overallTotal })
      .then(res => {
        setClientSecret(res?.data?.clientSecret);
      })
      .catch(error => {
        console.error('Error fetching payment intent:', error);
      });
  }, [axiosSecure, overallTotal]);
  

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }
    console.log('card', card);

    // Use your card Element with other Stripe.js APIs
    const {error, paymentMethod} = await stripe.createPaymentMethod({
      type: 'card',
      card,
    });

    if (error) {
      console.log('[error]', error);
      setCardError(error.message)
    } else {
      setCardError('')
      console.log('[PaymentMethod]', paymentMethod);
    }
    setProcessing(true)

    const {paymentIntent, error: confirmError} = await stripe.confirmCardPayment(
      clientSecret,
      {
        payment_method: {
          card: card,
          billing_details: {
            name: user?.displayName|| 'unknown',
            email: user?.email|| 'anonymous',
          },
        },
      },
    );


    if(confirmError){
      // setCardError()
      console.log(confirmError);
    }
    console.log(paymentIntent);
    setProcessing(false)

    if(paymentIntent.status === 'succeeded' ){
      // const transactionId = paymentIntent.id
      setTransactionId(paymentIntent.id)
      const payment = {
        email: user?.email, 
        name: user?.displayName,
        transactionId: paymentIntent.id,
        date: new Date(),
        totalAmount: overallTotal,
        data,
        cartItems: data.map(item => item._id),
        menuItems: data.map(item => item.menuItemId),
        address,
        status: 'panding'
       }
       axiosSecure.post('/payments', payment)
       .then(res => {
        console.log(res.data)
        if(res.data.result.insertedId){
          refetch()
          navigate('/')
        }
       })
    }


  };
  return (
    <>
    <form onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: "16px",
              color: "#424770",
              "::placeholder": {
                color: "#aab7c4",
              },
            },
            invalid: {
              color: "#9e2146",
            },
          },
        }}
      />
      <button className="btn btn-primary btn-sm px-4 py-2 flex justify-center w-full mt-8 mb-4" type="submit" disabled={!stripe || !clientSecret || processing}>
        Pay
      </button>
    </form>
    {
      cardError && <p className="text-red-500 font-serif font-bold">{cardError}</p>
    }
    {
      transactionId && <p className="text-green-500 font-serif font-bold">Transaction complete. <br /> Transaction Id: {transactionId}</p>
    }
    </>
  );
};

export default CheckoutForm;
