import React, { createContext, useContext, useState } from 'react';
import axios from 'axios';
const AuthContext = createContext();
const BASE_URL = 'http://192.168.10.61:5002/v1';

// Create AuthProvider component
export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('userInfo')) || null);
    const [isLogin, setIsLogin] = useState(localStorage.getItem('token') ? true : false)
    const [token, setToken] = useState(localStorage.getItem('token') || null);


    const login = (userInfo) => {
        setUser({ userInfo });
        setToken(userInfo?.token);
        setIsLogin(true)
        localStorage.setItem('token', userInfo?.token);
        localStorage.setItem('userInfo', JSON.stringify(userInfo));
    };

    const logout = () => {
        setUser(null);
        setToken(null);
        setIsLogin(false)
        localStorage.removeItem('userInfo');
        localStorage.removeItem('token');
    };

    const authenticate = async (email, password) => {
        try {
            const response = await axios.post(`${BASE_URL}/users/login`, {
                email,
                password,
            });

            console.log('response', response.data);
            const token = response.data.token;
            login(response.data);

            return { success: true };
        } catch (error) {
            console.error('Authentication failed:', error.message);
            return { success: false, error: error.message };
        }
    };

    return (
        <AuthContext.Provider value={{ user, token, login, logout, isLogin, authenticate }}>
            {children}
        </AuthContext.Provider>
    );
};

// Custom hook to use the AuthContext
export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};