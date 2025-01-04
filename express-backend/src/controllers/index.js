// src/controllers/index.js

// Example controller functions
const getAllItems = (req, res) => {
    // Logic to get all items
    res.send('Get all items');
};

const createItem = (req, res) => {
    // Logic to create a new item
    res.send('Create a new item');
};

// Exporting the controller functions
module.exports = {
    getAllItems,
    createItem,
};