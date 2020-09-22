const { notDeepStrictEqual } = require("assert");
const express = require("express");
const app = express();
const http = require("http");
const path = require("path");
const socketIO = require("socket.io");

//Creating a server
let server = http.createServer(app);
let io = socketIO(server);

// Rooms

// Connecting to app
io.on("connection", (socket) => {
  console.log(`User connected to ${socket.id}`);

  // Join room
  socket.on("join_room", ({ room, user }) => {
    socket.join(room);
    socket.user = user;
    console.log(`${user} Joined room : ${room}`);
  });

  // fetch Rooms
  socket.on("rooms", () => {
    io.emit("message", rooms);
  });

  // Nominate
  socket.on("message", ({ room, movie }) => {
    io.in(room).emit("message", { movie });
  });

  // Close app to disconnect
  socket.on("disconnect", () => {
    console.log("User disconnected");
  });
});

const port = process.env.PORT || 8000;

server.listen(port, () => {
  console.log(`The application is running on ${port}`);
});
