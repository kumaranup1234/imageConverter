// src/pages/HistoryPage.js
import React, { useEffect, useState } from 'react';
import HistoryList from '../components/History/HistoryList';
import { getUserHistory } from '../api/historyApi';
import { useAuth } from '../hooks/useAuth';

const HistoryPage = () => {
    const [history, setHistory] = useState([]);
    const { loginUser } = useAuth();

    useEffect(() => {
        const fetchHistory = async () => {
            try {
                const { data } = await getUserHistory();
                setHistory(data);
            } catch (err) {
                console.error('Failed to fetch history:', err);
            }
        };

        fetchHistory();
    }, []);

    return (
        <div className="min-h-screen flex flex-col">
            <header className="bg-gray-800 text-white p-4">
                <h1 className="text-2xl">Your History</h1>
            </header>
            <main className="flex-grow container mx-auto px-4 py-8">
                <HistoryList history={history} />
            </main>
        </div>
    );
};

export default HistoryPage;
