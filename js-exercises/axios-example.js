var axios = require('axios');

var api_url = 'https://api.punkapi.com/v2/beers?brewed_before=11-2012&abv_gt=6';

axios.get(api_url)
  .then(function (response1) {
    console.log('API 1');
    debugger;
    return axios.get(api_url);
  })
  .then(function (response2) {
    console.log('API 2 Called');
    return 'NARF';
  })
  .then(function (value){
    console.log(value);
  })
  .catch(function (error) {
    console.log(error);
  });
  
var p2 = axios.get(api_url);

// Promise.all([p1, p2])
//   .then(function (responses) {
//     console.log(responses[0].data);
//     console.log(responses[1].data);
//   })
//   .catch(function (error) {
//     throw error;
//   });

var p = new Promise(function (resolve, reject) {
  setTimeout(function () {
    try {
      resolve('Hello');
    } catch (e) {
      reject(e);
    }
  }, 5000);
});

// p.then(function (value) {
//   console.log('DONE', value);
// })
// .catch(function (error) {
//   console.log('ERROR', error);
// });

function fix_name (name) {
  var promise = new Promise(function (resolve, reject) {
    try {
      var new_name = name.replace('-', ' ');
      resolve(new_name);
    } catch (error) {
      reject(error);
    }
  });
  return promise;
}

var p3 = fix_name('Joe BOB');
p3
  .then((result) => {
    // this
    console.log(result);
    return 'something';
  })
  .then((result2) => {
    console.log(result2);
  });
  
