import React from 'react';
import { MdDelete } from "react-icons/md";

const ReviewTable = ({review, i, handleDelete}) => {
    return (
        <>
            <tr className="bg-gray-50 ">
            <td className="text-lg mx-2">{i+1}</td>
            <td className='text-lg'>{review.name}</td>
            <td className='text-lg'>{review.email}</td>
            <td className='text-lg'>{review.message}</td>

            <th className='flex justify-center items-center gap-2 mt-4'>
            <button  onClick={() => handleDelete(review)} className="btn btn-sm btn-outline hover:bg-red-600 hover:border-none hover:text-white rounded-sm"> <MdDelete/> </button>
            </th>
        </tr>   
        </>
    );
};

export default ReviewTable;