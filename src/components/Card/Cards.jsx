// import { Rating } from '@smastrom/react-rating';
import React from 'react';

const Cards = ({menu}) => {
    const {_id, name, image, recipe, price, category, } = menu
    return (
        <div className='container'>
            <div  className="bg-white text-black p-4 group rounded shadow mb-4">
                  <img src={image} className="w-full h-40 object-cover mb-4 group-hover:scale-110 transition duration-300" alt={name} />
                  <p className='text-gray-500'>{recipe}</p>
                  <div className="flex justify-between items-center">
                    <div className='mt-2'>
                      <h3 className="text-lg font-semibold mb-2">{name}</h3>
                      <p className="font-semibold mt-2">${price.toFixed(2)}</p>
                    </div>
                    <button className='bg-orange-600 px-4 py-2 rounded-md text-white font-serif'>Add to cart</button>
                  </div>
            </div>
        </div>
    );
};

export default Cards;