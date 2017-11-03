var db = require('./models');

db.task.create({
  name: 'finish class', due: '2017-10-10', userId: 1})
  .then(function () {
    db.task.findAll({include: [{model: db.user}]})
      .then((results) => {
        //mytask = results[0]
        console.log(results);
      });
  });

