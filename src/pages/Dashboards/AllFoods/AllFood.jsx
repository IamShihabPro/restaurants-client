import React from 'react';
import useMenu from '../../../hooks/useMenu';
import FoodTable from '../../../components/Table/FoodTable';

const AllFood = () => {
    const [menu] = useMenu()
    console.log(menu);
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
                            <th>Email</th>
                            <th>Roll</th>
                            <th>Action</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            menu.map((item, i) =>(
                                <FoodTable key={i} item={item} i={i}></FoodTable>
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