const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class NewSpring extends Model {}

NewSpring.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT,

    },
    zipcode: {
      type: DataTypes.INTEGER(5),
    },
    pets: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    statepark: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    camping: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    user_id: {
      type: DataTypes.INTEGER,
      references:{
        model: 'users',
        key: 'id',
      }
    }
  },
  {
    sequelize,
    timestamps: false,
    underscored: true,
    modelName: 'new_spring',
    tableName: 'new_spring'
  }
);

module.exports = NewSpring;
