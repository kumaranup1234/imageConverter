// src/components/Common/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';

const Header = () => {
    const { user, logout } = useAuth();

    return (
        <header className="bg-gray-800 text-white p-4">
            <nav className="container mx-auto flex justify-between items-center">
                <div className="text-2xl font-bold">
                    <Link to="/">Image Converter</Link>
                </div>
                <div>
                    <Link to="/" className="mr-4 hover:text-gray-300">Home</Link>
                    <Link to="/convert" className="mr-4 hover:text-gray-300">Convert</Link>
                    <Link to="/history" className="mr-4 hover:text-gray-300">History</Link>
                    {user ? (
                        <button
                            onClick={logout}
                            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
                        >
                            Logout
                        </button>
                    ) : (
                        <Link to="/login" className="hover:text-gray-300">Login</Link> 
                    )}
                </div>
            </nav>
        </header>
    );
};

export default Header;
