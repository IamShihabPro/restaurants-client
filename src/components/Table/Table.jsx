// Table.jsx
import React from 'react';

const Table = ({ item, handleIncreaseQuantity, handleDecreaseQuantity }) => {
    return (
        <>
            <tr className="text-center">
                <td className="py-4 px-6">
                    <div className="flex items-center gap-3">
                        <div className="avatar">
                            <div className="mask mask-squircle w-12 h-12">
                                <img src={item.image} alt="Avatar Tailwind CSS Component" className="w-full h-full object-cover" />
                            </div>
                        </div>
                        <div>
                            <div className="font-bold">{item.name}</div>
                        </div>
                    </div>
                </td>
                <td className="py-4 px-6">
                    {item.category}
                </td>
                <td className="py-4 px-6 whitespace-no-wrap">
                    <button
                        className="bg-green-500 text-white px-4 py-2 rounded-full mr-2"
                        onClick={() => handleIncreaseQuantity(item._id)}
                    >
                        +
                    </button>
                    <span className="text-lg font-bold">{item.quantity || 1}</span>
                    <button
                        className="bg-red-500 text-white px-4 py-2 rounded-full ml-2"
                        onClick={() => handleDecreaseQuantity(item._id)}
                    >
                        -
                    </button>
                </td>
                <td className="py-4 px-6">
                    ${item.price.toFixed(2)}
                </td>
                <td className="py-4 px-6">
                    ${item.totalPrice ? item.totalPrice.toFixed(2) : '0.00'}
                </td>
            </tr>
        </>
    );
};

export default Table;
