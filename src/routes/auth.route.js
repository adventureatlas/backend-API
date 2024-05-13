import { Router } from "express";
import { registerSchema } from "../validation/auth.validation.js";
import * as authController from "../controller/auth.controller.js";
import { validateBody } from "../middleware/body.validator.js";

const authRoute = Router();

authRoute.post(
  "/register",
  validateBody(registerSchema),
  authController.register,
);

authRoute.post("/login", authController.login);

export default authRoute;
