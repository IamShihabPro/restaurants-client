import React from 'react';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import AllPayment from './AllPayment';

const AllPayments = () => {
    const [axiosSecure] = useAxiosSecure()

    const token = localStorage.getItem('access-token')
    const { data: payments = [], refetch } = useQuery({
        queryKey: ['payments'],
        queryFn: async () => {
            const res = await fetch(`${import.meta.env.VITE_API_URL}/payments`,{
                headers: {
                    authorization: `bearer ${token}`
                }
            });
            return res.json();
        },
    });

    console.log(payments);
    return (
        <div className='max-w-screen-sm mx-auto mt-10 w-full'>
      <h1 className='my-4 text-3xl font-bold text-center'>All Payments List ({payments.length})</h1>

      <div className='flex flex-col justify-center gap-6'>
        {payments.map((payment, i) => (
          <div key={i}>
            <AllPayment payment={payment} />
          </div>
        ))}
      </div>
    </div>
    );
};

export default AllPayments;