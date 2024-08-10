import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

mongoose.connect(process.env.MONGO_DB)
    .then(() => {
        console.log('Successfully MongoDB Connected..');
    })
    .catch((error) => {
        console.error('Error connecting to MongoDB:', error);
    });

const app = express();
const PORT = 5000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});
