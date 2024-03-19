const express = require('express');
const router = express.Router();

// Import controllers
const PostController = require('../Services/Post');

// Define routes
router.get('/', PostController.getAllPosts);
router.post('/', PostController.createPost);
router.get('/:id', PostController.getPostById);
router.put('/:id', PostController.updatePost);
router.delete('/:id', PostController.deletePost);

module.exports = router;