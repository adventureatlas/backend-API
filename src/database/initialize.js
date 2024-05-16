import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config();

const password = process.env.DBPASSWORD;
const user = process.env.DBUSER;
const host = process.env.HOST;
const port = process.env.DBPORT;
const database = process.env.DATABASE;
const uri = `mysql://${user}:${password}@${host}:${port}/${database}`;
export const sequelize = new Sequelize(uri);

export const connectToDatabase = async () => {
  try {
    sequelize.authenticate();
    console.log("databse connected successfully");
    await sequelize.sync({ force: true });
    console.log("All models synced succesfully");
  } catch (err) {
    console.log("Error", err);
    throw err;
  }
};
