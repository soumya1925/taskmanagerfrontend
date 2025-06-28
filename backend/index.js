const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/database');
const cors = require('cors');

const allowedOrigins = [
    'https://frontend-p219eefna-soumya-rouls-projects.vercel.app/',
];

const taskRoutes = require('./routes/task.routes');
dotenv.config();

const app = express();
const PORT = 8082;

// Connect to MongoDB
connectDB();

// CORS setup
app.use(cors({
    origin: function (origin, callback) {
        if (!origin || allowedOrigins.includes(origin)) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
    credentials: true
}));

// Middleware to parse JSON
app.use(express.json());

// Routes
app.use('/tasks', taskRoutes);

// Simple test route
app.get('/', (req, res) => {
    res.send('Task Manager API is running');
});

// Start the server
app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
});

