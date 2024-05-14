import { Router } from "express";
import { registerSchema } from "./authValidation.js";
import * as authController from "./authController.js";
import { validateBody } from "../middleware/bodyValidator.js";

const authRoute = Router();

authRoute.post(
  "/register",
  validateBody(registerSchema),
  authController.register,
);

authRoute.post("/login", authController.login);

export default authRoute;
