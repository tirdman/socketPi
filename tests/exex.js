var exec = require('child_process').exec;

dir = exec("dir", function(err, stdout, stderr) {
  if (err) {
    // should have err.code here?
  }
  console.log(stdout);
});