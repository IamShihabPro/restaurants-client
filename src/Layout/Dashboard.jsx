import React from 'react';
import Sidebar from '../components/Sidebar/Sidebar';
import { Outlet } from 'react-router-dom';

const Dashboard = () => {
    
    return (
        <div className='flex gap-2'> 
            <div className='basis-[15%] border h-[100vh] bg-gray-900'>
                <Sidebar></Sidebar>
            </div>
            <div className='basis-[85%] border'>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;