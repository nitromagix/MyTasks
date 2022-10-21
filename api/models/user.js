"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {

    // static associate({ Comment }) {
    //   User.hasMany(Comment, { as: "author", foreignKey: "author_id" });
    // }

    canAddPlace() {
      return this.role === "admin";
    }

    canEditPlace() {
      return this.role === "admin";
    }

    canDeletePlace() {
      return this.role === "admin";
    }
  }
  User.init(
    {
      userId: {
        type: DataTypes.SMALLINT,
        primaryKey: true,
        autoIncrement: true,
      },
      firstName: DataTypes.STRING,
      lastName: DataTypes.STRING,
      email: DataTypes.STRING,
      passwordDigest: DataTypes.STRING,
      role: {
        type: DataTypes.ENUM,
        values: ["user", "reviewer", "admin"],
      },
      uid: DataTypes.UUID
    },
    {
      sequelize,
      underscored: true,
      modelName: "User",
    }
  );
  return User;
};
