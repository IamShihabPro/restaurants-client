import React from 'react';
import table from '../../assets/infoApp/table.jpg'

const BookingForm = () => {
  return (
    <div>
      <h1 className='text-center mx-auto text-5xl mt-10 mb-4 font-serif font-bold'>Reservation</h1>
        <div className="container mx-auto flex flex-col lg:flex-row min-h-screen font-serif">
          
      {/* Left side: Booking Form */}
      <div className="lg:w-1/2 bg-white p-8">
        <h1 className="text-2xl font-bold mb-6  font-serif">Book A Table</h1>
        <form>
          {/* Name */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2 font-serif" htmlFor="name">
              Name
            </label>
            <input
              className="w-full border rounded-md py-2 px-3"
              id="name"
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
