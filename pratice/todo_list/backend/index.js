// import express from "express";
const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());
app.get("/", (req, res) => {
  res.json({ msg: "Sever is Live" });
});

app.listen(port, (error) => {
  if (!error) {
    console.log(
      "Server is Successfully Running, and App is listening on port " + port
    );
  } else console.log("Error occurred, server can't start", error);
});
