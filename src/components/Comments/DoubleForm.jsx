/*

import React, { useEffect, useState } from 'react';

const ShippingModal = ({ isOpen, onClose, children, handleProceed }) => {
    const [isModalOpen, setIsModalOpen] = useState(isOpen);
a
    useEffect(() => {
      setIsModalOpen(isOpen);
    }, [isOpen]);
  
    const closeModal = () => {
      setIsModalOpen(false);
      onClose();
  };

    return (
        <>
           {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
          <div className="relative w-auto max-w-md p-4 mx-auto my-6 transition-all transform bg-white border rounded-lg shadow-lg">
            {children}
            <button
              className="absolute top-0 right-0 mt-4 mr-4 text-gray-500 cursor-pointer"
              onClick={closeModal}
            >
              <span className="text-2xl">&times;</span>
            </button>

            <form onSubmit={handleProceed} className="flex flex-col gap-2">
                            <div className='mb-4'>
                                <label htmlFor="address" className='text-gray-600'>Address</label>
                                <textarea
                                    id="address"
                                    placeholder="Your Address"
                                    name='address'
                                    className="input input-bordered w-full h-32 focus:ring-indigo-500 focus:border-indigo-500"
                                />
                            </div>

                            <div className='mb-4'>
                                <label htmlFor="city" className='text-gray-600'>City</label>
                                <input
                                    id="city"
                                    type="text"
                                    placeholder="Your City"
                                    name='city'
                                    className="input input-bordered w-full focus:ring-indigo-500 focus:border-indigo-500"
                                />
                            </div>

                            <div className='mb-4'>
                                <label htmlFor="zipcode" className='text-gray-600'>Zip Code</label>
                                <input
                                    id="zipcode"
                                    type="text"
                                    placeholder="Your Zip Code"
                                    name='zipcode'
                                    className="input input-bordered w-full focus:ring-indigo-500 focus:border-indigo-500"
                                />
                            </div>

                            <div>
                                <button
                                type='submit'
                                className='bg-rose-500 w-full rounded-md py-3 text-white'>
                                    Submit
                                </button>
                            </div>
            </form>
          </div>
        </div>
      )}
        </>
    );
};

export default ShippingModal;


*/ 

/*


*/ 