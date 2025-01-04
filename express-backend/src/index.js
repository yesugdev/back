const express = require('express');
const cors = require('cors');
require('dotenv').config();
const connectDB = require('./config/database');
const patientRoutes = require('./routes/patient');

const app = express();
const port = process.env.PORT || 5000;

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors());
app.use(express.json());
app.use('/api', patientRoutes);

// Routes
app.get('/', (req, res) => {
  res.send('MedLiver Hospital API is running');
});

app.listen(5000, () => console.log('Server running on port 5000'));