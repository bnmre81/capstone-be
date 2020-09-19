const express = require("express");
const app = express();
const http = require("http");
const path = require("path");
const socketIO = require("socket.io");

//Creating a server
let server = http.createServer(app);
let io = socketIO(server);

io.on("connection", (socket) => {
  console.log("A new user just connected");

  socket.on("disconnect", () => {
    console.log("User disconnected");
  });
});

const port = process.env.PORT || 8000;

server.listen(port, () => {
  console.log(`The application is running on ${port}`);
});
