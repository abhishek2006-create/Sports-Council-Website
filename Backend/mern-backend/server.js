import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import connectDB from './config/db.js';
import apiRoutes from './routes/apiRoutes.js';

// Load environment variables
dotenv.config();

// Connect to MongoDB
connectDB();

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Resolve paths for serving uploads/media
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Serve static assets / media files
app.use('/backend/media', express.static(path.join(__dirname, 'media')));
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Routes
app.use('/backend/api', apiRoutes);

// Root Hello World
app.get('/', (req, res) => {
  res.send('IIT Indore Sports Council MERN API is running.');
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong on the server!' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
