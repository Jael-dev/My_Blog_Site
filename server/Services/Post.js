const postSchema = require('../Models/Post')
const mongoose = require('mongoose')
const postModel = mongoose.model('posts', postSchema)

 async function getAllPosts (req, res) {
    // Logic to fetch all posts from the database
    let data = await postModel.find()
    console.log(data)
    res.send(data)
  }
  
  async function   createPost(req, res) {
    // Logic to create a new post
    const postData = {
      entry: req.body.entry,
      categories: req.body.categories,
      comments: req.body.comments
  };
    const newPost = new postModel(postData)
    const data = await newPost.save()
    res.send(data) 
  }
  
  async function  getPostById(req, res) {
    // Logic to fetch a post by ID
    const id = req.params.id
    let data = await postModel.findById(id)
    res.send(data)
  }
  
  async function   updatePost(req, res) {
    // Logic to update a post
    const id = req.params.id
    const postData = {
      entry: req.body.entry,
      categories: req.body.categories,
      comments: req.body.comments
  };
  console.log(postData)
    let data = await postModel.findByIdAndUpdate(id, {$set: postData}, {new:true})
    res.send(data);
}
  
async function   deletePost(req, res) {
    // Logic to delete a post
    const id = req.params.id
    let data = await postModel.findByIdAndDelete(id)
    res.send(data)
  }

  module.exports = {
    getAllPosts,
    createPost,
    getPostById,
    updatePost,
    deletePost
};