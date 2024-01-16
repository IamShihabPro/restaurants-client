import React from 'react';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import Loader from '../components/Loader/Loader';
import useAdmin from '../hooks/useAdmin';

const PrivateRoutes = ({children}) => {
    const {user, loading} = useAuth()
    const location = useLocation()
    const navigate = useNavigate()
    const [isAdmin, isAdminLoading] = useAdmin()

    if(loading){
        return <Loader></Loader>
    }

    if(user && isAdmin?.admin == true){
        return children
    }

    return <Navigate state={{from: location}} to='/' replace ></Navigate>
};

export default PrivateRoutes;