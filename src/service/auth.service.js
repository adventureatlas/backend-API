import User from "../database/model/user.js";
import newError from "../exception/error.js";
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
  if (!user) {
    const newUser = User.build({
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
