import React from 'react';
import { FaTrash } from "react-icons/fa";


const Table = ({ item, handleIncreaseQuantity, handleDecreaseQuantity, handleDelete }) => {
    return (
        <>
            <tr className="text-center">
                <td className="py-4 px-6">
                    <div className="flex items-center gap-3">
                        <div className="avatar">
                            <div className="mask w-14 h-14">
                                <img src={item.image} alt="Avatar Tailwind CSS Component" className="w-full h-full object-cover" />
                            </div>
                        </div>
                        <div>
                            <div className="font-bold">{item.name}</div>
                        </div>
                    </div>
                </td>
                <td className="py-4 px-6 uppercase font-semibold">
                    {item.category}
                </td>
                <td className="py-4 px-6 whitespace-no-wrap flex items-center justify-center gap-2">
                    <button
                        className="bg-green-500 text-white px-4 py-1 mr-2"
                        onClick={() => handleIncreaseQuantity(item._id)}
                    >
                        +
                    </button>
                    <span className="text-lg font-bold">{item.quantity || 1}</span>
                    <button
                        className="bg-red-500 text-white px-4 py-1 ml-2 btn-outline"
                        onClick={() => handleDecreaseQuantity(item._id)}
                    >
                        -
                    </button>
                </td>

                {/* <td className="py-4 px-6">
                    ${item.price.toFixed(2)}
                </td> */}

                <td className="py-4 px-6 font-bold">
                    ${item.totalPrice ? item.totalPrice.toFixed(2) : '0.00'}
                </td>

                <td>
                    <button onClick={() => handleDelete(item)} className='btn rounded-none bg-red-600 text-white btn-sm hover:bg-orange-600'> <FaTrash /> </button>
                </td>
            </tr>
        </>
    );
};

export default Table;
