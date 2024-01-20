import React, { useEffect, useState } from 'react';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import Swal from 'sweetalert2';

const AddFood = () => {
    const [category, setCategory] = useState([]);
    const [foodCategory, setFoodCategory] = useState('');
    const [customCategory, setCustomCategory] = useState("");
    const [selectedCategoryLog, setSelectedCategoryLog] = useState('');
    const [axiosSecure] = useAxiosSecure()

    useEffect(() => {
        fetch(`${import.meta.env.VITE_API_URL}/menu`)
            .then(res => res.json())
            .then(data => {
                setCategory(data);
            });
    }, []);

    let uniqueArr = [...new Set(category.map(item => item.category))];

    useEffect(() => {
        // console.log(selectedCategoryLog);
    }, [selectedCategoryLog]);

    const handleSubmit = (e) => {
        e.preventDefault();

        let selectedCategory = foodCategory;

        if (foodCategory === "custom") {
            selectedCategory = customCategory;
        }

        const form = e.target;
        const name = form.name.value;
        const price = form.price.value;
        const recipe = form.recipe.value;
        const image = form.image.value;

        const foodItem = { name, category: selectedCategory, price: parseFloat(price), image, recipe };
        console.log(foodItem);

        axiosSecure.post('/menu',foodItem)
        // .then(res => res.json())
        .then(data =>{
          console.log(data);
          if(data.data.insertedId){
            Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: 'New Food Menu Added Successfully',
              showConfirmButton: false,
              timer: 1500
            })
          }
        })
        
        

        // Reset form values
        setFoodCategory("");
        setCustomCategory("");
        // form.reset();
    };

    return (
        <div className='font-serif bg-white flex items-center justify-center pt-28 mt-10 mb-20 lg:mt-6'>
            <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-lg my-8 mx-4">
                <h1 className="text-3xl font-semibold text-center mb-6 text-gray-800 pt-10 pb-6">Add New Recipe</h1>
                <form onSubmit={handleSubmit} className='gap-4'>

                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6'>

                        <div className='flex flex-col gap-2'>
                            <label htmlFor="recipeName" className='text-gray-600'>Recipe Name</label>
                            <input
                                id="recipeName"
                                type="text"
                                name='name'
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
                            className="input input-bordered w-full h-32 focus:ring-indigo-500 focus:border-indigo-500"
                        />
                    </div>

                    <button
                        type="submit"
                        className="mt-4 btn bg-indigo-500 text-white hover:bg-indigo-600 w-full"
                    >
                        Add Recipe
                    </button>

                </form>
            </div>
        </div>
    );
};

export default AddFood;
