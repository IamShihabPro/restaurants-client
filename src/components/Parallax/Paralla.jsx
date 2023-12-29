import React from 'react';
import { Parallax, Background } from 'react-parallax';
import Bg from '../../assets/banner/bg2.jpg'
import Pizza from '../../assets/banner/pizza.webp'


const Paralla = () => {
    return (
        <div className='my-20'>
            <Parallax
                blur={{ min: -15, max: 15 }}
                bgImage={Bg}
                bgImageAlt="the dog"
                strength={-200}
            >
               <div className="hero min-h-[600px]">
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">

                <div className="flex flex-col sm:flex-col md:flex-col lg:flex-row justify-center px-4 gap-4 sm:gap-4 md:gap-4 lg:gap-0 ">
                    {/* Left side: Food details */}
                    <div className="w-full sm:w-full md:w-full lg:w-1/2 bg-black/50 text-white flex flex-col justify-evenly items-center py-6 font-serif">
                        <h2 className="text-4xl font-bold mb-4">Best deals <span className='text-yellow-500'>Crispy Pizza</span></h2>
                        <p className="px-12 w-5/6 text-white ">Enjoy the large size of sandwiches. Complete your meal with the perfect slice of sandwiches.</p>
                        <button className='bg-orange-600 text-white rounded-md px-4 py-2 mt-2 w-4/6'>Proceed To Order Now</button>
                    </div>

                    {/* Right side: Food image */}
                    <div className="w-full sm:w-full md:w-full lg:w-1/2">
                        <img src={Pizza} alt={Pizza} className="w-full h-auto"/>
                    </div>
                </div>

                </div>
                </div>
            </Parallax>
        </div>
    );
};

export default Paralla;