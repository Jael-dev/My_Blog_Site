const mongoose = require('mongoose')

const postSchema = new mongoose.Schema({
    entry: {
        type: String,
        required: true,
    },
    categories: {
        type: [String],
        required: true,
    }
})

module.exports = postSchema

// Path: server/Models/Post.js