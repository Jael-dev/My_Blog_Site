const postModel = mongoose.model('posts', postSchema)

export async function getAllPosts (req, res) {
    // Logic to fetch all posts from the database
    let data = await postModel.find()
    res.send(data)
  }
  
  export async function   createPost(req, res) {
    // Logic to create a new post
    const newPost = new postModel({
        entry: "Transport fee",
        categories: ["100", "200", "300"],
    }
    )
    const data = await newPost.save()
    res.send(data) 
  }
  
  export async function  getPostById(req, res) {
    // Logic to fetch a post by ID
    const id = req.params.id
    let data = await postModel.findById(id)
    res.send(data)
  }
  
  export async function   updatePost(req, res) {
    // Logic to update a post
    const id = req.params.id
    const updatedPost = new postModel({
        entry: "Updated Transport fee",
        categories: ["100", "200", "300"],
    }
    )
    let data = await postModel.findByIdAndUpdate(id, {$set: updatedPost}, {new:true})
    res.send(data);
}
  
  export async function   deletePost(req, res) {
    // Logic to delete a post
    const id = req.params.id
    let data = await postModel.findByIdAndDelete(id)
    res.send(data)
  }