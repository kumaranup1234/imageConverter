// src/hooks/useImage.js
import { useState } from 'react';
import { convertImage, resizeImage, cropImage, compressImage, grayscaleImage, tintImage, rotateImage, blurImage, sharpenImage, flipImage, addTextToImage } from '../api/imageApi';

export const useImage = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const processImage = async (action, file, options) => {
        setLoading(true);
        setError(null);
        try {
            let response;
            switch (action) {
                case 'convert':
                    response = await convertImage(file, options.targetFormat);
                    break;
                case 'resize':
                    response = await resizeImage(file, options.dimensions);
                    break;
                case 'crop':
                    response = await cropImage(file, options.coordinates);
                    break;
                case 'compress':
                    response = await compressImage(file);
                    break;
                case 'grayscale':
                    response = await grayscaleImage(file);
                    break;
                case 'tint':
                    response = await tintImage(file, options.color);
                    break;
                case 'rotate':
                    response = await rotateImage(file, options.angle);
                    break;
                case 'blur':
                    response = await blurImage(file);
                    break;
                case 'sharpen':
                    response = await sharpenImage(file);
                    break;
                case 'flip':
                    response = await flipImage(file);
                    break;
                case 'addText':
                    response = await addTextToImage(file, options.text);
                    break;
                default:
                    throw new Error('Invalid action');
            }
            return response;
        } catch (err) {
            setError(err.message || 'Image processing failed');
        } finally {
            setLoading(false);
        }
    };

    return {
        processImage,
        loading,
        error
    };
};
