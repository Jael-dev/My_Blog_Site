const mongoose = require('mongoose')

const commentSchema = new mongoose.Schema({
    comment_text: {
        type: String,
        required: true,
    }
})

module.exports = commentSchema

// Path: server/Models/Comment.js