// src/components/Image/ImagePreview.js
import React, { useState } from 'react';

const ImagePreview = ({ imageFile }) => {
    const [imageUrl, setImageUrl] = useState('');

    React.useEffect(() => {
        if (imageFile) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImageUrl(reader.result);
            };
            reader.readAsDataURL(imageFile);
        }
    }, [imageFile]);

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            {imageUrl ? (
                <img
                    src={imageUrl}
                    alt="Preview"
                    className="max-w-full max-h-80"
                />
            ) : (
                <p>No image selected for preview</p>
            )}
        </div>
    );
};

export default ImagePreview;
