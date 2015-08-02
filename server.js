var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

// Start the server
var port = process.env.PORT || 8000;
server.listen(port, function() {
  console.log("Running on port ", port);
});

app.use(express.static("./"));
app.get('/', function(req, res) {
  res.sendfile(__dirname + 'index.html')
});

io.on("connection", function(socket) {
  console.log("A user connected");

  socket.on("disconnect", function(){
    console.log("A user disconnected");
  });

  socket.on("newPlayer", function(player) {
    // console.log(player.x)
    // console.log(player.y)
  })

  socket.on("playerPosition", function(player) {
    // console.log(player.x)
    // console.log(player.y)
  })
})
