import React, { useState } from 'react';
import Payments from '../Payment/Payments';

const ShippingModal = ({ handleProceed }) => {
    const [isModalOpen, setModalOpen] = useState(false);

    const openModal = () => setModalOpen(true);
    const closeModal = () => setModalOpen(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        handleProceed();
        openModal();
    };

    return (
        <>
            <button className="btn btn-primary text-white" onClick={() => document.getElementById('my_modal_5').showModal()}>Proceed To Payment</button>

            <dialog id="my_modal_5" className="modal modal-center">
                <div className="modal-overlay"></div>
                <div className="modal-container w-96">
                    <div className="modal-box bg-white shadow-lg p-6 rounded-md relative">
                        <button className="btn btn-sm btn-circle btn-ghost absolute top-2 right-2" onClick={() => document.getElementById('my_modal_5').close()}>✕</button>
                        <h3 className="font-bold text-2xl mb-4 mt-2">Order Information</h3>

                        <form onSubmit={handleSubmit} className="flex flex-col gap-2">
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

                            <div className="mt-6">
                                <div className="flex items-center justify-center">
                                    <button type='submit' className="btn btn-secondary btn-sm text-white px-4 py-2" onClick={openModal}>
                                        Proceed
                                    </button>

                                    <Payments isOpen={isModalOpen} onClose={closeModal}>
                                        <h1 className="text-lg font-bold mb-4 mt-10">Online Payments</h1>
                                        
                                    </Payments>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </dialog>
        </>
    );
};

export default ShippingModal;
