require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');
const imageRoutes = require('./routes/imageRoutes');
const historyRoutes = require('./routes/historyRoutes');

// Initialize the Express application
const app = express();

// Middleware for parsing JSON and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// CORS Middleware (optional, if needed for cross-origin requests)
app.use(cors());

// Connect to MongoDB
const connectDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://sumit07:Sumit6200584775@cluster0.pve845i.mongodb.net/', {
            serverSelectionTimeoutMS: 5000, // Adjust timeout as needed
        });
        console.log('MongoDB connected successfully.');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error.message);
        console.error('Stack Trace:', error.stack);
        process.exit(1);
    }
};

connectDB();

// Route handlers
app.use('/auth', authRoutes);
app.use('/images', imageRoutes);
app.use('/user', historyRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
    console.error('Unexpected error:', err.message);
    res.status(500).json({ message: 'Internal Server Error', error: err.message });
});

// Start the server
app.listen(5000, () => {
    console.log('Server is running on port 5000');
});
