import * as authService from "../service/auth.service.js";

const register = async (req, res) => {
  try {
    const { firstName, lastName, username, email, password, confirmPassword } =
      req.body; // what other infomation would be neccesary for collection in register process
    const newUser = await authService.register(
      firstName,
      lastName,
      username,
      email,
      password,
    );
  } catch (err) {
    console.log(err);
    res.status(err.statusCode || 500).json({ message: err.message });
  }
};
