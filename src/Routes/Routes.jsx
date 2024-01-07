import React from 'react';
import {createBrowserRouter} from "react-router-dom";
import App from '../App';
import Home from '../pages/Home/Home';
import Menu from '../pages/Menu/Menu';
import Contact from '../pages/Contact/Contact';
import Login from '../pages/Login/Login';
import Dashboard from '../Layout/Dashboard';

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
      ]
    },
    {
      path: '/dashboard',
      element: <Dashboard></Dashboard>
    },
]);

