// Order.jsx
import React, { useContext, useEffect, useState } from 'react';
import useCart from '../../hooks/useCart';
import Table from '../../components/Table/Table';
import { AuthContext } from '../../Provider/AuthProvider';

const Order = () => {
    const [cart] = useCart();
    const [data, setData] = useState([...cart]);

    const { user } = useContext(AuthContext);

    useEffect(() => {
        setData(cart.map(item => ({
            ...item,
            quantity: 1,
            totalPrice: item.price ? item.price : 0,
        })));
    }, [cart]);

    const handleIncreaseQuantity = (id) => {
        const updatedData = data.map((item) =>
            item._id === id
                ? {
                    ...item,
                    quantity: item.quantity + 1,
                    totalPrice: item.price ? (item.quantity + 1) * item.price : item.price,
                }
                : item
        );
        setData(updatedData);
    };

    const handleDecreaseQuantity = (id) => {
        const updatedData = data.map((item) =>
            item._id === id && item.quantity > 1
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
        <div className='container mx-auto mt-28'>
            {
                user ?
                    <div className="overflow-x-auto">
                        <table className="min-w-full bg-white border border-gray-300 rounded mx-auto">
                            <thead className="bg-gray-200">
                                <tr className="text-center">
                                    <th className="py-2 px-4">Name</th>
                                    <th className="py-2 px-4">Category</th>
                                    <th className="py-2 px-4">Quantity</th>
                                    <th className="py-2 px-4">Price</th>
                                    <th className="py-2 px-4">Total Price</th>
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
                                    <td colSpan="3" className="py-2 px-4 text-right font-bold">
                                        Total:
                                    </td>
                                    <td colSpan="2" className="py-2 px-4 border-t border-gray-300">
                                        ${calculateOverallTotal().toFixed(2)}
                                    </td>
                                </tr>
                            </tfoot>
                        </table>
                    </div>
                    :
                    <h1 className='text-2xl font-bold font-serif text-center mt-40'> No order food. <br /> Please login for order food. </h1>
            }
        </div>
    );
};

export default Order;
