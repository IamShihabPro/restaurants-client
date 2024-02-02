import React from 'react';
import { MdDelete } from "react-icons/md";

const BookingTable = ({booking, i, handleDelete}) => {
    return (
        <>
            <tr className="bg-gray-50 ">
            <td className="text-lg mx-2">{i+1}</td>
            <td className='text-lg'>{booking.name}</td>
            <td className='text-lg'>{booking.email}</td>

            <td className='text-lg'>{booking.phone}</td>
            <td className='text-lg'>{booking.persons}</td>
            <td className='text-lg'>{booking.date}</td>

            <th className='flex justify-center items-center gap-2 mt-4'>
            <button  onClick={() => handleDelete(booking)} className="btn btn-sm btn-outline hover:bg-red-600 hover:border-none hover:text-white rounded-sm"> <MdDelete/> </button>
            </th>
        </tr>   
        </>
    );
};

export default BookingTable;