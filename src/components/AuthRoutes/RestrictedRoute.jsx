import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = ({ isLogin }) => {
    const _to = '/';
    return (isLogin ? <Navigate to={_to} /> : <Outlet />);
}

export default ProtectedRoute;