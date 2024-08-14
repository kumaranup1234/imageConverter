// src/pages/NotFoundPage.js
import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Common/Header';
import Footer from '../components/Common/Footer';

const NotFoundPage = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-grow container mx-auto px-4 py-8 text-center">
                <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
                <p className="text-lg mb-4">Oops! The page you're looking for does not exist.</p>
                <Link to="/" className="btn btn-primary">Go to Home</Link>
            </main>
            <Footer />
        </div>
    );
};

export default NotFoundPage;
