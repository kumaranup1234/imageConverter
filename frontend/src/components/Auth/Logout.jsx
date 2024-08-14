// src/components/Auth/Logout.js
import React from 'react';
import { useAuth } from '../../hooks/useAuth';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
    const { setAuthTokens } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        setAuthTokens(null);
        navigate('/login'); // Redirect to login page
    };

    return (
        <button onClick={handleLogout} className="bg-red-500 text-white py-2 px-4 rounded">
            Logout
        </button>
    );
};

export default Logout;
