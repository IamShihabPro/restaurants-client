import React, { useContext, useState } from 'react';
import { FaStar } from 'react-icons/fa';
import Swal from 'sweetalert2';
import Loader from '../../Components/Loader/Loader';
import useAuth from '../../hooks/useAuth';


const Review = ({ isOpen, onClose, children }) => {
    const { theme } = useAuth();
    const { user, loading } = useAuth();
    const [review, setReview] = useState(null);
    const [hover, setHover] = useState(null);
  
    const modalClasses = isOpen ? 'block' : 'hidden';

    const [formData, setFormData] = useState({
      message: '',
    });
  
    if (loading) {
      return <Loader></Loader>;
    }
  
    const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };
  

  const handleSubmit = (e) =>{
    e.preventDefault();
    const form = e.target;
    const message = form.message.value;
    const reviews = {review, message, email: user?.email, name: user?.displayName, photo: user?.photoURL }
    console.log(reviews);


    fetch(`${import.meta.env.VITE_API_URL}/reviews`,{
      method: "POST",
      headers: {'content-type': 'application/json'},
      body: JSON.stringify(reviews)
      
    })
    .then(res => res.json())
    .then(data =>{
      console.log(data);
      if(data.insertedId){
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Thank You For Your Review',
          showConfirmButton: false,
          timer: 1500
        })
      }
    }) 
    
  }



  return (
   <div className='pt-10'>

    {/* modal start */}


    <div className={`fixed z-10 inset-0 overflow-y-auto ${modalClasses}`}>
      <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 transition-opacity" aria-hidden="true">
          <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>

        <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
          &#8203;
        </span>

        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full relative">
          <button
            onClick={onClose}
            className="absolute top-0 right-0 m-4 text-gray-600 hover:text-gray-800 focus:outline-none"
          >
            ✕
          </button>

          {children}


          
          <h3 className={`text-2xl mb-3 text-center font-semibold mt-4 px-2 text-red-500 `}>Review</h3>
        <form onSubmit={handleSubmit} className="max-w-md mx-auto p-6 bg-white ">

            <div className='flex text-center items-center ml-16'>
                {
                [...Array(5)].map((star, i) => {
                    const currentReview = i + 1 
                    return(
                    <label key={i} className='flex'>
                        <input type="radio" name='review' className='hidden' value={currentReview} onClick={()=> setReview(currentReview) } />
                        <FaStar className='mx-1 cursor-pointer' size={30}
                        color={currentReview <= (hover || review) ? '#ffc107' : '#e4e5e9'}
                        onMouseEnter={()=> setHover(currentReview)}
                        onMouseLeave={()=> setHover(null)}
                        ></FaStar>
                    </label>
                    ) 
                })
                }
                {/* <p>{review}</p> */}
            
            </div>

        <div className="mb-4">
            <label className="block text-white text-sm font-bold mb-2" htmlFor="message">
            Message
            </label>
            <textarea
            className="appearance-none bg-gray-800 rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline resize-none"
            id="message"
            placeholder="Your message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={4}
            required
            ></textarea>
        </div>
        <div className="flex justify-center">
            <button
            className={`bg-blue-500 text-white w-full font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline  ${theme === 'dark' ? 'bg-blue-600' : 'bg-red-600'}`}
            type="submit"
            >
            Submit
            </button>
        </div>
        </form>

        </div>
      </div>
    </div>
    {/* modal end */}
      
   </div>
  );
};

export default Review;