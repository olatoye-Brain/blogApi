const express = require('express')
const postController =  require('./controller/post')
const router =  express.Router()

router.post('/posts', postController.postBlog)
router.get('/delete/:id', postController.deletePost)
router.get('/', postController.getAllPost)
router.get('/blogs/:id', postController.getPost)
router.post('/edit/:id', postController.updatePost)



module.exports = router

