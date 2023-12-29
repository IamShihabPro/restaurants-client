// import { Rating } from '@smastrom/react-rating';
import React from 'react';

const Cards = ({menu}) => {
    const {_id, name, image, recipe, price, category, } = menu
    return (
        <div className='container'>
            <div className='col-span-1 cursor-pointer group bg-white drop-shadow-md rounded-md p-2 my-2 mx-3'>
                <div className='flex flex-col gap-2 w-full'>
                    <div className=' aspect-square w-full relative overflow-hidden rounded-md'>
                        <img className=' object-cover h-full w-full group-hover:scale-110 transition'src={image}alt='Cloths'/>               
                    </div>
                
                    <div className='font-semibold text-lg'>{name}</div>

                    <div className='font-semibold'>$ {price}</div>
                    

                </div>
            </div>
        </div>
    );
};

export default Cards;