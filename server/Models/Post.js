const mongoose = require('mongoose')
const commentSchema = require('./Comment')
const Comment = mongoose.model('Comment', commentSchema);
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
        ref: 'Comment', // Reference to the Comment model     
        required: false, 
        }],
})

module.exports = postSchema

// Path: server/Models/Post.js