// src/components/Image/ImageUpload.js
import React, { useState } from 'react';
import { useImage } from '../../hooks/useImage';

const ImageUpload = () => {
    const [selectedFile, setSelectedFile] = useState(null);
    const { uploadImage } = useImage();

    const handleFileChange = (e) => {
        setSelectedFile(e.target.files[0]);
    };

    const handleUpload = async () => {
        if (selectedFile) {
            try {
                await uploadImage(selectedFile);
                setSelectedFile(null);
                alert('Image uploaded successfully!');
            } catch (err) {
                alert('Error uploading image: ' + err.message);
            }
        } else {
            alert('Please select an image file first.');
        }
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <input
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className="mb-4"
            />
            <button
                onClick={handleUpload}
                className="bg-blue-500 text-white py-2 px-4 rounded"
            >
                Upload Image
            </button>
        </div>
    );
};

export default ImageUpload;
