// src/routes/AppRouter.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import ConvertPage from '../pages/ConvertPage';
import HistoryPage from '../pages/HistoryPage';
import NotFoundPage from '../pages/NotFoundPage';
import { AuthProvider } from '../contexts/AuthContext';
import Login from '../components/Auth/Login';

const AppRouter = () => {
    return (
        <Router>
            <AuthProvider>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/convert" element={<ConvertPage />} />
                    <Route path="/history" element={<HistoryPage />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="*" element={<NotFoundPage />} />
                </Routes>
            </AuthProvider>
        </Router>
    );
};

export default AppRouter;
