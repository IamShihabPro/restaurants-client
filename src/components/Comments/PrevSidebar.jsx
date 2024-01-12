import React, { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import { Link } from 'react-router-dom';
import { GoHomeFill } from "react-icons/go";
import { IoHome } from "react-icons/io5";
import { FaUsers } from 'react-icons/fa';


const PrevSidebar = () => {
    const {user} = useContext(AuthContext)
    // console.log(user);
    return (
        <div className='h-screen'>
            <div className='px-4 py-7 flex flex-col items-center justify-center border-b-2 border-white'>
                <img className='rounded-full w-16' src={user?.photoURL} alt="" />
                <h1 className='text-white font-serif font-bold'>{user?.displayName}</h1>
            </div>

            <Link to='/dashboard/maindash' className='flex items-center justify-center gap-4 px-4 py-5 border-b-2 border-white text-white'>
                <GoHomeFill></GoHomeFill>
                Dashboard
            </Link>

            <Link to='/' className='flex items-center justify-center gap-4 px-4 py-5 text-white '>
               <IoHome/>
                Home
            </Link>

            <Link to='/dashboard/allusers' className='flex items-center justify-center gap-4 px-4 py-5 text-white '>
               <FaUsers/>
                All User
            </Link>
        </div>
    );
};

export default PrevSidebar;