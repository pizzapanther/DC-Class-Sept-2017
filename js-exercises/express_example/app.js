var express = require('express');
var app = express();

app.set('view engine', 'hbs');
app.use('/static', express.static('public'));

app.get("/", function (request, response) {
  response.send('<html>');
});

app.get("/about", function (request, response) {
  response.render('about.hbs', {title: 'About Us'});
});

app.get("/hello", function (request, response) {
  var name = request.query.name || "World";
  
  var friends = [
    {name: 'Joe'},
    {name: 'Darth'}
  ];
  
  var context = {
    title: 'Hello Page',
    name: name,
    friends: friends,
    age: 21
  };
  response.render('hello.hbs', context);
});

app.get("/post/:slug", function (request, response) {
  var slug = request.params.slug;
  response.send('Post About: ' + slug);
});

app.get("/projects", function (request, response) {
  response.send('Projects');
});

app.listen(8000, function () {
  console.log('Listening on port 8000');
});
