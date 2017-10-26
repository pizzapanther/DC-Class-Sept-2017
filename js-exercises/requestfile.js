var request = require('request');

var url = 'https://nodejs.org/en/';

request.get(url, function (error, response, html) {
  if (error) {
    console.error(error.message);
    return;
  }
  console.log(html);
  console.log('NARF 2');
});

console.log('NARF');
