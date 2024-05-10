const register = async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      username,
      phoneNumber,
      email,
      password,
      confirmPassword,
    } = req.body; // what other infomation would be neccesary for collection in register process
    if (password !== confirmPassword) {
      const newUser = await authService.register(
        firstName,
        lastName,
        username,
        phoneNumber,
        email,
        password,
      );
    }
  } catch (err) {
    console.log(err);
    res.status(err.statusCode || 500).json({ message: err.message });
  }
};
