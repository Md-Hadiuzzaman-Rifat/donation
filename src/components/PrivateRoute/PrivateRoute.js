import React from 'react';
import { useAuth } from '../../context/AuthContext';
import {Outlet} from "react-router-dom";
import { Navigate } from "react-router-dom";

const PrivateRoute = () => {
    const {currentUser}=useAuth() || {}
    return currentUser ? <Outlet/> : <Navigate to="/login" replace={true} />
};

export default PrivateRoute;