var express = require('express');
var morgan = require('morgan');
var session = require('express-session');
var apicache = require('apicache');
var cache = apicache.middleware;

var app = express();
var body_parser = require('body-parser');

var pgp = require('pg-promise')({});

var db = pgp({database: 'restaurant'});

app.set('view engine', 'hbs');

app.use(session({
  secret: process.env.SECRET_KEY || 'dev',
  resave: true,
  saveUninitialized: false,
  cookie: {maxAge: 60000}
}));
app.use('/static', express.static('public'));
app.use(body_parser.urlencoded({extended: false}));

app.use(morgan('dev'));

app.use(function (request, response, next) {
  if (request.session.user) {
    next();
  } else if (request.path == '/login' || request.path == '/api') {
    next();
  } else {
    response.redirect('/login');
  }
});

app.get("/", function (request, response) {
  response.send('<html>');
});

app.get("/about", function (request, response) {
  console.log(request.session.user);
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

app.get('/login', function (request, response) {
  response.render('login.hbs');
});

app.post('/login', function (request, response) {
  var username = request.body.username;
  var password = request.body.password;
  if (username == 'aaron' && password == 'narf') {
    request.session.user = username;
    request.session.data = 'data';
    response.redirect('/');
  } else {
    response.render('login.hbs');
  }
});

app.get('/api', cache('5 minutes'), function (request, response) {
  console.log('Generating A Repsonse');
  response.json(
    {message: 'This is an API Chump!'}
  );
});

app.listen(8000, function () {
  console.log('Listening on port 8000');
});
