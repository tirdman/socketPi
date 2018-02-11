const io = require('socket.io')();
const dateFormat = require('dateformat');
var exec = require('child_process').exec;

io.on('connection', client => {
  client.on('subscribeToTimer', interval => {
    console.log('client is subscribing to timer with interval ', interval);
    setInterval(() => {
      let answer = {};
      answer.time = dateFormat(new Date(), 'hh:MM:ss dd-mm-yyyy');
      client.emit('timer', answer);
    }, interval);
  });

  client.on('subscribeToDf', () => {
    console.log('client is subscribing to df ');

    let answer = {};
    dir = exec("df -h", function(err, stdout, stderr) {
      console.log("Df is: " + stdout);
      answer.df = stdout;
      client.emit('df', answer);
    });

  });


  client.on('subscribeToWhiteIP', () => {
    console.log('client is subscribing to df whiteip');

    let answer = {};
    dir = exec("curl ipinfo.io/ip", function(err, stdout, stderr) {
      console.log("White ip is: " + stdout);
      answer.remoteIP = stdout;
      client.emit('remoteIP', answer);
    });

  });


});

const port = 5000;
io.listen(port);
console.log('listening on port ', port);
