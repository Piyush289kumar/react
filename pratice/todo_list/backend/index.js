// import express from "express";
const express = require("express");
const app = express();
const port = 3000;

// app.get("/", (req, res) => {
//   res.send("Server Is Running");
// });

app.listen(port, (error) => {
  if (!error) {
    console.log(
      "Server is Successfully Running, and App is listening on port " + port
    );
  } else console.log("Error occurred, server can't start", error);
});
