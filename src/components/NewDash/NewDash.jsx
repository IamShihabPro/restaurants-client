import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

const NewDash = () => {
    const [isOpen, setIsOpen] = useState(false)
    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    return (
       <div>
             <div className='flex justify-between items-center py-6 px-8 font-serif'>
                <div className='flex items-center gap-4'>
                    <FaBars onClick={() => setIsOpen(true)}  className='text-2xl lg:hidden'/>
                    <Link className='text-3xl font-bold block lg:hidden'> Foodie </Link>
                </div>

                {/* mobile device */}
                <div className={`fixed h-full w-screen bg-white/50 lg:hidden backdrop-blur-sm top-0 right-0 ${isOpen ? 'flex' : 'hidden'}`}>
                    <div className={`bg-gray-800 text-white flex flex-col absolute left-0 top-0 h-screen z-50 p-8 gap-8 w-56`}>
                     <IoClose onClick={() => setIsOpen(false)}  className='mt-0 mb-8 text-2xl cursor-pointer' />

                        <Link to='/dashboard/maindash' className='font-bold'> Dashboard </Link>
                        <Link to='/dashboard/allusers' className='font-bold'> All Users </Link>
                        <Link to='/' className='font-bold'> Home </Link>
                    </div>
                </div>
                
                {/* not mobile */}
                <div className='flex items-center gap-4'>
                    {/* <FaUser  className='text-2xl'/> */}
                    {/* <img src="https://images.unsplash.com/photo-1544465544-1b71aee9dfa3?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className='w-8 h-8 rounded-full' width={40} height={40} alt="" /> */}
                </div>
            </div>
       </div>
    );
};

export default NewDash;