'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Product.belongsTo(models.User, {foreignKey: "UserId"})
      Product.belongsTo(models.Category, {foreignKey: "CategoryId"})
    }
  }
  Product.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: "name is required"
        },
        notEmpty: {
          args: true,
          msg: "name is required"
        }
      }
    },
    imgUrl: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: "image is required"
        },
        notEmpty: {
          args: true,
          msg: "image is required"
        }
      }
    },
    memory:{
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: "memory is required"
        },
        notEmpty: {
          args: true,
          msg: "memory is required"
        }
      }
    },
    storage: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: "storage is required"
        },
        notEmpty: {
          args: true,
          msg: "storage is required"
        }
      }
    },
    batteryCapacity: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: "battery capacity is required"
        },
        notEmpty: {
          args: true,
          msg: "battery capacity is required"
        }
      }
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: "description is required"
        },
        notEmpty: {
          args: true,
          msg: "description is required"
        }
      }
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: "price is required"
        },
        notEmpty: {
          args: true,
          msg: "price is required"
        }
      }
    },
    CategoryId: DataTypes.INTEGER,
    UserId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};