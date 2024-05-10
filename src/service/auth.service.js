import User from "../database/model/user.js";
import newError from "../exception/error.js";
export const register = async (
  firstName,
  lastName,
  username,
  phoneNumber,
  email,
  password,
) => {
  const user = User.findOne({ email });
  if (user) {
    throw newError("user already exists", 400);
  }
  if (!user) {
    User.create({
      firstName,
      lastName,
      username,
      phoneNumber,
      email,
      password,
    });
  }
};
