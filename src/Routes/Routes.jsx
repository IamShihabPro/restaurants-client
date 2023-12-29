import React from 'react';
import {createBrowserRouter} from "react-router-dom";
import App from '../App';
import Home from '../pages/Home/Home';
import Menu from '../pages/Menu/Menu';

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
      ]
    },
]);

