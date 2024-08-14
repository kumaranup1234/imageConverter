// src/contexts/AuthContext.js
import React, { createContext, useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { login, logout } from '../api/authApi';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        // Check for existing token in local storage
        const token = localStorage.getItem('token');
        if (token) {
            // Normally, you would fetch user details here
            // For demo purposes, we'll assume a token means the user is logged in
            setUser({ token }); // Replace with actual user fetching if needed
        }
        setLoading(false);
    }, []);

    const loginUser = async (email, password) => {
        try {
            const { token } = await login(email, password);
            localStorage.setItem('token', token);
            setUser({ token });
            navigate('/');
        } catch (error) {
            console.error('Login error:', error);
        }
    };

    const logoutUser = async () => {
        try {
            await logout();
            localStorage.removeItem('token');
            setUser(null);
            navigate('/login');
        } catch (error) {
            console.error('Logout error:', error);
        }
    };

    const value = {
        user,
        loginUser,
        logoutUser,
        loading
    };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);
