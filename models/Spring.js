const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Spring extends Model {}

Spring.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    image_URL: {
      type: DataTypes.STRING,
    },
    zipcode: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    fees: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    pets: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    statepark: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    camping: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    scuba: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    lat: {
      type: DataTypes.INTEGER,
    },
    lng: {
      type: DataTypes.INTEGER,
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'spring',
  }
);

module.exports = Spring;
