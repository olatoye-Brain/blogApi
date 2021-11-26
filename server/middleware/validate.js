const Joi = require('joi')


const postValidation = data => { 

    const schema = Joi.object({
        title: Joi.string().min(3).required(),
        author: Joi.string().min(3).required(),
        description: Joi.string().min(3).required()
    })
    return schema.validateAsync(data) 
}


module.exports = { postValidation }