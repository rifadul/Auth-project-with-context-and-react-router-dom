import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoute = ({ isLogin }) => {
    const _to = 'login';
    return (isLogin ? <Outlet /> : <Navigate to={_to} />);
}

export default PrivateRoute;