var express = require('express');
var app = express();

var ROOMS = {};

var http = require('http').Server(app);
var io = require('socket.io')(http);

app.set('view engine', 'hbs');

app.use('/socket-io',
  express.static('node_modules/socket.io-client/dist'));

app.get('/', function (request, response) {
  response.render('chat.hbs');
});

io.on('connection', function(client){
  console.log('CONNECTED');
  
  // client.on('incoming', function (msg) {
  //   io.emit('chat-msg', msg);
  // });
  
  client.on('join-room', function(room){
    client.join(room, function() {
      console.log(client.rooms);
      io.to(room).emit('chat-msg', '**new user joined**');
      console.log(client.id);
      
      if (ROOMS[room]) {
        ROOMS[room].push(client.id);
      } else {
        ROOMS[room] = [client.id];
      }
      console.log(ROOMS);
      ROOMS[room].forEach(function (id) {
        if (id != client.id) {
          io.to(id).emit('chat-msg', '**an idiot joined**');
        }
      });
      //io.to(client.id).emit('chat-msg', '**thanks for joining**');
    });
    client.on('incoming', function(msg){
      io.to(msg.room).emit('chat-msg', msg.msg);
    });
  });
  
  client.on('disconnect', function () {
    console.log('EXITED');
  });
});

http.listen(8000, function () {
  console.log('Listening on port 8000');
});
