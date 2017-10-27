var request = require('request');
var fs = require('fs');

function saveWebPage(url, filename, callback) {
  request.get(url, function(err, response, html) {
    if (err) {
      callback(err);
      return;
    }
    fs.writeFile(filename, html, function(err) {
      if (err) {
        callback(err);
        return;
      }
      callback(null);
    });
  });
}

function hello () {
  console.log('Hello World');
}


exports.saveWebPage = saveWebPage;
exports.hello = hello;

// module.exports = hello;
