const express = require('express');
const router = express.Router();
const upload = require('../middleware/uploadMiddleware'); // Multer middleware for file uploads
const imageController = require('../controllers/imageController');
const authenticateToken = require("../middleware/authMiddleware");

// Image processing routes (accessible to all users)
router.post('/convert/:targetFormat', authenticateToken, upload.single('image'), imageController.convertImage);
router.post('/resize', authenticateToken, upload.single('image'), imageController.resizeImage);
router.post('/crop', upload.single('image'), imageController.cropImage);
router.post('/compress', upload.single('image'), imageController.compressImage);
router.post('/grayscale', upload.single('image'), imageController.convertToGrayscale);
router.post('/tint', upload.single('image'), imageController.tintImage);
router.post('/rotate', upload.single('image'), imageController.rotateImage);
router.post('/blur', upload.single('image'), imageController.blurImage);
router.post('/sharpen', upload.single('image'), imageController.sharpenImage);
router.post('/flip', upload.single('image'), imageController.flipImage);
router.post('/add-text', upload.single('image'), imageController.addTextToImage);

module.exports = router;
