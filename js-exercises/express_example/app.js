var express = require('express');
var app = express();
var body_parser = require('body-parser');

var pgp = require('pg-promise')({});

var db = pgp({database: 'restaurant'});

app.set('view engine', 'hbs');
app.use('/static', express.static('public'));
app.use(body_parser.urlencoded({extended: false}));

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

app.get("/form", function (request, response) {
  response.render('form.hbs', {title: 'Form'});
});

app.post("/submit", function (request, response) {
  console.log(request.body);
  //response.send('OK ' + request.body.name);
  
  response.redirect('/hello');
});

app.get('/search', function(req, resp, next) {
  let term = req.query.searchTerm;
  let query = "SELECT * FROM restaurant WHERE \
  restaurant.name ILIKE '%$1#%'";
  db.many(query, term)
    .then(function(resultsArray) {
      resp.render('search_results.hbs', {
        results: resultsArray
      });
    })
    .catch(next);
});

app.listen(8000, function () {
  console.log('Listening on port 8000');
});
