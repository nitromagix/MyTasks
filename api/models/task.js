'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {

  class Task extends Model {


    // static associate({ Comment }) {
    //   Place.hasMany(Comment, { foreignKey: 'place_id', as: 'comments' })
    // }

  };

  Task.init({
    taskId: {
      type: DataTypes.SMALLINT,
      primaryKey: true,
      autoIncrement: true
    },
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    startedOn: DataTypes.DATE,
    completedOn: DataTypes.DATE,
    uid: DataTypes.UUID,
    userId: DataTypes.UUID
  }, {
    sequelize,
    underscored: true,
    modelName: 'Task',
  });

  return Task;
};