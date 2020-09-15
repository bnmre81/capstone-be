const express = require("express");

const app = express();

app.get("/", (req, res) => {
  console.log("HELLO");
});

app.listen(8000, () => {
  console.log("The application is running on localhost:8000");
});
