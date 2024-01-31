import React, { useContext, useEffect, useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './style.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { AuthContext } from '../../Provider/AuthProvider';
import Loader from '../../Components/Loader/Loader';
import Review from './Review';


const ShowReview = () => {
  const [reviews, setReviews] = useState([])
  const {loading} = useContext(AuthContext)
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

          
  if(loading){
    return <Loader></Loader>
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/reviews`);
        const result = await response.json();
        setReviews(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [])

  return (
    <div className="">
     {
        reviews.length > 0 && <div className='container mx-auto font-serif mt-8'>
        
        <h3 className={`text-3xl font-semibold text-black mb-6 text-center`}>Reviews</h3>
     <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        // navigation={true}
        modules={[Autoplay, Pagination, ]}
        className="mySwiper"
      >
        {
          reviews?.slice(0,5).map((review, i) => (
            <SwiperSlide key={i}> 
             
             <div className={`h-96 w-full bg-slate-50`}>
            <div className='max-w-screen-md mx-auto mt-20 flex flex-col items-center justify-center h-full px-4 text-white pt-4'>

                <div className=' w-20'>
                    <img src={review.photo} alt="shihab" className='rounded-full  w-6 h-6'/>
                </div>

                <div className='mt-4 mb-2'>
                        <Rating style={{ maxWidth: 70 }} value={review.review} readOnly />
                </div>

                <div className='flex flex-col items-center text-center h-full w-full mt-2'>
                    <h2 className={`text-2xl sm:text-2xl max-w-md font-bold text-red-600`}>{review.name} </h2>

                    <p className={` text-gray-900 max-w-lg `}> {review.message}</p>
                </div>

               
            </div>
           </div>
             </SwiperSlide>  
          ))
        }   
     
      </Swiper>


        
        </div>
     }

     
<div className=" flex items-center justify-center mt-4">
      <button onClick={openModal} className="bg-blue-500 text-white px-4 py-2 rounded w-full lg:w-1/6 mx-4">
        Give Ratings
      </button>

      <Review isOpen={isModalOpen} onClose={closeModal}>
        <div className="bg-white p-4">
          <h1 className="text-xl font-bold mb-2">Give Ratings</h1>
          
        </div>
      </Review>
    </div>
    </div>
  );
};

export default ShowReview;