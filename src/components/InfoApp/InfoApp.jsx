import React from 'react';
import phone from '../../assets/infoApp/phone-cta-one.png';
import discount from '../../assets/infoApp/discounts.png';
import live from '../../assets/infoApp/live-tracking.png';
import delivery from '../../assets/infoApp/quick-delivery.png';
import google from '../../assets/infoApp/google-play.svg';
import app from '../../assets/infoApp/app-store.svg';

const InfoApp = () => {
  return (
    <div className="my-20 bg-gradient-to-r from-orange-400 via-yellow-500 to-orange-300">
      <div className="container mx-auto px-4 pt-8">

        {/* Discount, Live Tracking, and Quick Delivery */}
        <div className="bg-white flex flex-col sm:flex-col md:flex-col lg:flex-row justify-center items-center gap-4 px-6 py-8 rounded-3xl">

        <div className="flex flex-col sm:flex-col md:flex-row lg:flex-row justify-center items-center gap-4 p-4 shadow-lg md:drop-shadow-lg">
        {/* Left side: Image */}
        <div className="w-full sm:w-full md:w-1/2 lg:w-1/2">
            <img src={discount} alt="" className="w-full h-auto sm:max-h-96 md:max-h-full lg:max-h-full object-cover" />
        </div>

        {/* Right side: Daily Discounts */}
        <div className="flex flex-col justify-center items-center gap-4 p-4 md:w-1/2 lg:w-1/2">
            <div className="flex flex-col justify-center text-lg sm:text-xl md:text-2xl lg:text-3xl font-serif font-bold text-center">
            <h1 className="text-orange-500">Daily</h1>
            <h1 className="text-orange-500">Discounts</h1>
            </div>
        </div>
        </div>


        <div className="flex flex-col sm:flex-col md:flex-row lg:flex-row justify-center items-center gap-4 p-4 shadow-lg md:drop-shadow-lg">
        {/* Left side: Image */}
        <div className="w-full sm:w-full md:w-1/2 lg:w-1/2">
            <img src={live} alt="" className="w-full h-auto sm:max-h-96 md:max-h-full lg:max-h-full object-cover" />
        </div>

        {/* Right side: Daily Discounts */}
        <div className="flex flex-col justify-center items-center gap-4 p-4 md:w-1/2 lg:w-1/2">
            <div className="flex flex-col justify-center text-lg sm:text-xl md:text-2xl lg:text-3xl font-serif font-bold text-center">
            <h1 className="text-orange-500">Live</h1>
            <h1 className="text-orange-500">Tracking</h1>
            </div>
        </div>
        </div>


        <div className="flex flex-col sm:flex-col md:flex-row lg:flex-row justify-center items-center gap-4 p-4 shadow-lg md:drop-shadow-lg">
        {/* Left side: Image */}
        <div className="w-full sm:w-full md:w-1/2 lg:w-1/2">
            <img src={delivery} alt="" className="w-full h-auto sm:max-h-96 md:max-h-full lg:max-h-full object-cover" />
        </div>

        {/* Right side: Daily Discounts */}
        <div className="flex flex-col justify-center items-center gap-4 p-4 md:w-1/2 lg:w-1/2">
            <div className="flex flex-col justify-center text-lg sm:text-xl md:text-2xl lg:text-3xl font-serif font-bold text-center">
            <h1 className="text-orange-500">Quick</h1>
            <h1 className="text-orange-500">Delivery</h1>
            </div>
        </div>
        </div>

    </div>


        {/* Phone, Google, and App Store */}
        <div className="container mx-auto flex flex-col sm:flex-col md:flex-col lg:flex-row justify-center px-4 sm:gap-4 md:gap-4 lg:gap-0 mt-10">

          {/* Left side: Phone image */}
          <div className="w-full sm:w-full md:w-full lg:w-1/2">
            <img src={phone} alt={phone} className="w-full h-auto" />
          </div>

          {/* Right side: Food details */}
          <div className="w-full sm:w-full md:w-full lg:w-1/2 text-white flex flex-col justify-center items-start px-4 py-6 gap-6 font-serif">
            <h2 className="text-5xl font-bold mb-4">Install The App</h2>
            <p className="w-full text-white text-lg md:w-5/6 lg:w-full">
              It's never been easier to order food. Look for the finest discounts, and you'll be lost in a world of delectable food.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4">
              <img src={google} alt="" className="w-full h-auto" />
              <img src={app} alt="" className="w-full h-auto" />
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

export default InfoApp;
