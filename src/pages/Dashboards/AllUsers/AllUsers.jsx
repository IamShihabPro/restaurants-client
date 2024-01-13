import { useQuery } from '@tanstack/react-query';
import React from 'react';
import UsersTable from '../../../components/Table/UsersTable';
import Swal from 'sweetalert2';

const AllUsers = () => {
    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch(`${import.meta.env.VITE_API_URL}/users`);
            return res.json();
        },
    });

    const handleDelete = (user) => {
        Swal.fire({
            title: "Are you sure?",
            text: `Remove ${user.name} from foodie`,
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Delete"
          }).then((result) => {
            if (result.isConfirmed) {
                fetch(`${import.meta.env.VITE_API_URL}/users/${user._id}`,{
                    method: 'DELETE',
                })
                .then(res => res.json())
                .then(data =>{
                    if(data.deletedCount > 0){
                        refetch()
                        Swal.fire({
                            title: "Deleted!",
                            text: `${user.name} has been removed`,
                            icon: "success"
                        });
                    }
                })
              
            }
          });
    } 

    const handleMakeAdmin = (user) => {
        fetch(`${import.meta.env.VITE_API_URL}/users/admin/${user._id}`,{
            method: 'PATCH'
        })
        .then(res => res.json())
        .then(data =>{
            if (data.modifiedCount){
                refetch()
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${user.name} is admin now`,
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        })
    }

    return (
        <div className='container max-w-5xl mx-auto mt-20 px-4 font-serif'>
            <div className='text-center text-3xl font-bold mt-4 mb-8'>
                <h1>All Users List</h1>
                <h1>Total User {users.length}</h1>
            </div>

            <div className='w-full'>
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
                                <UsersTable key={i} user={user} 
                                handleMakeAdmin={handleMakeAdmin} 
                                handleDelete={handleDelete}
                                i={i}></UsersTable>
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
