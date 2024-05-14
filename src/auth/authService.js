import User from "../database/models/user.js";
import newError from "../exceptions/error.js";
import bcrypt from "bcrypt";

export const register = async (
  firstName,
  lastName,
  dateOfBirth,
  email,
  password,
) => {
  const user = await User.findOne({ where: { email } });
  console.log("user", user);
  if (user) {
    throw newError("user already exists", 400);
  }
  const newUser = User.build({
    firstName,
    lastName,
    dateOfBirth,
    email,
    password,
  });
  await newUser.save();
  const newUserObject = newUser.toJSON();
  delete newUserObject.password;
  return newUserObject;
};

export const login = async (email, password) => {
  const user = await User.findOne({ where: { email } });
  console.log("user", user);
  if (!user) {
    throw newError("invalid email or password", 401);
  }
  const match = await bcrypt.compare(password, user.dataValues.password);
  if (match) {
    // implement passport-jwt and refresh token here
    throw newError("login succesful", "200"); // to be changed
  }
  throw newError("invalid email or password", 401);
};
