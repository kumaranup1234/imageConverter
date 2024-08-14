const sharp = require('sharp');
const cloudinary = require('../config/cloudinary');
const { saveHistory } = require('./historyController');
const allowedFormats = require('../utils/allowedFormats'); // Assuming this is where allowedFormats are defined

// Convert image format
exports.convertImage = async (req, res) => {
    try {
        const { targetFormat } = req.params;
        const { buffer, mimetype } = req.file;
        const originalFormat = mimetype.split('/')[1];

        if (!allowedFormats.convert[targetFormat] || !allowedFormats.convert[targetFormat].includes(originalFormat)) {
            return res.status(400).send('Invalid file format.');
        }

        const convertedImage = await sharp(buffer).toFormat(targetFormat).toBuffer();

        if (req.user) {
            // Upload to Cloudinary and handle the result
            cloudinary.uploader.upload_stream({ resource_type: 'image' }, async (error, result) => {
                if (error) {
                    console.log(error);
                    return res.status(400).send('Error uploading image to Cloudinary.');
                }

                const imageUrl = result.secure_url;
                await saveHistory(req.user._id, 'convert', originalFormat, targetFormat, imageUrl);

                // Send the converted image response
                res.set('Content-Type', `image/${targetFormat}`);
                res.send(convertedImage);
            }).end(convertedImage);
        } else {
            // Send the converted image response without saving history
            res.set('Content-Type', `image/${targetFormat}`);
            res.send(convertedImage);
        }
    } catch (error) {
        res.status(500).send('Error converting image.');
    }
};

// Resize image
exports.resizeImage = async (req, res) => {
    try {
        const { width, height } = req.body;
        const { buffer, mimetype } = req.file;
        const format = mimetype.split('/')[1];

        if (!allowedFormats.resize.includes(format)) {
            return res.status(400).send('Invalid file format.');
        }

        const resizedImage = await sharp(buffer).resize(parseInt(width), parseInt(height)).toBuffer();

        if (req.user) {
            await saveHistory(req.user._id, 'resize', format);
        }

        res.set('Content-Type', `image/${format}`);
        res.send(resizedImage);
    } catch (error) {
        res.status(500).send('Error resizing image.');
    }
};

// Crop image
exports.cropImage = async (req, res) => {
    try {
        const { width, height, left, top } = req.body;
        const { buffer, mimetype } = req.file;
        const format = mimetype.split('/')[1];

        if (!allowedFormats.crop.includes(format)) {
            return res.status(400).send('Invalid file format.');
        }

        const croppedImage = await sharp(buffer).extract({ width: parseInt(width), height: parseInt(height), left: parseInt(left), top: parseInt(top) }).toBuffer();

        if (req.user) {
            await saveHistory(req.user._id, 'crop', format);
        }

        res.set('Content-Type', `image/${format}`);
        res.send(croppedImage);
    } catch (error) {
        res.status(500).send('Error cropping image.');
    }
};

// Compress image
exports.compressImage = async (req, res) => {
    try {
        const { quality } = req.body;
        const { buffer, mimetype } = req.file;
        const format = mimetype.split('/')[1];

        if (!allowedFormats.compress.includes(format)) {
            return res.status(400).send('Invalid file format.');
        }

        const compressedImage = await sharp(buffer).jpeg({ quality: parseInt(quality) }).toBuffer();

        if (req.user) {
            await saveHistory(req.user._id, 'compress', format);
        }

        res.set('Content-Type', 'image/jpeg');
        res.send(compressedImage);
    } catch (error) {
        res.status(500).send('Error compressing image.');
    }
};

// Convert to grayscale
exports.convertToGrayscale = async (req, res) => {
    try {
        const { buffer, mimetype } = req.file;
        const format = mimetype.split('/')[1];

        if (!allowedFormats.grayscale.includes(format)) {
            return res.status(400).send('Invalid file format.');
        }

        const grayscaleImage = await sharp(buffer).grayscale().toBuffer();

        if (req.user) {
            await saveHistory(req.user._id, 'grayscale', format);
        }

        res.set('Content-Type', `image/${format}`);
        res.send(grayscaleImage);
    } catch (error) {
        res.status(500).send('Error converting image to grayscale.');
    }
};

// Tint image
exports.tintImage = async (req, res) => {
    try {
        const { tintColor } = req.body;
        const { buffer, mimetype } = req.file;
        const format = mimetype.split('/')[1];

        if (!allowedFormats.tint.includes(format)) {
            return res.status(400).send('Invalid file format.');
        }

        const tintedImage = await sharp(buffer).tint(tintColor).toBuffer();

        if (req.user) {
            await saveHistory(req.user._id, 'tint', format);
        }

        res.set('Content-Type', `image/${format}`);
        res.send(tintedImage);
    } catch (error) {
        res.status(500).send('Error tinting image.');
    }
};

// Rotate image
exports.rotateImage = async (req, res) => {
    try {
        const { angle } = req.body;
        const { buffer, mimetype } = req.file;
        const format = mimetype.split('/')[1];

        if (!allowedFormats.rotate.includes(format)) {
            return res.status(400).send('Invalid file format.');
        }

        const rotatedImage = await sharp(buffer).rotate(parseInt(angle)).toBuffer();

        if (req.user) {
            await saveHistory(req.user._id, 'rotate', format);
        }

        res.set('Content-Type', `image/${format}`);
        res.send(rotatedImage);
    } catch (error) {
        res.status(500).send('Error rotating image.');
    }
};

// Blur image
exports.blurImage = async (req, res) => {
    try {
        const { blurAmount } = req.body;
        const { buffer, mimetype } = req.file;
        const format = mimetype.split('/')[1];

        if (!allowedFormats.blur.includes(format)) {
            return res.status(400).send('Invalid file format.');
        }

        const blurredImage = await sharp(buffer).blur(parseFloat(blurAmount)).toBuffer();

        if (req.user) {
            await saveHistory(req.user._id, 'blur', format);
        }

        res.set('Content-Type', `image/${format}`);
        res.send(blurredImage);
    } catch (error) {
        res.status(500).send('Error blurring image.');
    }
};

// Sharpen image
exports.sharpenImage = async (req, res) => {
    try {
        const { sharpenAmount } = req.body;
        const { buffer, mimetype } = req.file;
        const format = mimetype.split('/')[1];

        if (!allowedFormats.sharpen.includes(format)) {
            return res.status(400).send('Invalid file format.');
        }

        const sharpenedImage = await sharp(buffer).sharpen(parseFloat(sharpenAmount)).toBuffer();

        if (req.user) {
            await saveHistory(req.user._id, 'sharpen', format);
        }

        res.set('Content-Type', `image/${format}`);
        res.send(sharpenedImage);
    } catch (error) {
        res.status(500).send('Error sharpening image.');
    }
};

// Flip image
exports.flipImage = async (req, res) => {
    try {
        const { direction } = req.body; // 'horizontal' or 'vertical'
        const { buffer, mimetype } = req.file;
        const format = mimetype.split('/')[1];

        if (!allowedFormats.flip.includes(format)) {
            return res.status(400).send('Invalid file format.');
        }

        let flippedImage;
        const image = sharp(buffer);

        if (direction === 'horizontal') {
            flippedImage = await image.flop().toBuffer();
        } else if (direction === 'vertical') {
            flippedImage = await image.flip().toBuffer();
        } else {
            return res.status(400).send('Invalid direction. Use "horizontal" or "vertical".');
        }

        if (req.user) {
            await saveHistory(req.user._id, 'flip', format);
        }

        res.set('Content-Type', `image/${format}`);
        res.send(flippedImage);
    } catch (error) {
        res.status(500).send('Error flipping image.');
    }
};

// Add text to image
exports.addTextToImage = async (req, res) => {
    try {
        const { text, x, y, color } = req.body;
        const { buffer, mimetype } = req.file;
        const format = mimetype.split('/')[1];

        if (!allowedFormats.addText.includes(format)) {
            return res.status(400).send('Invalid file format.');
        }

        const svgText = `
            <svg width="100%" height="100%">
                <text x="${x}" y="${y}" font-size="30" fill="${color}">${text}</text>
            </svg>
        `;

        const addedTextImage = await sharp(buffer)
            .composite([{ input: Buffer.from(svgText), gravity: 'center' }])
            .toBuffer();

        if (req.user) {
            await saveHistory(req.user._id, 'add-text', format);
        }

        res.set('Content-Type', `image/${format}`);
        res.send(addedTextImage);
    } catch (error) {
        res.status(500).send('Error adding text to image.');
    }
};
