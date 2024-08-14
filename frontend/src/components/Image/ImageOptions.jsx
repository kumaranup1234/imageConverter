// src/components/Image/ImageOptions.js
import React from 'react';

const ImageOptions = ({ onOptionSelect }) => {
    const handleOptionClick = (option) => {
        onOptionSelect(option);
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h2 className="text-xl font-bold mb-4">Select an image processing option</h2>
            <button
                onClick={() => handleOptionClick('resize')}
                className="bg-blue-500 text-white py-2 px-4 mb-2 rounded"
            >
                Resize
            </button>
            <button
                onClick={() => handleOptionClick('crop')}
                className="bg-blue-500 text-white py-2 px-4 mb-2 rounded"
            >
                Crop
            </button>
            <button
                onClick={() => handleOptionClick('compress')}
                className="bg-blue-500 text-white py-2 px-4 mb-2 rounded"
            >
                Compress
            </button>
            {/* Add more options as needed */}
        </div>
    );
};

export default ImageOptions;
