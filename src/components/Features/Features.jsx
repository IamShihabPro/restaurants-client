import React from 'react';
import { SiCodechef } from "react-icons/si"
import { ImSpoonKnife } from "react-icons/im";
import { FaCartPlus } from "react-icons/fa";
import { RiCustomerService2Fill } from "react-icons/ri";

const Features = () => {
    return (
     <div className='container mx-auto mt-28 font-serif'>

        <h1 className='font-bold text-5xl text-center mb-10'>Features</h1>

        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 my-10 px-4'>
                <div className='bg-white shadow-xl drop-shadow-lg p-4 flex flex-col gap-2 hover:bg-orange-500 hover:text-white duration-300'>
                    <SiCodechef className='text-5xl' />
                    <h1 className='font-bold text-2xl'>Master Chefs</h1>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti, rem!</p>
                </div>

                <div className='bg-white shadow-xl drop-shadow-md p-4 flex flex-col gap-2 hover:bg-orange-500 hover:text-white duration-300'>
                    <ImSpoonKnife className='text-5xl' />
                    <h1 className='font-bold text-2xl'>Quality Food</h1>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti, rem!</p>
                </div>

                <div className='bg-white shadow-xl drop-shadow-md p-4 flex flex-col gap-2 hover:bg-orange-500 hover:text-white duration-300'>
                    <FaCartPlus className='text-5xl' />
                    <h1 className='font-bold text-2xl'>Online Order</h1>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti, rem!</p>
                </div>

                <div className='bg-white shadow-xl drop-shadow-md p-4 flex flex-col gap-2 hover:bg-orange-500 hover:text-white duration-300'>
                    <RiCustomerService2Fill className='text-5xl' />
                    <h1 className='font-bold text-2xl'>Master Chefs</h1>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti, rem!</p>
                </div>
        </div>
     </div>
    );
};

export default Features;