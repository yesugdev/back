const express = require('express');
const router = express.Router();
const patientRoutes = require('./patient');
const profileRoutes = require('./profile');
const { getAllItems, createItem } = require('../controllers/index');

// Define routes
router.get('/items', getAllItems);
router.post('/items', createItem);

router.use('/api', patientRoutes);
router.use('/api', profileRoutes);

module.exports = router;