import React from 'react';
import { useAuth } from '../../context/AuthContext';
import { Navigate } from 'react-router-dom';

const PrivateSingleRoute = ({children}) => {
    const {currentUser}= useAuth() || {}
    return  currentUser ? children : <Navigate to="/login"></Navigate>
};

export default PrivateSingleRoute;