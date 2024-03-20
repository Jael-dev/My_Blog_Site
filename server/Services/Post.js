const postSchema = require('../Models/Post')
const mongoose = require('mongoose')
const postModel = mongoose.model('posts', postSchema)

 async function getAllPosts (req, res) {
    // Logic to fetch all posts from the database
    let data = await postModel.find().populate('comments').exec()
    console.log("Fetching data")
    res.send(data)
  }
  
  async function   createPost(req, res) {
    // Logic to create a new post
    const postData = {
      entry: req.body.entry,
      categories: req.body.categories,
      comments: req.body.comments,
      price: req.body.price
  };
    const newPost = new postModel(postData)
    const data = await newPost.save()
    res.send(data) 
  }
  
  async function  getPostById(req, res) {
    // Logic to fetch a post by ID
    const id = req.params.id
    let data = await postModel.findById(id).populate('comments').exec()
    res.send(data)
  }
  
  async function   updatePost(req, res) {
    // Logic to update a post
    const id = req.params.id
    const postData = {
      entry: req.body.entry,
      categories: req.body.categories,
      comments: req.body.comments,
      price: req.body.price
  };
  console.log(postData)
    let data = await postModel.findByIdAndUpdate(id, {$set: postData}, {new:true})
    res.send(data);
}

async function sumPrice(req, res) {
  // Logic to sum the prices of the different posts
  let data = await postModel.aggregate([{$group: {_id: null, total: {$sum: "$price"}}}])
  console.log(data)
  res.send(data)
}

async function averagePrice(req, res) {
  // Logic to average the prices of the different posts
  let data = await postModel.aggregate([{$group: {_id: null, average: {$avg: "$price"}}}])
  res.send(data)
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
    deletePost,
    sumPrice,
    averagePrice
};