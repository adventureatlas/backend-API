import Joi from "joi";

export const registerSchema = Joi.object({
  firstName: Joi.string().not("").required(),
  lastName: Joi.string().not("").required(),
  email: Joi.string().email().required(),
  dateOfBirth: Joi.date().iso().required(),
  password: Joi.string()
    .min(8)
    .regex(/^(?=.*[A-Z])(?=.*[!@#$%^&*(),.?":{}|<>]).{8,}$/)
    .required()
    .messages({
      "string.empty": "Password is required",
      "string.min": "Password must be at least 8 characters long",
      "string.pattern.base":
        "Password must contain at least one uppercase letter and one symbol",
    }),
  confirmPassword: Joi.any()
    .equal(Joi.ref("password"))
    .required()
    .label("Confirm Password")
    .messages({
      "any.only": "Passwords do not match",
      "any.required": "Confirm password is required",
    }),
});
