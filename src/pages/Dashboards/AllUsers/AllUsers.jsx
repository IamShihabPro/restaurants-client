import { useQuery } from '@tanstack/react-query';
import React from 'react';
import UsersTable from '../../../components/Table/UsersTable';

const AllUsers = () => {
    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch(`${import.meta.env.VITE_API_URL}/users`);
            return res.json();
        },
    });

    return (
        <div className='container max-w-5xl mx-auto mt-20 px-4 font-serif'>
            <div className='text-center text-3xl font-bold mt-4 mb-8'>
                <h1>All Users List</h1>
            </div>

            <div>
                <div className="overflow-x-auto ">
                    <table className="table table-zebra table-xs text-center">
                        {/* head */}
                        <thead className='bg-sky-600 text-white'>
                        <tr>
                            <th>#</th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Roll</th>
                            <th>Action</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            users.map((user, i) =>(
                                <UsersTable key={i} user={user} i={i}></UsersTable>
                            ))
                        }
                        </tbody>        
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AllUsers;
