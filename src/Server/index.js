const app = require("express")();
const http = require("http").Server(app);
const io = require("socket.io")(http);

const port = 7000;

io.on("connection", function(socket) {
  console.log("a user connected");

  socket.on("create", function(room) {
    socket.join(room);
  });

  socket.on("add_song", song => {
    io.emit("add_song", song);
  });

  socket.on("disconnect", function() {
    console.log("user disconnected");
  });
});

http.listen(port, function() {
  console.log(`listening on *:${port}`);
});
