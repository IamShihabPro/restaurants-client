import React, { useState } from 'react';

const Table = () => {
  const [data, setData] = useState([
    {
      id: 1,
      image: 'https://example.com/image1.jpg',
      name: 'Product 1',
      price: 19.99,
      quantity: 1,
      totalPrice: 19.99, // Initialize totalPrice
    },
    {
      id: 2,
      image: 'https://example.com/image2.jpg',
      name: 'Product 2',
      price: 29.99,
      quantity: 1,
      totalPrice: 29.99, // Initialize totalPrice
    },
    // Add more data as needed
  ]);

  const handleIncreaseQuantity = (id) => {
    setData((prevData) =>
      prevData.map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity + 1, totalPrice: (item.quantity + 1) * item.price }
          : item
      )
    );
  };

  const handleDecreaseQuantity = (id) => {
    setData((prevData) =>
      prevData.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1, totalPrice: (item.quantity - 1) * item.price }
          : item
      )
    );
  };

  return (
    <div className="flex justify-center">
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr>
            <th className="px-6 py-3 border-b border-gray-300 text-left text-sm leading-4 font-medium text-gray-700">
              Image
            </th>
            <th className="px-6 py-3 border-b border-gray-300 text-left text-sm leading-4 font-medium text-gray-700">
              Name
            </th>
            <th className="px-6 py-3 border-b border-gray-300 text-left text-sm leading-4 font-medium text-gray-700">
              Price
            </th>
            <th className="px-6 py-3 border-b border-gray-300 text-left text-sm leading-4 font-medium text-gray-700">
              Quantity
            </th>
            <th className="px-6 py-3 border-b border-gray-300 text-left text-sm leading-4 font-medium text-gray-700">
              Total Price
            </th>
            <th className="px-6 py-3 border-b border-gray-300 text-left text-sm leading-4 font-medium text-gray-700">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-300">
                <img
                  className="h-10 w-10 rounded-full"
                  src={item.image}
                  alt={`Product ${item.id}`}
                />
              </td>
              <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-300">
                {item.name}
              </td>
              <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-300">
                ${item.price.toFixed(2)}
              </td>
              <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-300">
                {item.quantity}
              </td>
              <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-300">
                ${item.totalPrice.toFixed(2)}
              </td>
              <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-300">
                <button
                  className="bg-green-500 text-white px-2 py-1 rounded-full mr-2"
                  onClick={() => handleIncreaseQuantity(item.id)}
                >
                  +
                </button>
                <button
                  className="bg-red-500 text-white px-2 py-1 rounded-full"
                  onClick={() => handleDecreaseQuantity(item.id)}
                >
                  -
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
