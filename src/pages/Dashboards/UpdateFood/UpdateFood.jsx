import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import Swal from 'sweetalert2';

const UpdateFood = () => {
    const food = useLoaderData()
    const [axiosSecure] = useAxiosSecure()
    

    const [category, setCategory] = useState([]);
    const [foodCategory, setFoodCategory] = useState('');
    const [customCategory, setCustomCategory] = useState("");
    const [selectedCategoryLog, setSelectedCategoryLog] = useState('');



    useEffect(() => {
        fetch(`${import.meta.env.VITE_API_URL}/menu`)
            .then(res => res.json())
            .then(data => {            
                setCategory(data);
            });
    }, []);

    
    // axiosSecure.get(`/menu`)
    // // .then(res => res.json())
    // .then(data =>{
    //   console.log(data.data);
    //   setCategory(data.data);
    // })

    let uniqueArr = [...new Set(category.map(item => item.category))];

    const {name, recipe, price, image} = food

    const handleSubmit = (e) =>{
         e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const price = form.price.value;
        const recipe = form.recipe.value;
        const image = form.image.value;

        let selectedCategory = foodCategory;

        if (foodCategory === "custom") {
            selectedCategory = customCategory;
        }

        const foodItem = { name, category: selectedCategory, price: parseFloat(price), image, recipe };
        console.log(foodItem);

        axiosSecure.put(`/menu/${food._id}`,foodItem)
        // .then(res => res.json())
        .then(data =>{
          console.log(data);
          if(data.data.modifiedCount){
            Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: 'Food Menu Updated Successfully',
              showConfirmButton: false,
              timer: 1500
            })
          }
        })
    }

    return (
        <div className='font-serif bg-white flex items-center justify-center pt-28 mt-10 mb-20 lg:mt-6'>
       <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-lg my-8 mx-4">
            <h1 className="text-3xl font-semibold text-center mb-6 text-gray-800 pt-10 pb-6">Update Recipe</h1>
            <form onSubmit={handleSubmit} className='gap-4'>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6'>

                    <div className='flex flex-col gap-2'>
                        <label htmlFor="recipeName" className='text-gray-600'>Recipe Name</label>
                        <input
                            id="recipeName"
                            type="text"
                            name='name'
                            defaultValue={name}
                            placeholder="Recipe name"
                            className="input input-bordered w-full focus:ring-indigo-500 focus:border-indigo-500"
                        />
                    </div>

                    {/* category start */}
                    <div className='flex flex-col gap-2'>
                        <label htmlFor="category" className='text-gray-600'>Category</label>

                        <select
                            id="productCategory"
                            name="category"
                            className="w-full border rounded text-sm py-2 px-3 focus:outline-none focus:ring focus:border-blue-300 bg-white"
                            value={foodCategory}
                            required
                            onChange={(e) => setFoodCategory(e.target.value)}
                        >
                            <option value="" disabled>Select a category</option>
                            <option value="custom">Add New Category</option>
                            {uniqueArr.map((category) => (
                                <option key={category} value={category}>
                                    {category}
                                </option>
                            ))}

                        </select>
                        {foodCategory === "custom" && (
                            <input
                                type="text"
                                id="customCategory"
                                name="customCategory"
                                placeholder="Enter custom category"
                                value={customCategory}
                                onChange={(e) => setCustomCategory(e.target.value)}
                                className="w-full border rounded text-sm py-2 px-3 focus:outline-none focus:ring focus:border-blue-300 bg-white"
                            />
                        )}
                    </div>
                    {/* category end */}

                    <div className='flex flex-col gap-2'>
                        <label htmlFor="price" className='text-gray-600'>Price</label>
                        <input
                            id="price"
                            type="number"
                            name='price'
                            defaultValue={price}
                            placeholder="Enter price"
                            className="input input-bordered w-full focus:ring-indigo-500 focus:border-indigo-500"
                        />
                    </div>

                    <div className='flex flex-col gap-2'>
                        <label htmlFor="image" className='text-gray-600'>Image URL</label>
                        <input
                            id="image"
                            type="text"
                            placeholder="Recipe image URL"
                            defaultValue={image}
                            name='image'
                            className="input input-bordered w-full focus:ring-indigo-500 focus:border-indigo-500"
                        />
                    </div>

                </div>

                <div className='flex flex-col gap-2 mt-4'>
                    <label htmlFor="description" className='text-gray-600'>Description</label>
                    <textarea
                        id="description"
                        placeholder="Type here"
                        name='recipe'
                        defaultValue={recipe}
                        className="input input-bordered w-full h-32 focus:ring-indigo-500 focus:border-indigo-500"
                    />
                </div>

                <button
                    type="submit"
                    className="mt-4 btn bg-indigo-500 text-white hover:bg-indigo-600 w-full"
                >
                    Update Recipe
                </button>

            </form>
        </div>
    </div>
    );
};

export default UpdateFood;