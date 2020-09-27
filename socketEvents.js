// const { io } = require("./app");
// const getUsers = (room) => {
//   io.in(room).clients((error, clients) => {
//     io.in(room).emit("getUsers", clients);
//   });
// };

// exports.events = (socket) => {
//   console.log(`User connected to ${socket.id}`);

//   // Join room
//   socket.on("join_room", ({ room, user }) => {
//     socket.join(room);
//     socket.user = user;
//     console.log(`${user} joined room ${room}`);
//   });

//   // fetch Rooms
//   socket.on("rooms", () => {
//     io.emit("message", rooms);
//   });

//   // Users in room
//   socket.on("getUsers", ({ room }) => {
//     getUsers(room);
//   });

//   // Start
//   socket.on("start", ({ room }) => {
//     io.in(room).emit("start", { room });
//   });
//   // Nominate
//   socket.on("nominate", ({ room, movie }) => {
//     io.in(room).emit("nominate", { movie });
//   });

//   // Vote
//   socket.on("vote", ({ room, movieId }) => {
//     io.in(room).emit("vote", { movieId });
//   });

//   // Close app to disconnect
//   socket.on("disconnect", () => {
//     console.log("User disconnected");
//   });
// };
