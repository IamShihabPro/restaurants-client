import React from 'react';
import {createBrowserRouter} from "react-router-dom";
import App from '../App';
import Home from '../pages/Home/Home';
import Menu from '../pages/Menu/Menu';
import Contact from '../pages/Contact/Contact';
import Login from '../pages/Login/Login';
import Dashboard from '../Layout/Dashboard';
import MainDash from '../pages/MainDash/MainDash';
import Order from '../pages/Order/Order';
import MenuDisplay from '../components/Comments/MenuDisplay';
import AllUsers from '../pages/Dashboards/AllUsers/Allusers';
// import NewDash from '../components/NewDash/NewDash';
import PrivateRoutes from '../PrivateRoutes/PrivateRoutes';
import AddFood from '../pages/Dashboards/AddFood/AddFood';
import AllFood from '../pages/Dashboards/AllFoods/AllFood';

export const router = createBrowserRouter([
    {
      path: "/",
      element: <App></App>,
      children:[
        {
          path: '/',
          element: <Home></Home>
        },
        {
          path: '/menu',
          element: <Menu></Menu>
        },
        {
          path: '/contact',
          element: <Contact></Contact>
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/order',
          element: <Order></Order>
        },
        {
          path: '/display',
          element: <MenuDisplay></MenuDisplay>
        },
        
      ]
    },
    {
      path: '/dashboard',
      element: <PrivateRoutes> <Dashboard></Dashboard> </PrivateRoutes>,
      children:[
        {
          path: 'maindash',
          element: <MainDash></MainDash>,
        },
        {
          path: 'allusers',
          element: <AllUsers></AllUsers>
        },
        {
          path: 'addfood',
          element: <AddFood></AddFood>
        },
        {
          path: 'allfood',
          element: <AllFood></AllFood>
        },
      ]
      
    },
    // {
    //   path: '/newdash',
    //   element: <NewDash></NewDash>
    // }
   
]);

