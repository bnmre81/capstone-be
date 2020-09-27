const express = require("express");
const app = express();
const http = require("http");
const path = require("path");
const socketIO = require("socket.io");

//Creating a server
let server = http.createServer(app);
let io = socketIO(server);

const getUsers = (room) => {
  io.in(room).clients((error, clients) => {
    io.in(room).emit("getUsers", clients);
  });
};

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

  // Users in room
  socket.on("getUsers", ({ room }) => {
    getUsers(room);
  });

  // Nominate
  socket.on("nominate", ({ room, movie }) => {
    io.in(room).emit("nominate", { movie });
  });

  // Vote
  socket.on("vote", ({ room, movieId }) => {
    io.in(room).emit("vote", { movieId });
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
