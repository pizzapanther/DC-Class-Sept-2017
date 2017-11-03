'use strict';
module.exports = (sequelize, DataTypes) => {
  var task = sequelize.define('task', {
    name: DataTypes.STRING,
    due: DataTypes.DATE
  });
  
  task.associate = function(models) {
    task.belongsTo(models.user);
  };
  return task;
};