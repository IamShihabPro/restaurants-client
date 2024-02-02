import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import Swal from 'sweetalert2';
import ReviewTable from '../../../components/Table/ReviewTable';
// import ReviewTable from '../../../components/Table/ReviewTable';

const AllReviews = () => {
    const [axiosSecure] = useAxiosSecure()

    const token = localStorage.getItem('access-token')
    const { data: reviews = [], refetch } = useQuery({
        queryKey: ['reviews'],
        queryFn: async () => {
            const res = await fetch(`${import.meta.env.VITE_API_URL}/reviews`,{
                headers: {
                    authorization: `bearer ${token}`
                }
            });
            return res.json();
        },
    });

    const handleDelete = (review) =>{
        
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
                axiosSecure.delete(`/reviews/${review._id}`)
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
            <h1>Total Reviews {reviews?.length}</h1>
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
                        <th>Review</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        reviews?.map((review, i) =>(
                            <ReviewTable key={i} review={review} i={i}
                            handleDelete={handleDelete}
                            ></ReviewTable>
                        ))
                    }
                    </tbody>        
                </table>
            </div>
        </div>
    </div>
    );
};

export default AllReviews;