import User from "../database/model/user.js";
import newError from "../exception/error.js";
export const register = async (
  firstName,
  lastName,
  dateOfBirth,
  email,
  password,
) => {
  const user = User.findOne({ where: { email } });
  if (user) {
    throw newError("user already exists", 400);
  }
  if (!user) {
    const newUser = await User.create({
      firstName,
      lastName,
      dateOfBirth,
      email,
      password,
    });
    await newUser.save();
    delete newUser.password;
    return newUser;
  }
};
