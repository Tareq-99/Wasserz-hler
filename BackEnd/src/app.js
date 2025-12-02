import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import watermeterRoutes from './routes/watermeterRoutes.js';

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/watermeter', watermeterRoutes);

// Fehler-Handler (für saubere IHK-Punkte)
app.use((err, req, res, next) => {
    console.error("❌ Fehler:", err);
    res.status(500).json({ error: "Interner Serverfehler" });
});

export default app;
