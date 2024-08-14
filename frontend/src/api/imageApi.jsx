// src/api/imageApi.jsx
import axios from 'axios';

const API_URL = '/images';

export const convertImage = async (formData, targetFormat) => {
    try {
        const response = await axios.post(`${API_URL}/convert/${targetFormat}`, formData);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const resizeImage = async (formData) => {
    try {
        const response = await axios.post(`${API_URL}/resize`, formData);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const cropImage = async (formData) => {
    try {
        const response = await axios.post(`${API_URL}/crop`, formData);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const compressImage = async (formData) => {
    try {
        const response = await axios.post(`${API_URL}/compress`, formData);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const grayscaleImage = async (formData) => {
    try {
        const response = await axios.post(`${API_URL}/grayscale`, formData);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const tintImage = async (formData) => {
    try {
        const response = await axios.post(`${API_URL}/tint`, formData);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const rotateImage = async (formData) => {
    try {
        const response = await axios.post(`${API_URL}/rotate`, formData);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const blurImage = async (formData) => {
    try {
        const response = await axios.post(`${API_URL}/blur`, formData);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const sharpenImage = async (formData) => {
    try {
        const response = await axios.post(`${API_URL}/sharpen`, formData);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const flipImage = async (formData) => {
    try {
        const response = await axios.post(`${API_URL}/flip`, formData);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const addTextToImage = async (formData) => {
    try {
        const response = await axios.post(`${API_URL}/add-text`, formData);
        return response.data;
    } catch (error) {
        throw error;
    }
};
