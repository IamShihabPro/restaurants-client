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
        <div className='container mx-auto mt-28'>
            <h1 className='text-center font-serif font-bold text-2xl'>All Food Item</h1>

            <div className="overflow-x-auto">
                <table className="table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Category</th>
                            <th>Quantity</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item, i) => (
                            <Table
                                item={item}
                                key={i}
                                handleIncreaseQuantity={handleIncreaseQuantity}
                                handleDecreaseQuantity={handleDecreaseQuantity}
                            />
                        ))}
                    </tbody>
                    <tfoot>
                        <tr>
                            <td colSpan="3" className="px-6 py-4 text-right">
                                <strong>Total:</strong>
                            </td>
                            <td colSpan="2" className="px-6 py-4 whitespace-no-wrap border-b border-gray-300">
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
