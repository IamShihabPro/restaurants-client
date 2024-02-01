import { useQuery } from '@tanstack/react-query';
import React from 'react';
import BookingTable from '../../../components/Table/BookingTable';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import Swal from 'sweetalert2';

const AllBookings = () => {
    const token = localStorage.getItem('access-token')
    const { data: bookings = [], refetch } = useQuery({
        queryKey: ['bookings'],
        queryFn: async () => {
            const res = await fetch(`${import.meta.env.VITE_API_URL}/bookings`,{
                headers: {
                    authorization: `bearer ${token}`
                }
            });
            return res.json();
        },
    });
    console.log(bookings);

    const [axiosSecure] = useAxiosSecure()

    const handleDelete = (booking) =>{
        
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Confirm'
          }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/bookings/${booking._id}`)
            //   .then(res => res.json())
              .then(data =>{
                if(data.data.deletedCount > 0){
                    refetch()
                    Swal.fire(
                        'Deleted!',
                        'Your file has been deleted.',
                        'success'
                    )
                }
              })
            }
          })
    }

    return (
        <div className='container max-w-5xl mx-auto mt-20  lg:mt-2 px-4 font-serif'>
        <div className='text-center text-3xl font-bold mt-4 mb-8'>
            <h1>Total Food Item {bookings?.length}</h1>
        </div>

        <div className='w-full'>
            <div className="overflow-x-auto ">
                <table className="table table-zebra table-xs text-center">
                    {/* head */}
                    <thead className='bg-sky-600 text-white'>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Person</th>
                        <th>Date</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        bookings?.map((booking, i) =>(
                            <BookingTable key={i} booking={booking} i={i}
                            handleDelete={handleDelete}
                            ></BookingTable>
                        ))
                    }
                    </tbody>        
                </table>
            </div>
        </div>
    </div>
    );
};

export default AllBookings;