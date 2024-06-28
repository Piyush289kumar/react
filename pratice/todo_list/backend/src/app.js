// import express from "express";
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import {
  init,
  createTodo,
  toggleTaskActiveStatus,
  deleteTodo,
} from "./controllers/todosController.js";
import connectDB from "./db/index.js";

const app = express();
const port = 3000;

app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.get("/", init);
app.post("/create", createTodo);
app.post("/delete/:taskId", deleteTodo);
app.post("/checkTodo/:taskId", toggleTaskActiveStatus);

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
