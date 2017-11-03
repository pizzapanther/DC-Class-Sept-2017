var db = require('./models');

function create_user () {
  // create a user
  db.user.create({nickname: "PDiddy"})
    .then(function (user) {
      console.log(user);
      return user;
    })
    .then(function (me) {
      // update a user
      me.firstName = 'Paul';
      me.save().then(() => {
        console.log('done saving');
      });
    });
}

function query_data () {
  db.user.findAll()
    .then((results) => {
      var r = results[0];
      console.log(r.id, r.nickname);
    });
    
  // Where clause  
  db.user.findAll({where: {nickname: 'PDiddy'}})
    .then((results) => {
      var user = results[0];
      console.log(user.id, user.nickname);
      return user.myTasks();
    })
    .then(function (tasks) {
      console.log(tasks);
    });
}

query_data();
