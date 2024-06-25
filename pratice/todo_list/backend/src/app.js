// import express from "express";
import express from "express";
import cors from "cors";
import init from "./controllers/todosController.js";

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());

app.get("/", init);

app.listen(port, (error) => {
  if (!error) {
    console.log(
      "Server is Successfully Running, and App is listening on port " + port
    );
  } else console.log("Error occurred, server can't start", error);
});
