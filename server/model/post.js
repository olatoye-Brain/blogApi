const mongoose = require('mongoose')
const postSchema = new mongoose.Schema({
    title:{
        type: 'string',
        required: true
    },
    author:{
        type: 'string',
        required: true
    },
    description:{
        type: 'string',
        required: true
    },
    date:{
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('post', postSchema)