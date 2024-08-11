import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoute from './routes/user.route.js';
import authRoute from './routes/auth.route.js';

dotenv.config();

mongoose.connect(process.env.MONGO_DB)
    .then(() => {
        console.log('Successfully MongoDB Connected..');
    })
    .catch((error) => {
        console.error('Error connecting to MongoDB:', error);
    });

const app = express();
app.use(express.json());

const PORT = 5000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});

app.use('/api/user', userRoute)
app.use('/api/auth', authRoute)

app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';
    res.status(statusCode).json({
        success: false,
        statusCode,
        message
    });
});