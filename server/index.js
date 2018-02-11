const io = require('socket.io')();
const dateFormat = require('dateformat');

io.on('connection', client => {
  client.on('subscribeToTimer', interval => {
    console.log('client is subscribing to timer with interval ', interval);
    setInterval(() => {
      client.emit('timer', dateFormat(new Date(), 'hh:MM:ss dd-mm-yyyy'));
    }, interval);
  });
});

const port = 8000;
io.listen(port);
console.log('listening on port ', port);
