import React from 'react';
import Nabvbar from './components/Navbar/Navbar';
import { Outlet } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <Nabvbar></Nabvbar>
      <Outlet></Outlet>
    </div>
  );
};

export default App;