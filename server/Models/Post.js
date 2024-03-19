const mongoose = require('mongoose')

const postSchema = new mongoose.Schema({
    entry: {
        type: String,
        required: true,
    },
    categories: {
        type: [String],
        required: true,
    },
    comments: [{
        type: mongoose.Schema.Types.ObjectId,       
        ref: 'commentSchema', // Reference to the Comment model     
        required: false, 
        }],
})

module.exports = postSchema

// Path: server/Models/Post.js