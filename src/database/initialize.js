import { Sequelize } from "sequelize";
import dotenv from "dotenv";
import mysql from "mysql2";

dotenv.config();

export async function connectToDatabase() {
  const password = process.env.DBPASSWORD;
  const user = process.env.DBUSER;
  const host = process.env.HOST;
  const port = process.env.DBPORT;
  const database = process.env.DATABASE;
  const uri = `mysql://${user}:${password}@${host}:${port}/${database}`;
  const sequelize = new Sequelize(uri);
  return sequelize.authenticate();
}
