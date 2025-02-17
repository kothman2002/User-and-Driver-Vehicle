const Joi = require("joi");

exports.validateSignup = (req, res, next) => {
    const schema = Joi.object({
        firstName: Joi.string().required(),
        lastName: Joi.string().required(),
        phoneNumber: Joi.string().pattern(/^[0-9]{10}$/).required(),
        role: Joi.string().valid("admin", "driver", "manager").required()
    });

    const { error } = schema.validate(req.body);
    if (error) return res.status(400).json({ message: error.details[0].message });

    next();
};