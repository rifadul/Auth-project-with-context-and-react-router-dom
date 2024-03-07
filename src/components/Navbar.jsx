import React from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
    const { user, login, logout, isLogin } = useAuth();
    console.log('isLogin', isLogin);
    return (
        <div className='h-20 bg-black text-white font-medium text-3xl flex justify-center items-center gap-6'>

            <Link to="/">Home</Link>

            {
                isLogin ? (
                    <>
                        <Link to="/dashboard">Dashboard</Link>
                        <Link to="/product">Product</Link>
                    </>
                ) : (
                    <>
                        <Link to="/login">Login</Link>
                        <Link to="/sign-up">Sign up</Link>
                    </>
                )
            }

            {
                isLogin && <button className='bg-yellow-600 py-2 px-3 rounded' onClick={logout}>Logout</button>
            }

        </div>
    )
}

export default Navbar