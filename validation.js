const Joi = require('joi');

const registerValidator = (data) => {
    const schema = Joi.object({
        userName: Joi.string()
            .min(6)
            .required(),
        email: Joi.string()
            .pattern(new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/))
            .min(6)
            .required()
            .email(),
        password: Joi.string()
            .min(6)
            .required()
    });
    return schema.validate(data);
}

const loginValidator = (data) => {
    const schema = Joi.object({
        email: Joi.string()
            .min(6)
            .required()
            .email(),
        password: Joi.string()
            .min(6)
            .required()
    });
    return schema.validate(data);
}

module.exports = {registerValidator, loginValidator}