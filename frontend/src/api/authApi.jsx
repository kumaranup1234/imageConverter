// src/api/authApi.jsx
import axios from 'axios';

const API_URL = '/auth';

// Register a new user
export const register = async (userData) => {
    try {
        const response = await axios.post(`${API_URL}/register`, userData);
        return response.data;
    } catch (error) {
        throw error;
    }
};

// Login an existing user
export const login = async (credentials) => {
    try {
        const response = await axios.post(`${API_URL}/login`, credentials);
        return response.data;
    } catch (error) {
        throw error;
    }
};

// Logout a user
export const logout = async () => {
    try {
        const response = await axios.post(`${API_URL}/logout`);
        return response.data;
    } catch (error) {
        throw error;
    }
};
