const path = require('path');
const express = require('express');
const http = require('http');
const socketIO = require('socket.io');

const pubclicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;
var app = express();
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(pubclicPath));

io.on('connection', (socket) => {
  console.log('New User Connected');

  socket.emit('newMessage', {
    from: 'Deepu',
    text: 'Well, See you then',
    createdAt: 123123
  });

  socket.on('createMessage', (message) => {
    console.log('createMessage', message);
  });

  socket.on('disconnect', () => {
    console.log('User was disconnected');
  });
});

server.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});
