import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import { init, formController } from "./controllers/index.js";
const app = express();
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const PORT = 3000;

let process_env_MONGODB_URI =
  "mongodb+srv://piyushraikwar289:piyush289@cluster0.5lpcsrr.mongodb.net";

try {
  const connectionInstance = await mongoose.connect(
    `${process_env_MONGODB_URI}/todo_list`
  );
  console.log(
    `MongoDB Connected.. | DB Host: ${connectionInstance.connection.host}`
  );

  app.get("/", init);
  app.post("/form", formController);

  app.listen(PORT, () => {
    console.log(`Server is Running on PORT: ${PORT}`);
  });
} catch (error) {
  console.log(`MongoDB Connection Error:` + error);
  process.exit(1);
}
