// src/components/RestaurantMenu.js
import React, { useContext, useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { AuthContext } from '../../Provider/AuthProvider';
import Swal from 'sweetalert2';
import useCart from '../../hooks/useCart';

const RestaurantMenu = () => {
  const navigate = useNavigate()
  const location = useLocation()

  const [category, setCategory] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');
 
  const {user} = useContext(AuthContext)
  const [cart, refetch] = useCart()


  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/menu`)
      .then((res) => res.json())
      .then((data) => {
        setCategory(data);
      });
  }, []);

  let uniqueArr = ['All', ...new Set(category.map((item) => item.category))];

  const filterMenu = category.filter(
    (menu) => selectedCategory === 'All' || menu.category === selectedCategory
  );

  const handleAddToCart = (item) =>{
    console.log(item);

    if(user && user.email){
        const cartItem = {menuItemId: item._id, name: item.name, image: item.image, price: item.price, category: item.category, email: user.email}

        fetch(`${import.meta.env.VITE_API_URL}/carts`,{
          method:"POST",
          headers:{'content-type': 'application/json'},
          body: JSON.stringify(cartItem)
      })
        .then(res => res.json())
        .then(data =>{
            if(data.insertedId){
            
              Swal.fire({
                  position: 'top-end',
                  icon: 'success',
                  title: 'Cart saved',
                  showConfirmButton: false,
                  timer: 1500
                })
                refetch();
          }
        })
    }
    else{
        Swal.fire({
            title: 'Please Login First',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Login Now'
          }).then((result) => {
            if (result.isConfirmed) {
              navigate('/login', {state: {from: location}})
            }
          })
    }

}

  return (
    <div className="container mx-auto p-4">
      <Tabs>
        {/* Tab Headers */}
        <TabList className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-2 px-2 mx-auto text-center space-x-4 sm:space-x-8 border-b border-gray-300 pb-2 mb-4 font-serif">
          {uniqueArr.map((data, i) => (
            <Tab
              key={i}
              onClick={() => setSelectedCategory(data)}
              className={`cursor-pointer text-md text-orange-600 px-2 py-2 rounded-md font-semibold uppercase ${
                selectedCategory === data && 'border-b-2 border-blue-500'
              }`}
            >
              {data}
            </Tab>
          ))}
        </TabList>

        {/* Tab Panels */}
        {uniqueArr.map((data, i) => (
          <TabPanel key={i}>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 text-white font-serif">
              {filterMenu.slice(0,9).map((menu, index) => (
                <div key={index} className="bg-white text-black p-4 group rounded shadow mb-4">
                  <img src={menu.image} className="w-full h-40 object-cover mb-4 group-hover:scale-110 transition duration-300" alt={menu.name} />
                  <p className='text-gray-500'>{menu.recipe}</p>
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="text-lg font-semibold mb-2">{menu.name}</h3>
                      <p className="font-semibold mt-2">${menu.price.toFixed(2)}</p>
                    </div>
                    <button onClick={() => handleAddToCart(menu)} className='bg-orange-600 px-4 py-2 rounded-md text-white font-serif'>Add to cart</button>
                  </div>
                </div>
              ))}
            </div>
          </TabPanel>
        ))}
      </Tabs>
      <div className='flex justify-center items-center mt-4'>
        
        <Link to='/menu' className='bg-orange-600 text-white px-4 py-2 rounded-md w-full sm:w-1/6 md:w-1/6 lg:w-1/6 text-center'> <button className=''> View all </button> </Link>
      </div>
    </div>
  );
};

export default RestaurantMenu;
