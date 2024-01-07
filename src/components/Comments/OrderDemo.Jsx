import React, { useEffect, useState } from 'react';
import useCart from '../../hooks/useCart';
import Table from '../Table/Table';

const Order = () => {
    const [cart] = useCart()
    const [data, setData] = useState([])


    const handleIncreaseQuantity = (id) => {
        cart((prevData) =>
          prevData.map((item) =>
            item.id === id
              ? { ...item, quantity: item.quantity + 1, totalPrice: (item.quantity + 1) * item.price }
              : item
          )
        );
      };
    
      const handleDecreaseQuantity = (id) => {
        cart((prevData) =>
          prevData.map((item) =>
            item.id === id && item.quantity > 1
              ? { ...item, quantity: item.quantity - 1, totalPrice: (item.quantity - 1) * item.price }
              : item
          )
        );
      };

    return (
        <div className='container mx-auto mt-28'>
           <h1 className='text-center font-serif font-bold text-2xl'>All Food Item</h1>
            

           <div className="overflow-x-auto">
            <table className="table">
                {/* head */}
                <thead>
                <tr>

                    <th>Name</th>
                    <th>Job</th>
                    <th>Favorite Color</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                    {
                        cart.map((item, i) =>(
                            <Table item={item} key={i} 
                            handleIncreaseQuantity={handleIncreaseQuantity}
                            handleDecreaseQuantity={handleDecreaseQuantity}
                            ></Table>
                        ))
                    }
                   
                

                </tbody>
                
                </table>
            </div>
        </div>
    );
};

export default Order;