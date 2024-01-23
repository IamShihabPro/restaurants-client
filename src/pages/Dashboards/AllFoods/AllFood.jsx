import React from 'react';
import useMenu from '../../../hooks/useMenu';
import FoodTable from '../../../components/Table/FoodTable';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../hooks/useAxiosSecure';

const AllFood = () => {
    const [menu, refetch] = useMenu()
    // console.log(menu);
    const [axiosSecure] = useAxiosSecure()

    const handleDelete = (item) =>{
        console.log(item);
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
                axiosSecure.delete(`/menu/${item._id}`)
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
                <h1>Total Food Item {menu.length}</h1>
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
                            <th>Category</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            menu.map((item, i) =>(
                                <FoodTable key={i} item={item} i={i}
                                handleDelete={handleDelete}
                                ></FoodTable>
                            ))
                        }
                        </tbody>        
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AllFood;