require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');

const app = express();
const mongoose = require('mongoose');


// Vos autres middlewares et routes...

// Connect to MongoDB

connectDB();

mongoose.connection.on('connected', () => {
  console.log(' MongoDB: Connecté avec succès à', mongoose.connection.host);
});

mongoose.connection.on('error', (err) => {
  console.error(' MongoDB: Erreur de connexion', err);
});

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/ads', require('./routes/adRoutes'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));