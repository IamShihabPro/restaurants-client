// ShippingModal.jsx
import React, { useState } from "react";

const ShippingModal = ({ isOpen, onClose, onSubmit }) => {
  const [formData, setFormData] = useState({
    address: "",
    city: "",
    zipcode: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div
      className={`fixed inset-0 font-serif ${
        isOpen ? "block" : "hidden"
      } bg-black bg-opacity-50 z-50`}
    >
      <div className="flex items-center justify-center h-screen">
        <div className="bg-white p-6 rounded-lg w-96 relative">
          <button
            className="absolute top-0 right-0 m-2 text-gray-700 hover:text-gray-900 p-4 font-bold"
            onClick={onClose}
          >
            ✕
          </button>
          <h2 className="text-2xl font-bold mb-4">Delivery Details</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="address"
                className="block text-sm font-medium text-gray-600"
              >
                Address
              </label>

              <textarea
                id="address"
                placeholder="Your Address"
                name="address"
                required
                value={formData.address}
                onChange={handleInputChange}
                className="mt-1 p-2 w-full border rounded-md"   
                
                />
            </div>

            <div className="mb-4">
              <label
                htmlFor="city"
                className="block text-sm font-medium text-gray-600"
              >
                City
              </label>
              <input
                type="text"
                id="city"
                name="city"
                required
                placeholder="Your City"
                value={formData.city}
                onChange={handleInputChange}
                className="mt-1 p-2 w-full border rounded-md"
                
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="zipcode"
                className="block text-sm font-medium text-gray-600"
              >
                Zipcode
              </label>
              <input
                type="number"
                id="zipcode"
                name="zipcode"
                required
                placeholder="Your Zip Code"
                value={formData.zipcode}
                onChange={handleInputChange}
                className="mt-1 p-2 w-full border rounded-md"
                
              />
            </div>
            <button
              type="submit"
              className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-500 w-full"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ShippingModal;
