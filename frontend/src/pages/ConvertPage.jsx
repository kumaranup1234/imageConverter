// src/pages/ConvertPage.js
import React, { useState } from 'react';
import ImageUpload from '../components/Image/ImageUpload';
import ImageOptions from '../components/Image/ImageOptions';
import ImagePreview from '../components/Image/ImagePreview';
import { useImage } from '../hooks/useImage';

const ConvertPage = () => {
    const [file, setFile] = useState(null);
    const [options, setOptions] = useState({});
    const { processImage, loading, error } = useImage();

    const handleConvert = async () => {
        if (file) {
            try {
                await processImage('convert', file, options);
                // handle successful conversion (e.g., show a success message or redirect)
            } catch (err) {
                console.error('Conversion error:', err);
            }
        }
    };

    return (
        <div className="min-h-screen flex flex-col">
            <header className="bg-gray-800 text-white p-4">
                <h1 className="text-2xl">Convert Image</h1>
            </header>
            <main className="flex-grow container mx-auto px-4 py-8">
                <ImageUpload onFileUpload={setFile} />
                {file && (
                    <>
                        <ImageOptions onOptionsChange={setOptions} />
                        <button
                            onClick={handleConvert}
                            className={`btn ${loading ? 'btn-loading' : 'btn-primary'}`}
                        >
                            {loading ? 'Processing...' : 'Convert'}
                        </button>
                        {error && <p className="text-red-500">{error}</p>}
                        <ImagePreview file={file} />
                    </>
                )}
            </main>
        </div>
    );
};

export default ConvertPage;
