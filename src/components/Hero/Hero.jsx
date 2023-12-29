import React, { useState } from 'react';
import bg1 from '../../assets/banner/bg2.png';
import food1 from '../../assets/banner/food1.png';
import food2 from '../../assets/banner/food2.png';
import food3 from '../../assets/banner/food3.png';
import food4 from '../../assets/banner/food4.png';

const ImgList = [
  {
    id: 2,
    img: food2,
  },
  {
    id: 3,
    img: food3,
  },
  {
    id: 4,
    img: food4,
  },
];

const Hero = () => {
  const [imgFood, setImgFood] = useState(food1);

  return (
    <div className="pt-20 mt-0 sm:mt-10 md:mt-16 min-h-[600px] sm:min-h-[600px] font-serif bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${bg1})` }}>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 p-4">
          <div className="mt-4 sm:mt-20">
            <h1 className="text-5xl font-bold w-full sm:w-96 md:w-full lg:w-full mb-4 font-serif">Welcome to the Foodie</h1>
            <p className="w-full sm:w-96 md:w-full lg:w-full mb-4 font-serif">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo, omnis provident deleniti molestias ipsum sit.</p>
            <button className="px-4 py-2 mb-6 rounded-md bg-orange-600 w-28 text-white">Order Now</button>
          </div>

          <div className="flex flex-col justify-center items-center">
            <img src={imgFood} className="w-1/2 sm:w-4/6 animate-spin slower" alt="" />

            <div className="flex justify-center items-center max-w-[70px] mt-4">
              {ImgList.map((item) => (
                <img key={item.id} src={item.img} className="animate-spin slower duration-200 cursor-pointer" onClick={() => setImgFood(item.img)} alt="" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
