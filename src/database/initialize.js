import { Sequelize } from "sequelize";
// import dotenv from "dotenv";
import mysql from "mysql2";

// dotenv.config();

export async function connectToDatabase() {
  const password = process.env.DBPASSWORD;
  const user = process.env.DBUSER;
  const sequelize = new Sequelize("database", user, password, {
    dialect: "mysql",
    host: process.env.HOST,
    port: process.env.DBPORT,
    dialectModule: mysql,
  });
  return sequelize.authenticate();
}
