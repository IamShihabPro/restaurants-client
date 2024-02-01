import React from 'react';
import table from '../../assets/infoApp/table.jpg'
import useAuth from '../../hooks/useAuth';
import Swal from 'sweetalert2';
import { useLocation, useNavigate } from 'react-router-dom';

const BookingForm = () => {
  const {user} = useAuth()
  const navigate = useNavigate()
  const location = useLocation()

  const handleBookings = (e) =>{
    e.preventDefault()
    const form = e.target;
    const phone = form.phone.value;
    const persons = form.persons.value;
    const date = form.date.value;
    const bookings = {phone, persons, date, name: user?.displayName, email: user?.email}
    console.log(bookings);

    if(user && user.email){

      fetch(`${import.meta.env.VITE_API_URL}/bookings`,{
        method:"POST",
        headers:{'content-type': 'application/json'},
        body: JSON.stringify(bookings)
    })
    .then(res => res.json())
    .then(data =>{
        if(data.insertedId){
        
          Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: 'Your Booking Saved',
              showConfirmButton: false,
              timer: 1500
            })
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
    <div>
      <h1 className='text-center mx-auto text-3xl mt-10 mb-4 font-serif font-bold'>Reservation</h1>
        <div className="container mx-auto flex flex-col lg:flex-row min-h-screen font-serif">
          
      {/* Left side: Booking Form */}
      <div className="lg:w-1/2 bg-white p-8">
        <h1 className="text-2xl font-bold mb-6  font-serif">Book A Table</h1>
        <form onSubmit={handleBookings}>
          {/* Name */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2 font-serif" htmlFor="name">
              Name
            </label>
            <input
              className="w-full border rounded-md py-2 px-3"
              id="name"
              name='bookingName'
              defaultValue={user?.displayName}
              type="text"
              placeholder="Your Name"
            />
          </div>

          {/* Email */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2 font-serif" htmlFor="email">
              Email
            </label>
            <input
              className="w-full border rounded-md py-2 px-3"
              id="email"
              name='bookingEmail'
              defaultValue={user?.email}
              type="email"
              placeholder="Your Email"
            />
          </div>

          {/* Phone */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2 font-serif" htmlFor="phone">
              Phone
            </label>
            <input
              className="w-full border rounded-md py-2 px-3"
              id="phone"
              name='phone'
              type="tel"
              placeholder="Your Phone Number"
            />
          </div>

          {/* Number of Persons */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="persons font-serif">
              Number of Persons
            </label>
            <input
              className="w-full border rounded-md py-2 px-3"
              id="persons"
              name='person'
              type="number"
              placeholder="Number of Persons"
            />
          </div>

          {/* Date */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2 font-serif" htmlFor="date">
              Date
            </label>
            <input
              className="w-full border rounded-md py-2 px-3"
              id="date"
              name='date'
              type="date"
            />
          </div>

          {/* Submit button */}
          <button
            className=" text-white py-2 px-4 rounded-md bg-orange-600 w-full font-serif"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>

      {/* Right side: Image */}
      <div className="lg:w-1/2">
        {/* Replace the image source with your own */}
        <img
          className="w-full h-[550px] object-cover object-center"
          src={table}
          alt="Restaurant interior"
        />
      </div>
    </div>
    </div>
  );
};

export default BookingForm;
