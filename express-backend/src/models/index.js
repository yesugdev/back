// This file defines the data models for the application using Mongoose.

const mongoose = require('mongoose');

// Example schema for an Item
const itemSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

// Export the model
const Item = mongoose.model('Item', itemSchema);

module.exports = {
    Item
};