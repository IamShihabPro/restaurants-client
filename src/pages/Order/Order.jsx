// Order.jsx
import React, { useContext, useEffect, useState } from 'react';
import useCart from '../../hooks/useCart';
import Table from '../../components/Table/Table';
import { AuthContext } from '../../Provider/AuthProvider';
import Loader from '../../components/Loader/Loader';
import Swal from 'sweetalert2';

const Order = () => {
    const [cart, refetch] = useCart();
    const [data, setData] = useState([...cart]);

    const { user, loading } = useContext(AuthContext);

   

    useEffect(() => {
        setData(cart?.map(item => ({
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

    const handleDelete = (item) => {
        Swal.fire({
            title: "Are you sure?",
            text: "Remove this food item from cart",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Delete"
          }).then((result) => {
            if (result.isConfirmed) {
                fetch(`${import.meta.env.VITE_API_URL}/carts/${item._id}`,{
                    method: 'DELETE',
                })
                .then(res => res.json())
                .then(data =>{
                    if(data.deletedCount > 0){
                        refetch()
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your fooditem has been deleted.",
                            icon: "success"
                        });
                    }
                })
              
            }
          });
    } 


    if(loading){
        return <Loader></Loader>
    }

    return (
        <div className='container mx-auto mt-28 font-serif'>
            {
                user ?
                   <>
                   {
                    cart?.length < 1 ? <h1 className='text-2xl font-bold font-serif text-center mt-40 px-4'>
                    You have not select any food item </h1>
                    
                    : <>
                    
                    <h1 className='text-center font-bold text-2xl'>All Cart Item</h1>
                   <div className="overflow-x-auto px-4 py-4">
                        <table className="min-w-full bg-white border border-gray-300 rounded mx-auto">
                            <thead className="bg-sky-500 text-white">
                                <tr className="text-center">
                                    <th className="py-2 px-4">Name</th>
                                    <th className="py-2 px-4">Category</th>
                                    <th className="py-2 px-4">Quantity</th>
                                    {/* <th className="py-2 px-4">Price</th> */}
                                    <th className="py-2 px-4">Total Price</th>
                                    <th className="py-2 px-4">Action</th>
                                </tr>
                            </thead>
                            <tbody className="text-center">
                                {data?.map((item, i) => (
                                    <Table
                                        item={item}
                                        key={i}
                                        handleIncreaseQuantity={handleIncreaseQuantity}
                                        handleDecreaseQuantity={handleDecreaseQuantity}
                                        handleDelete={handleDelete}
                                    />
                                ))}
                            </tbody>
                            <tfoot className="bg-green-600 text-white text-lg font-bold">
                                <tr>
                                    <td colSpan="2" className="py-2 px-4 text-right font-bold">
                                        Total:
                                    </td>
                                    <td colSpan="3" className="py-2 px-4 border-t border-gray-300">
                                        ${calculateOverallTotal().toFixed(2)}
                                    </td>
                                </tr>
                            </tfoot>
                        </table>
                    </div>
                    </>
                   }
                  
                   
                   </>
                    :
                    <h1 className='text-2xl font-bold font-serif text-center mt-40'> Please login for order food. </h1>
            }
        </div>
    );
};

export default Order;
