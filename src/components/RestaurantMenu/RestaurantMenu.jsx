// src/components/RestaurantMenu.js
import React, { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const RestaurantMenu = () => {
  const [category, setCategory] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');

  useEffect(() => {
    fetch('/menu.json') // Adjust the path to your JSON file
      .then((res) => res.json())
      .then((data) => {
        setCategory(data);
      });
  }, []);

  let uniqueArr = ['All', ...new Set(category.map((item) => item.category))];

  const filterMenu = category.filter(
    (menu) => selectedCategory === 'All' || menu.category === selectedCategory
  );

  return (
    <div className="container mx-auto p-4">
      <Tabs>
        {/* Tab Headers */}
        <TabList className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-2 px-2 mx-auto text-center space-x-4 sm:space-x-8 border-b border-gray-300 pb-2 mb-4 font-serif">
          {uniqueArr.map((data, i) => (
            <Tab
              key={i}
              onClick={() => setSelectedCategory(data)}
              className={`cursor-pointer text-md bg-orange-600 text-white px-4 py-2 rounded-md font-semibold uppercase ${
                selectedCategory === data && 'border-b-2 border-blue-500'
              }`}
            >
              {data}
            </Tab>
          ))}
        </TabList>

        {/* Tab Panels */}
        {uniqueArr.map((data, i) => (
          <TabPanel key={i}>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 text-white font-serif">
              {filterMenu.slice(0,12).map((menu, index) => (
                <div key={index} className="bg-white text-black p-4 rounded shadow mb-4">
                  <img src={menu.image} className="w-full h-40 object-cover mb-4" alt={menu.name} />
                  <p className='text-gray-500'>{menu.recipe}</p>
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="text-lg font-semibold mb-2">{menu.name}</h3>
                      <p className="font-semibold mt-2">${menu.price.toFixed(2)}</p>
                    </div>
                    <button className='bg-orange-600 px-4 py-2 rounded-md text-white font-serif'>Add to cart</button>
                  </div>
                </div>
              ))}
            </div>
          </TabPanel>
        ))}
      </Tabs>
    </div>
  );
};

export default RestaurantMenu;
