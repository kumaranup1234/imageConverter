// src/hooks/useAuth.js
import { useState } from 'react';
import { login, logout } from '../api/authApi';

export const useAuth = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const loginUser = async (email, password) => {
        setLoading(true);
        setError(null);
        try {
            const { token } = await login(email, password);
            localStorage.setItem('token', token);
            window.location.reload(); // Refresh to update UI based on new auth state
        } catch (err) {
            setError(err.message || 'Login failed');
        } finally {
            setLoading(false);
        }
    };

    const logoutUser = async () => {
        setLoading(true);
        setError(null);
        try {
            await logout();
            localStorage.removeItem('token');
            window.location.reload(); // Refresh to update UI based on new auth state
        } catch (err) {
            setError(err.message || 'Logout failed');
        } finally {
            setLoading(false);
        }
    };

    return {
        loginUser,
        logoutUser,
        loading,
        error
    };
};
