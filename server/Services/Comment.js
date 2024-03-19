const commentSchema = require('../Models/Comment')
const mongoose = require('mongoose')
const commentModel = mongoose.model('comments', commentSchema)

 async function getAllComments (req, res) {
    // Logic to fetch all comments from the database
    let data = await commentModel.find()
    console.log(data)
    res.send(data)
  }
  
  async function   createComment(req, res) {
    // Logic to create a new comment
    const commentData = {
      comment_text: req.body.comment_text
  };
    const newComment = new commentModel(commentData)
    const data = await newComment.save()
    res.send(data) 
  }
  
  async function  getCommentById(req, res) {
    // Logic to fetch a comment by ID
    const id = req.params.id
    let data = await commentModel.findById(id)
    res.send(data)
  }
  
  async function   updateComment(req, res) {
    // Logic to update a comment
    const id = req.params.id
    const commentData = {
      comment_text: req.body.comment_text
  };
    let data = await commentModel.findByIdAndUpdate(id, {$set: commentData}, {new:true})
    res.send(data);
}
  
async function   deleteComment(req, res) {
    // Logic to delete a comment
    const id = req.params.id
    let data = await commentModel.findByIdAndDelete(id)
    res.send(data)
  }

  module.exports = {
    getAllComments,
    createComment,
    getCommentById,
    updateComment,
    deleteComment
};