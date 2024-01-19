import React, { useContext,useState } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import { Link } from 'react-router-dom';
import { GoHomeFill } from "react-icons/go";
import { IoHome } from "react-icons/io5";
import { FaUsers } from 'react-icons/fa';
import { FaBars } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { GiForkKnifeSpoon } from "react-icons/gi";
import Loader from '../Loader/Loader';


const Sidebar = () => {
    const {user, loading} = useContext(AuthContext)
    const [isOpen, setIsOpen] = useState(false)
    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };


    if(loading){
        return <Loader></Loader>
    }


    return (
        <div>

            <div className='flex justify-between items-center py-6 px-8 font-serif'>
                <div className='flex items-center gap-4'>
                    <FaBars onClick={() => setIsOpen(true)}  className='text-2xl lg:hidden'/>
                    <Link className='text-3xl font-bold block lg:hidden'> Foodie </Link>
                </div>

                {/* mobile device */}
                <div className={`fixed h-full w-screen bg-white/50 lg:hidden backdrop-blur-sm top-0 right-0 transition duration-300 ease-in-out ${isOpen ? 'flex' : 'hidden'}`}>
                    <div className={`bg-gray-800 text-white flex flex-col absolute left-0 top-0 h-screen z-50 p-8 gap-8 w-56`}>
                     <IoClose onClick={() => setIsOpen(false)}  className='mt-0 mb-8 text-2xl cursor-pointer' />

                        <Link to='/dashboard/maindash' className='font-bold flex items-center gap-2'> <GoHomeFill></GoHomeFill> Dashboard </Link>
                        <Link to='/dashboard/allusers' className='font-bold flex items-center gap-2'> <FaUsers/> All Users List </Link>
                        <Link to='/dashboard/addfood' className='font-bold flex items-center gap-2'> <GiForkKnifeSpoon/> Add Food </Link>
                        <Link to='/' className='font-bold flex items-center gap-2'> <IoHome/> Home Page</Link>
                    </div>
                </div>
                
                {/* large */}
                <div className='flex items-center gap-4'>
                    {/* <FaUser  className='text-2xl'/> */}
                    {/* <img src="https://images.unsplash.com/photo-1544465544-1b71aee9dfa3?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className='w-8 h-8 rounded-full' width={40} height={40} alt="" /> */}
                </div>
            </div>

            <div className='h-screen hidden lg:block'>
                <div className='px-4 py-7 flex flex-col items-center justify-center border-b-2 border-white'>
                    <img className='rounded-full w-16' src={user?.photoURL} alt="" />
                    <h1 className='text-white font-serif font-bold'>{user?.displayName}</h1>
                </div>

                <Link to='/dashboard/maindash' className='flex items-center justify-center gap-4 px-4 py-5 border-b-2 border-white text-white'>
                    <GoHomeFill></GoHomeFill>
                    Dashboard
                </Link>

                <Link to='/dashboard/allusers' className='flex items-center justify-center gap-4 px-4 py-5 text-white '>
                <FaUsers/>
                    All User List
                </Link>

                <Link to='/dashboard/addfood' className='flex items-center justify-center gap-4 px-4 py-5 text-white '>
                <GiForkKnifeSpoon/>
                    Add Food
                </Link>

                <Link to='/' className='flex items-center justify-center gap-4 px-4 py-5 text-white '>
                <IoHome/>
                    Home Page
                </Link>      
            </div>
        </div>
    );
};

export default Sidebar;