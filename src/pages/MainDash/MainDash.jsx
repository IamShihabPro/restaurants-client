import React from 'react';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { FaUserCircle } from "react-icons/fa";
import { IoFastFoodSharp } from "react-icons/io5";
import { FaCartShopping } from "react-icons/fa6";

const MainDash = () => {
    const [axiosSecure] = useAxiosSecure()
    const {data: stats={}} = useQuery({
        queryKey: ['admin-stats'],
        queryFn: async () =>{
            const res = await axiosSecure('/admin-stats')
            console.log(res.data);
            return res.data
        }
    })
  
    return (
        <div className='mt-10 lg:mt-20 container mx-auto'>
           <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 ml-10 lg:ml-36 text-white mx-4'>

                <div className="bg-red-500 shadow-md rounded overflow-hidden mx-auto my-4 w-full lg:w-48">
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2 flex justify-between items-center">
                            <h1>Revenue</h1>
                            <RiMoneyDollarCircleLine/>
                        </div>
                        <p className="text-base">${stats.revenue}</p>
                    </div>  
                </div>
                <div className="bg-sky-500 shadow-md rounded overflow-hidden mx-auto my-4 w-full lg:w-48">
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2 flex justify-between items-center">
                            <h1>Users</h1>
                            <FaUserCircle/>
                        </div>
                        <p className="text-base">{stats.users}</p>
                    </div>  
                </div>
                <div className="bg-green-500 shadow-md rounded overflow-hidden mx-auto my-4 w-full lg:w-48">
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2 flex justify-between items-center">
                            <h1>Food Item</h1>
                            <IoFastFoodSharp/>
                        </div>
                        <p className="text-base">{stats.foodItem}</p>
                    </div>  
                </div>
                <div className="bg-blue-500 shadow-md rounded overflow-hidden mx-auto my-4 w-full lg:w-48">
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2 flex justify-between items-center">
                            <h1>Orders</h1>
                            <FaCartShopping/>
                        </div>
                        <p className="text-base">{stats.orders}</p>
                    </div>  
                </div>

           </div>
        </div>
    );
};

export default MainDash;