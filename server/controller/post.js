const Post = require('../model/post')
const { postValidation } = require('../middleware/validate')

//create post

module.exports.postBlog = async(req, res) => { 
    const { title, author, description} = req.body
    try{
        //validate data
        const { details } = await postValidation(req.body)
        if(!details){
            const createPost = await Post.create({title, author, description})
            res.status(201).json({title, author, description})
            console.log(createPost)
        }

    }catch(err){
        res.status(401).json(err.message)
    }
}

//Get all post
module.exports.getAllPost = async (req, res) => {
    try{
        const posts = await Post.find().sort({date : 'desc'})
        res.status(201).json(posts)
    }catch(err){
        res.status(401).json(err.message)
    }
}

//Get specific post
module.exports.getPost = async (req, res) => {
    const params =  req.params.id
    try{
        const post = await Post.findById(params)
        res.status(200).json(post)
    }catch(err){
        console.log(`Error: ${err}`)
        res.status(400).json(err.message)
    }
}

//delete Post
module.exports.deletePost = async (req, res) => {
    try{
        const post = await Post.findByIdAndDelete(req.params.id)
        res.status(200).send({message:'Post deleted'})
    }catch(err){
        res.status(401).send({message: 'Post not found'})
    }
}

//update post
module.exports.updatePost = async (req, res) => {
    const { title, author, description} = req.body
  try{
    const { details } = await postValidation(req.body)
    if(!details){
        const postID = req.params.id
        let post = await Post.findById(postID)
        console.log(`${title}, ${author}, ${description}`)
        post.title = title
        post.description = description
        post.author = author
        
        post = await post.save()
        res.status(200).json(post)
    }
  }catch(err){
      res.status(400).json(err.message)
  }
}