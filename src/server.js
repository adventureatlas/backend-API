import app from "./index.js";
import { connectToDatabase } from "./database/initialize.js";

const port = process.env.PORT;

connectToDatabase()
  .then(() => {
    console.log("database connected succesfully");
    app.listen(port, () => console.log(`express app started on port: ${port}`));
  })
  .catch((err) => {
    console.log("Error", err);
  });
