const Joi = require('joi')

const schema = Joi.object({
    // id: Joi.string().max(50).required(),
    username: Joi.string().max(50).required(),
    // fullname: Joi.string().max(50).required(),
    // telno: Joi.string().max(13).required(),
    // email: Joi.string().email({minDomainSegments:2}).required(),
    pswd: Joi.string().min(8).required()
})
const registerSchema = Joi.object({
    username: Joi.string().max(50).required(),
    fullname: Joi.string().max(50).required(),
    telno: Joi.string().max(13).required(),
    email: Joi.string().email({minDomainSegments:2}).required(),
    pswd: Joi.string().min(8).required()
})
module.exports = {
    schema,
    registerSchema
}