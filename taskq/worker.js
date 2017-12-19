var kue = require('kue');
var queue = kue.createQueue();

queue.process('email', function(job, done){
  email(job.data, done);
});

function email (data, done) {
  setTimeout(function () {
    console.log(data);
    // email send stuff...
    done();
  }, 5000);
}

kue.app.listen(3000);
