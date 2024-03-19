const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config();


// Connection to the database function
async function connectToDatabase() {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log('Connected to database successfully');
    } catch (err) {
        console.error('Error connecting to database:', err);
        process.exit(1);
    }
}
 
connectToDatabase()