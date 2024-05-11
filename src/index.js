import express from "express";
// import passport from "./middleware/passport.js";
import authRoute from "./routes/auth.route.js";

const app = express();

app.use(express.json());
// app.use(passport.initialize());

app.use("/", authRoute);
export default app;
