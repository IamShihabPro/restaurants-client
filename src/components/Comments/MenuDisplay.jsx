import React, { useState, useEffect } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';
import useCart from '../../hooks/useCart';


const MenuDisplay = () => {
  const [cart, refetch] = useCart();
  const [data, setData] = useState([...cart]);

  useEffect(() => {
    setData(cart);
  }, [cart]);

  const handleIncreaseQuantity = (id) => {
    const updatedData = data.map((item) =>
      item._id === id
        ? {
            ...item,
            quantity: item.quantity ? item.quantity + 1 : 1,
            totalPrice: item.price && item.quantity ? (item.quantity + 1) * item.price : item.price,
          }
        : item
    );
    setData(updatedData);
  };

  const handleDecreaseQuantity = (id) => {
    const updatedData = data.map((item) =>
      item._id === id && item.quantity && item.quantity > 1
        ? {
            ...item,
            quantity: item.quantity - 1,
            totalPrice: item.price ? (item.quantity - 1) * item.price : item.price,
          }
        : item
    );
    setData(updatedData);
  };

  
  const calculateOverallTotal = () => {
    return data.reduce((acc, item) => {
      return acc + (item.totalPrice || 0);
    }, 0);
  };

  return (
    <div className='mt-28'>
      <h2>Menu</h2>
      <div className="flex justify-center">
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr>
              {/* ... (unchanged) */}
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item._id}>
                {/* ... (unchanged) */}
                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-300">
                  ${item.price ? item.price.toFixed(2) : item.price}
                </td>
                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-300">
                  {item.quantity || 'N/A'}
                </td>
                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-300">
                  ${item.totalPrice ? item.totalPrice.toFixed(2) : item.price}
                </td>
                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-300">
                  <div className="flex items-center">
                    <button
                      className="bg-green-500 text-white px-2 py-1 rounded-full mr-2"
                      onClick={() => handleIncreaseQuantity(item._id)}
                    >
                      <FaPlus />
                    </button>
                    <button
                      className="bg-red-500 text-white px-2 py-1 rounded-full"
                      onClick={() => handleDecreaseQuantity(item._id)}
                    >
                      <FaMinus />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <tfoot>
            <tr>
              <td colSpan="5" className="px-6 py-4 text-right">
                <strong>Total:</strong>
              </td>
              <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-300">
                ${calculateOverallTotal().toFixed(2)}
              </td>
              <td></td>
            </tr>
          </tfoot>
      </div>
    </div>
  );
};

export default MenuDisplay;
