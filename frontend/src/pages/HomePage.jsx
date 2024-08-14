// src/pages/HomePage.js
import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Common/Header';
import Footer from '../components/Common/Footer';

const HomePage = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-grow container mx-auto px-4 py-8">
                <h1 className="text-4xl font-bold mb-4">Welcome to the Image Converter</h1>
                <p className="text-lg mb-4">
                    Easily convert, resize, crop, and apply filters to your images.
                </p>
                <div className="space-y-4">
                    <Link to="/convert" className="btn btn-primary">Start Processing Images</Link>
                    <Link to="/history" className="btn btn-secondary">View Your History</Link>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default HomePage;
