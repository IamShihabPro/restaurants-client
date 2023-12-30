import React, {  useState } from 'react';
import { FaBars, FaTimes, FaShoppingCart, FaUser } from 'react-icons/fa';
import { ImSpoonKnife } from "react-icons/im";

import { Link } from 'react-router-dom';

const Nabvbar = () => {
  const [isOpen, setIsOpen] = useState(false);


  const navItems = [
    {
        id: 1,
        link: '/',
        title: 'Home'
    },
    {
        id: 2,
        link: '/menu',
        title: 'Menu'
    },
    {
        id: 3,
        link: '/contact',
        title: 'Contact'
    },
]

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };


  return (
    <nav className="bg-white fixed top-0 inset-x-0 z-50 shadow-sm">
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='flex items-center justify-between h-16'>
                <div className=''>
                    <h1 className='font-bold text-3xl font-serif flex justify-center items-center gap-2 text-orange-600'><span><ImSpoonKnife /></span> Foodie</h1>
                </div>

                <div className='hidden md:block lg:block'>
                    <div className="ml-10 flex items-baseline space-x-4">
                        {
                            navItems.map(({id, link, title})=> (
                                <Link  key={id} to={link} className="text-gray-800 hover:text-orange-500 hover:scale-105 px-3 py-2 rounded-md text-lg font-serif font-bold">
                                {title}
                                </Link>
                            ))
                        }


                    </div>
                </div>

                <div className='-mr-2 flex md:hidden shadow-md'>
                    <button onClick={toggleNavbar} type='button' className='inline-flex items-center justify-center p-2 rounded-md text-gray-800 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white transition duration-150 ease-in-out' aria-label="Toggle navigation">
                    {
                        isOpen ? (
                        <FaTimes className="h-6 w-6" />) : 
                        (<FaBars className="h-6 w-6" /> )
                    }
                    </button>

                </div>

                <div className='hidden md:block lg:block '>
                   <div className='flex gap-2'>
                        <Link className='bg-orange-500 px-4 py-2 rounded-md text-white flex items-center justify-center w-24 font-medium' href=""> Order  <FaShoppingCart className='w-14'></FaShoppingCart> </Link>
                        <Link to='/login' className='bg-orange-500 px-4 py-2 rounded-md text-white flex items-center justify-center w-24 font-medium' href=""> Login  <FaUser className='w-14'></FaUser> </Link>
                
                   </div>
                </div>

            </div>


            <div className={`${isOpen ? 'block' : 'hidden'} md:hidden bg-gray-50 py-2 px-2 shadow-sm`}>
                <div>
                    {
                        navItems.map(({id, link, title})=>(
                            <Link key={id} to={link} className="block text-gray-900 px-3 py-2 rounded-md text-base font-bold font-serif">
                            {title}
                            </Link>
                        ))
                    }
                     <div className='block md:hidden lg:hidden my-4'>
                        <Link className='bg-orange-500 px-4 py-2 rounded-md text-white flex items-center justify-center w-28 my-2' href=""> Order  <FaShoppingCart className='w-14'></FaShoppingCart> </Link>
                        <Link className='bg-orange-500 px-4 py-2 rounded-md text-white flex items-center justify-center w-28 my-2' href=""> Login  <FaUser className='w-14'></FaUser> </Link>
                     </div>
                </div>
               

            </div>

        </div>
    </nav>
  );
};

export default Nabvbar;