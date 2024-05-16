import { DataTypes } from "sequelize";
import { sequelize } from "../initialize.js";
import User from "./user.js";

const RefreshToken = sequelize.define("RefreshToken", {
  token: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: User,
      key: id,
    },
  },
  expiresAt: {
    type: DataTypes.DATE,
    allowNull: false,
  },
});

RefreshToken.belongsTo(User, { foreignKey: "userId" });
User.hasOne(RefreshToken, { foreignKey: "userId" });

export default RefreshToken;
