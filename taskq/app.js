var kue = require('kue');
var queue = kue.createQueue();
var express = require('express');
var app = express();

app.get('/', function (request, response) {
  var job = queue.create('email', {
    title: 'welcome to DigitalCrafts',
    to: request.query.email,
    template: 'welcome-email'
  })
    .save(function (error) {
      if(error) {
        response.send('Job Failed');
      } else {
        response.send('E-Mail Sent: ' + job.id);
      }
    });
});

app.get('/status/:id', function (req, res) {
  kue.Job.get(req.params.id, function( err, job ) {
    if (err) {
      res.send(err);
    } else {
      res.send('Status: ' + JSON.stringify(job));
    }
  });
});

app.listen(8000, function () {
  console.log('Listening on port 8000');
});
