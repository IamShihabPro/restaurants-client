import React from "react";

const AllPayment = ({ payment }) => {
  const { name, email, totalAmount, transactionId, date } = payment;
  const { address, city, zipcode } = payment.address;

  return (
    <div className="my-4 bg-green-50 p-6 md:p-8 rounded-lg shadow-md border border-gray-300 mx-4">
      {/* Part 1: Name and Email */}
      <div className="flex flex-col md:flex-row items-start justify-between mb-6">
        <div className="md:w-1/2 mb-4 md:mb-0">
          <p className="text-xl font-semibold text-gray-800">Name:</p>
          <p className="text-lg text-gray-600">{name}</p>
        </div>

        <div className="md:w-1/2">
          <p className="text-xl font-semibold text-gray-800">Email:</p>
          <p className="text-lg text-gray-600">{email}</p>
        </div>
      </div>

      {/* Part 2: Address Details */}
      <div className="mb-6 flex- flex-col justify-center lg:justify-start items-center">
        <p className="text-xl font-semibold text-gray-800">Address:</p>
        <p className="text-lg text-gray-600">{address}</p>
      </div>

      {/* City and Zip Code Divs */}
      <div className="flex flex-col lg:flex-row md:flex-row items-start justify-center lg:justify-between gap-2">
        {/* City Div */}
        <div className="mb-4 md:mb-0 flex justify-center items-center gap-2">
          <p className="text-xl font-semibold text-gray-800">City:</p>
          <p className="text-lg text-gray-600">{city}</p>
        </div>

        {/* Zip Code Div */}
        <div className="flex justify-center items-center gap-2">
          <p className="text-xl font-semibold text-gray-800">Zip Code:</p>
          <p className="text-lg text-gray-600">{zipcode}</p>
        </div>
      </div>

      <div>
        <div className="grid grid-cols-1 lg:grid-cols-3 mt-3 gap-2">
          {payment?.data?.map((order, i) => (
            <>
              <div className="bg-green-200 text-black p-2 rounded-md shadow-md">
                <p>Name: {order.name}</p>
                <p>Price: {order.price}</p>
                <p>Quantity: {order.quantity}</p>
              </div>
            </>
          ))}
        </div>
        <div className="flex flex-col gap-2 mt-2">
          <h1 className="text-md font-bold mt-2">
            Total Amount: {totalAmount}
          </h1>
          <p>Transaction Id: {transactionId}</p>
          <p>Date: {date}</p>
        </div>
      </div>
    </div>
  );
};

export default AllPayment;
