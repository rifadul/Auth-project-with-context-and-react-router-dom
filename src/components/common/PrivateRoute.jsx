import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
// import {LOGIN_PATH, OWNER_LOGIN_PATH} from "../../routes/Slug";

const PrivateRoute = ({ isLogin }) => {
    const _to = 'login';
    // const _to = (!loggedInAs || (loggedInAs === OWNER)) ? OWNER_LOGIN_PATH : LOGIN_PATH;
    return (isLogin ? <Outlet /> : <Navigate to={_to} />);
}

export default PrivateRoute;