// src/utils/apiUtils.js
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const fetchData = async (url, options = {}) => {
    try {
        const response = await fetch(`${API_BASE_URL}${url}`, {
            ...options,
            headers: {
                'Content-Type': 'application/json',
                ...options.headers,
            },
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message || 'An error occurred');
        }

        return response.json();
    } catch (error) {
        console.error('API request error:', error);
        throw error;
    }
};
