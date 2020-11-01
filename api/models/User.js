const { DataTypes, Model } = require("sequelize");
const { sequelize } = require("../models");

class User extends Model {}
User.init(
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    job: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    birthYear: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    birthMonth: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    birthDay: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: "User",
  }
);

module.exports = { User };
