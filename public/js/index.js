var socket = io();

socket.on('connect', function () {
  console.log('Connected to Server');

  socket.emit('createMessage', {
    from: 'Ravish',
    text: 'Hey. '
  });
});

socket.on('disconnect', function () {
  console.log('Disconnected from the Server');
});

socket.on('newMessage', function (message) {
  console.log('newMessage', message);
});
