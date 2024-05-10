import express from "express";
import passport from "./middleware/passport.js";

const app = express();

app.use(express.json());
app.use(passport.initialize());

export default app;
