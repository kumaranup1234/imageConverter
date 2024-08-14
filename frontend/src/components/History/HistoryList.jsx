// src/components/History/HistoryList.js
import React, { useEffect, useState } from 'react';
import { useAuth } from '../../hooks/useAuth';
import { getUserHistory } from '../../api/historyApi';

const HistoryList = () => {
    const [history, setHistory] = useState([]);
    const { user } = useAuth();

    useEffect(() => {
        const fetchHistory = async () => {
            if (user) {
                try {
                    const data = await getUserHistory();
                    setHistory(data);
                } catch (error) {
                    console.error('Error fetching history:', error);
                }
            }
        };

        fetchHistory();
    }, [user]);

    if (!user) {
        return <p>Please log in to view your history.</p>;
    }

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Your Conversion History</h1>
            <table className="w-full border-collapse border border-gray-200">
                <thead>
                    <tr>
                        <th className="border border-gray-300 p-2">Operation</th>
                        <th className="border border-gray-300 p-2">Format</th>
                        <th className="border border-gray-300 p-2">Timestamp</th>
                    </tr>
                </thead>
                <tbody>
                    {history.length === 0 ? (
                        <tr>
                            <td colSpan="3" className="border border-gray-300 p-2 text-center">No history found</td>
                        </tr>
                    ) : (
                        history.map((item) => (
                            <tr key={item._id}>
                                <td className="border border-gray-300 p-2">{item.operation}</td>
                                <td className="border border-gray-300 p-2">{item.format}</td>
                                <td className="border border-gray-300 p-2">{new Date(item.timestamp).toLocaleString()}</td>
                            </tr>
                        ))
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default HistoryList;
