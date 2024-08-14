// src/api/historyApi.js
import axios from 'axios';

const API_URL = '/user'; // This should match the base path of your backend API

export const getUserHistory = async () => {
    try {
        const response = await axios.get(`${API_URL}/history`);
        return response.data;
    } catch (error) {
        console.error('Error fetching history:', error);
        throw error;
    }
};
