import express from "express";
import passport from "passport";

const app = express();

app.use(passport.initialize());

export default app;
