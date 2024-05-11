import Joi from "joi";

export const registerSchema = Joi.object({
  firstName: Joi.string().not("").required(),
  lastName: Joi.string().not("").required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(8).required(),
  confirmPassword: Joi.valid(Joi.ref("password")).required(),
});
