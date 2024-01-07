import React from 'react';

const Table = ({ item, handleIncreaseQuantity, handleDecreaseQuantity }) => {
    return (
        <>
            <tr>
                <td>
                    <div className="flex items-center gap-3">
                        <div className="avatar">
                            <div className="mask mask-squircle w-12 h-12">
                                <img src={item.image} alt="Avatar Tailwind CSS Component" />
                            </div>
                        </div>
                        <div>
                            <div className="font-bold">{item.name}</div>
                        </div>
                    </div>
                </td>
                <td>
                    {item.category}
                </td>

                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-300 flex justify-center gap-4">
                    <button
                        className="bg-green-500 text-white px-4 py-2 rounded-full mr-2"
                        onClick={() => handleIncreaseQuantity(item._id)}
                    >
                        +
                    </button>
                    {item.quantity}
                    <button
                        className="bg-red-500 text-white px-4 py-2 rounded-full"
                        onClick={() => handleDecreaseQuantity(item._id)}
                    >
                        -
                    </button>
                </td>

                <td>
                    ${item.totalPrice ? item.totalPrice.toFixed(2) : '0.00'}
                </td>
               
            </tr>
        </>
    );
};

export default Table;
