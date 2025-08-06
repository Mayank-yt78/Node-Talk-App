
import {app,server} from './Socket/socket.js';
import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import { connectDB } from './db/connection1.db.js';
import cookieParser from 'cookie-parser';
import cors from 'cors';
 // Import socket setup

connectDB();


app.use(cors({
    origin: process.env.CLIENT_URL, // Allow requests from the client URL
    credentials: true, // Allow cookies to be sent
}))
app.use(express.json());
app.use(cookieParser()); 

const PORT = process.env.PORT || 5000

// Routes
import userRoutes from './routes/user.route.js';
import messageRoutes from './routes/message.route.js';
app.use('/api/v1/user', userRoutes);
app.use('/api/v1/message', messageRoutes);

// Middlewares
import { errorMiddleware } from './middlewares/error.middleware.js';
app.use(errorMiddleware);

app.get('/', (req, res) => {
    const activeStatus = true;
    const error = false;
    res.json({ activeStatus, error });
});


server.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});