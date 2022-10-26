'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {

  class Test extends Model {

  };

  Test.init({
    testId: {
      type: DataTypes.SMALLINT,
      primaryKey: true,
      autoIncrement: true
    },
    name: DataTypes.STRING,
  }, {
    sequelize,
    underscored: true,
    modelName: 'Test',
  });

  return Test;
};