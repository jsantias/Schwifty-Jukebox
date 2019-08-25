const app = require("express")();
const http = require("http").Server(app);
const io = require("socket.io")(http);

const port = 7000;

io.on("connection", function(socket) {
  console.log("a user connected");

  socket.on("create_room", room => {
    console.log("Create Room ", room);
    socket.join(room.name);
  });

  socket.on("join_room", room => {
    console.log("Joined Room ", room);
    socket.join(room.name);
  });

  socket.on("add_song", song => {
    socket.broadcast.emit("add_song", song);
  });

  socket.on("disconnect", function() {
    console.log("user disconnected");
  });
});

http.listen(port, function() {
  console.log(`listening on *:${port}`);
});
