import React from 'react';
import { MdDelete } from "react-icons/md";
import { MdEditSquare } from "react-icons/md";

const FoodTable = ({item, i}) => {
    return (
        <>
            <tr className="bg-gray-50 ">
            <td className="text-lg mx-2">{i+1}</td>
            <td>
            <div className="flex items-center justify-center gap-3">
                <div className="avatar">
                <div className="mask w-16 h-16">
                    <img
                    src={item.image} className="rounded-sm"
                    alt="Avatar Tailwind CSS Component"
                    />
                </div>
                </div>
            </div>
            </td>
            <td className='text-lg'>{item.name}</td>
            <td className='text-lg'>{item.category}</td>

            <td className='text-lg'>{item.price}$</td>

            <th className='flex justify-center items-center gap-2 mt-4'>
            <button className="btn btn-sm btn-outline hover:bg-green-600 hover:border-none hover:text-white rounded-sm"> <MdEditSquare/> </button>
            <button className="btn btn-sm btn-outline hover:bg-red-600 hover:border-none hover:text-white rounded-sm"> <MdDelete/> </button>
            </th>
        </tr>   
        </>
    );
};

export default FoodTable;