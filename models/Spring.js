const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Spring extends Model {}

Spring.init(
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
      allowNull: false,
    },
    image_URL: {
      type: DataTypes.TEXT,
    },
    zipcode: {
      type: DataTypes.INTEGER(5),
      allowNull: false,
    },
    fees: {
      type: DataTypes.STRING(20),
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
      type: DataTypes.DECIMAL(7, 4)
    },
    lng: {
      type: DataTypes.DECIMAL(7, 4)
    }
  },
  {
    sequelize,
    timestamps: false,
    underscored: true,
    modelName: 'spring',
    tableName: 'springs'
  }
);

module.exports = Spring;
