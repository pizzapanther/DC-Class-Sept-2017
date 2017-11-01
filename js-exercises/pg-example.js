var pgp = require('pg-promise')({});

var db = pgp({database: 'restaurant'});

db.query('SELECT * FROM restaurant')
  .then(function (results) {
    results.forEach(function (r) {
      console.log(r.id, r.name);
    });
  })
  .catch(function (error) {
    console.log(error);
  });

db.one('SELECT * FROM restaurant WHERE id = 1')
  .then(function (r) {
    console.log(r.id, r.name);
  })
  .catch(function (error) {
    console.log(error);
  });

db.result('SELECT * FROM restaurant WHERE id = 1')
  .then(function (r) {
    console.log(r);
  })
  .catch(function (error) {
    console.log(error);
  });
  
db.result("INSERT INTO restaurant \
  VALUES (default, 'Narf')")
  .then(function (result) {
    console.log(result);
  });
  

//var name = "Big Belly Burger";
var name = "Big Belly Burger'; DROP TABLE restaurant; --";
var query = 'INSERT INTO restaurant VALUES (default, $1)';
console.log(query);

db.result(query, name)
  .then(function (result) {
    console.log(result);
  })
  .catch(function (e) {
    console.log(e);
  });
  
var biz = {name: "Lard Lad Donuts"};
var q = "INSERT INTO restaurant \
  VALUES (default, ${name})";
db.result(q, biz)
  .then(function (result) {
    console.log(result);
  });
  
pgp.end();
