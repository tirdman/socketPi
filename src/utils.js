import openSocket from 'socket.io-client';
const  socket = openSocket('http://tirdman.xyz:5000');

function subscribeToTimer(cb) {
  socket.on('connect_error', function (data) {
    cb(data);
  });
  socket.on('timer', data => cb(null, data));
  socket.emit('subscribeToTimer', 1000);

}

function subscribeToDf(cb) {
  socket.on('connect_error', function (data) {
    cb(data);
  });
  socket.on('df', data => cb(null, data));
  socket.emit('subscribeToDf');

}

export { subscribeToTimer, subscribeToDf };