import React, { useEffect, useState } from 'react';
import useCart from '../../hooks/useCart';
import Table from '../../components/Table/Table';

const Order = () => {
    const [cart] = useCart();
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
        <div className='container mx-auto mt-16'>
            <h1 className='text-center font-serif font-bold text-2xl mb-6'>All Food Items</h1>

            <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-300 rounded mx-auto">
                    <thead className="bg-gray-200">
                        <tr className="text-center">
                            <th className="py-2 px-4">Name</th>
                            <th className="py-2 px-4">Category</th>
                            <th className="py-2 px-4">Quantity</th>
                            <th className="py-2 px-4">Price</th>
                        </tr>
                    </thead>
                    <tbody className="text-center">
                        {data.map((item, i) => (
                            <Table
                                item={item}
                                key={i}
                                handleIncreaseQuantity={handleIncreaseQuantity}
                                handleDecreaseQuantity={handleDecreaseQuantity}
                            />
                        ))}
                    </tbody>
                    <tfoot className="bg-gray-200">
                        <tr>
                            <td colSpan="2" className="py-2 px-4 text-right font-bold">
                                Total:
                            </td>
                            <td colSpan="2" className="py-2 px-4 border-t border-gray-300">
                                ${calculateOverallTotal().toFixed(2)}
                            </td>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </div>
    );
};

export default Order;
