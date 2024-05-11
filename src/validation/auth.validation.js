import Joi from "joi";

export const registerSchema = Joi.object({
  firstName: Joi.string().not("").required(),
  lastName: Joi.string().not("").required(),
  email: Joi.string().email().required(),
  dateOfBirth: Joi.date().iso().required(),
  password: Joi.string().min(8).required(), // add more validation?
  confirmPassword: Joi.valid(Joi.ref("password")).required(),
});
