'use strict';
const {
  Model
} = require('sequelize');
const { hashPass } = require('../helper/bcrypt');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasMany(models.Product)
    }
  }
  User.init({
    userName: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      unique: {
        msg: "Email already taken"
      },
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: "email is required"
        },
        notEmpty: {
          args: true,
          msg: "email is required"
        },
        isEmail: {
          msg: "Must be email format"
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: "password is required"
        },
        notEmpty: {
          args: true,
          msg: "password is required"
        }
      }
    }
  }, {
    sequelize,
    modelName: 'User',
  });

  User.beforeCreate((user) => {
    user.password = hashPass(user.password)
  })
  return User;
};