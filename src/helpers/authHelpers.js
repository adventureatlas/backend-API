import bcrypt from "bcrypt";
import jwt from "jwt";
import dotenv from "dotenv";
import RefreshToken from "../database/models/refreshToken.js";

dotenv.config();

const jwtsecret = process.env.JWTSECRET;

export const encryptPassword = async (password) => {
  const saltRounds = 10;
  return await bcrypt.hash(password, saltRounds);
};

export const generateTokens = async (user) => {
  const payload = { id: user.id };
  const accessToken = jwt.sign(payload, jwtsecret, { expiresIn: "15m" });
  const refreshToken = jwt.sign(payload, jwtsecret, { expiresIn: "7d" });
  const expiresAt = new Date();
  expiresAt.setDate(expiresAt.getDate() + 7);
  await RefreshToken.upsert({
    token: refreshToken,
    userId: user.id,
    expiresAt,
  });
  return accessToken;
};
