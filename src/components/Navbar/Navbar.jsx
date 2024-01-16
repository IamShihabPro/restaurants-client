import React, {  useContext, useEffect, useState } from 'react';
import { FaBars, FaTimes, FaShoppingCart, FaUser } from 'react-icons/fa';
import { ImSpoonKnife } from "react-icons/im";

import { Link } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import useCart from '../../hooks/useCart';
import useAdmin from '../../hooks/useAdmin';

const Nabvbar = () => {
  const {user, logOut} = useContext(AuthContext)
  const [isOpen, setIsOpen] = useState(false);
  const [refetching, setRefetching] = useState({})


  const [cart] = useCart()
    
  const [isAdmin, isAdminLoading, refetch] = useAdmin()
//   console.log(isAdmin);

  useEffect(()=>{
    setRefetching(isAdmin)
    refetch()
  },[isAdmin])

  console.log(refetching);


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

  const handleLogOut = () =>{
    logOut()
    .then(()=>{})
    .catch(err => console.log(err) )
  }



  
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

                {
                  user && refetching?.admin == true && (
                  <Link to='/dashboard/maindash' className="text-gray-800 hover:text-orange-500 hover:scale-105 px-3 py-2 rounded-md text-lg font-serif font-bold">
                    Dashboard
                  </Link>
                    )
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
                        <Link to='/order' className='bg-orange-500 px-3 py-2 rounded-md text-white flex items-center justify-center w-24 font-medium'> Order  <FaShoppingCart className='w-14'></FaShoppingCart> <sup>{cart?.length || ''}</sup> </Link>
                        {
                            user ? <Link onClick={handleLogOut} className='bg-orange-500 px-3 py-2 rounded-md text-white flex items-center justify-center w-24 font-medium'> Logout <FaUser className='w-14'></FaUser> </Link>
                            : <Link to='/login' className='bg-orange-500 px-4 py-2 rounded-md text-white flex items-center justify-center w-24 font-medium'> Login <FaUser className='w-14'></FaUser> </Link>


                        }
                
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

                   {
                    user &&  <Link to='/dashboard' className="block text-gray-900 px-3 py-2 rounded-md text-base font-bold font-serif">
                    Dashboard
                    </Link>
                   }


                     <div className='block md:hidden lg:hidden my-4'>
                        <Link to='/order' className='bg-orange-500 px-4 py-2 rounded-md text-white flex items-center justify-center w-28 my-2'> Order  <FaShoppingCart className='w-14'></FaShoppingCart> <sup>{cart?.length || ''}</sup> </Link>
                        {
                            user ? <Link className='bg-orange-500 px-4 py-2 rounded-md text-white flex items-center justify-center w-28 my-2'> Logout <FaUser className='w-14'></FaUser> </Link>
                            : <Link to='/login' className='bg-orange-500 px-4 py-2 rounded-md text-white flex items-center justify-center w-28 my-2'> Login  <FaUser className='w-14'></FaUser> </Link>


                        }
                     </div>
                </div>
               

            </div>

        </div>
    </nav>
  );
};

export default Nabvbar;