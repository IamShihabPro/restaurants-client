import React from 'react';

const Cards = ({ menu, handleAddToCart }) => {
  const { _id, name, image, recipe, price, category } = menu;

  const truncateText = (text, maxLength) => {
    const words = text.split(' ');
    if (words.length > maxLength) {
      return words.slice(0, maxLength).join(' ') + '...';
    }
    return text;
  };

  return (
    <div className="container">
      <div className="bg-white text-black p-4 group rounded shadow mb-4">
        <img
          src={image}
          className="w-full h-40 object-cover mb-4 group-hover:scale-110 transition duration-300"
          alt={name}
        />
        <p className="text-gray-500">{truncateText(recipe, 9)}</p>
        <div className="flex justify-between items-center mt-2">
          <div>
            <h3 className="text-lg font-semibold mb-2">{name}</h3>
            <p className="font-semibold">${price.toFixed(2)}</p>
          </div>
        </div>
          <button onClick={()=> handleAddToCart(menu)} className="bg-orange-500 px-4 py-2 w-full mt-2 rounded-md text-white font-serif">
            Add to cart
          </button>
      </div>
    </div>
  );
};

export default Cards;
