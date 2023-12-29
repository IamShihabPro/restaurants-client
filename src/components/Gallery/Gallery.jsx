import React from 'react';
import img1 from '../../assets/gallery/gallery-1.jpg'
import img2 from '../../assets/gallery/gallery-2.jpg'
import img3 from '../../assets/gallery/gallery-3.jpg'
import img4 from '../../assets/gallery/gallery-4.jpg'
import img5 from '../../assets/gallery/gallery-5.jpg'
import img6 from '../../assets/gallery/gallery-6.jpg'
import img7 from '../../assets/gallery/gallery-7.jpg'
import img8 from '../../assets/gallery/gallery-8.jpg'

const Gallery = () => {
  const images = [
    img2, img1 , img3, img4, img5, img6, img7, img8
  ];

  return (
    <div className="p-4 font-serif">
        <h1 className='text-center font-bold text-4xl my-10'>Some Photos From Our Restaurant</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
        {images.map((image, index) => (
          <div key={index} className="relative group overflow-hidden">
            <img
              className="w-full h-full object-cover transition-transform transform group-hover:scale-105"
              src={image}
              alt={`Gallery Image ${index + 1}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
