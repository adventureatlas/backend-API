import * as authService from "./authService.js";

export const register = async (req, res) => {
  try {
    const { firstName, lastName, email, dateOfBirth, password } = req.body; // what other infomation would be neccesary for collection in register process
    const data = await authService.register(
      firstName,
      lastName,
      dateOfBirth,
      email,
      password,
    );
    res.status(201).json({ message: "user created sucessfully", data });
  } catch (err) {
    console.log(err);
    res.status(err.statusCode || 500).json({ message: err.message });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const data = await authService.login(email, password);
    res.status(200).json({ message: "login successful", data });
  } catch (err) {
    res.status(err.statusCode || 500).json({ message: err.message });
  }
};
