import React, { useContext, useEffect, useState } from 'react';
import Cards from '../../components/Card/Cards';
import Swal from 'sweetalert2';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import useCart from '../../hooks/useCart';
import Loader from '../../components/Loader/Loader';

const Menu = () => {
    const [category, setCategory] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('All');

    const navigate = useNavigate()
    const location = useLocation()

    
  const {user, loading} = useContext(AuthContext)
  const [cart, refetch] = useCart()



    useEffect(()=>{
        fetch(`${import.meta.env.VITE_API_URL}/menu`)
        .then(res => res.json())
        .then(data =>{
            setCategory(data);
        })
    },[])

    // console.log(category);

    let uniqueArr = [...new Set(category.map(item => item.category))]
    // console.log(uniqueArr);


    const handleCategory = (c) => {
       
        setSelectedCategory(c);
    };

    const filterMenu = selectedCategory === 'All' ? category : category.filter(menu => menu.category === selectedCategory)


    // pagination
    const itemsPerPage = 20;
        const [currentPage, setCurrentPage] = useState(1);

        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        const visibleProducts = filterMenu.slice(startIndex, endIndex);

        const totalPages = Math.ceil(filterMenu.length / itemsPerPage);

        const handleNextPage = () => {
            if (currentPage < totalPages) {
                setCurrentPage(currentPage + 1);
            }
            };

        const handlePrevPage = () => {
            if (currentPage > 1) {
                setCurrentPage(currentPage - 1);
            }
        };

        // console.log(visibleProducts);


        
        const handleAddToCart = (item) =>{
        
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

        if(loading){
            return <Loader></Loader>
        }

    return (
        <div className='container mx-auto px-4 mt-24 mb-10'>
             <div className='mb-8 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-2 space-x-4 mt-20'>
                <button onClick={()=> handleCategory('All')} className={`px-2 py-2 rounded-lg uppercase ${selectedCategory === 'All' ? 'bg-orange-500 text-white' : 'bg-gray-800 text-white'}`}>All</button>
                {
                    uniqueArr.map(category => (
                        <button key={category} onClick={()=> handleCategory(category)} className={`px-4 py-2 rounded-lg uppercase ${selectedCategory === `${category}` ? 'bg-orange-500 text-white' : 'bg-gray-800 text-white'}`}>{category}</button>
                    ))
                }
            </div>

            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
                {
                    visibleProducts.map((menu,i) =>(
                            <Cards handleAddToCart={handleAddToCart} menu={menu} key={i}></Cards>
                    ))
                }

            </div>

            <div className="pagination flex gap-2 mt-10 text-center items-center justify-center">
                <button className='rounded-md bg-green-600 text-white px-4 py-2' onClick={handlePrevPage} disabled={currentPage === 1}>
                    Prev
                </button>
                {Array.from({ length: totalPages }).map((_, index) => (
                    <button
                    key={index}
                    onClick={() => setCurrentPage(index + 1)}
                    className={currentPage === index + 1 ? 'active rounded-md bg-orange-600 text-white px-4 py-2' : 'rounded-md bg-orange-400 text-white px-4 py-2'}
                    >
                    {index + 1}
                    </button>
                ))}
                {totalPages > 5 && currentPage < totalPages - 2 && (
                    <span className="ellipsis">...</span>
                )}
                {totalPages > 5 && currentPage < totalPages - 1 && (
                    <button onClick={() => setCurrentPage(totalPages)}>{totalPages}</button>
                )}
                <button className='rounded-md bg-green-600 text-white px-4 py-2' onClick={handleNextPage} disabled={currentPage === totalPages}>
                    Next
                </button>
            </div>
        </div>
    );
};

export default Menu;