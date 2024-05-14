import { DataTypes } from "sequelize";
import { sequelize } from "../initialize.js";
import encryptPassword from "../../helpers/encryptPassword.js";

const User = sequelize.define(
  "User",
  {
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    dateOfBirth: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    hooks: {
      beforeCreate: async (user) => {
        user.password = await encryptPassword(user.password);
      },
    },
  },
);

sequelize
  .sync({ force: true })
  .then(() => console.log("User table created"))
  .catch((err) => console.log("error syncing tables", err));
export default User;
