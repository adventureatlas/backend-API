import bcrypt from "bcrypt";

const encryptPassword = async (password) => {
  const saltRounds = 10;
  return await bcrypt.hash(password, saltRounds);
};

export default encryptPassword;
