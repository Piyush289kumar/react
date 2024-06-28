// import express from "express";
import express from "express";
import cors from "cors";
import { init, createTodo } from "./controllers/todosController.js";
import connectDB from "./db/index.js";

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());

app.get("/", init);
app.post("/create", createTodo);

connectDB()
  .then(() => {
    app.listen(port, (error) => {
      if (!error) {
        console.log(
          "Server is Successfully Running, and App is listening on port " + port
        );
      } else console.log("Error occurred, server can't start", error);
    });
  })
  .catch((error) => {
    console.log("MongoDB Connection failed !!!", error);
  });
