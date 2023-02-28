const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Ratings extends Model {}

Ratings.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id'
      }
    },
    spring_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'spring',
        key: 'id'
      }
    },
    comment_id: {
      type: DataTypes.TEXT,
      references:{
        model: 'comments',
        key: 'id'
      }
    },
    rating_value: {
    type: DataTypes.INTEGER,
    allowNull: false,
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'rating',
  }
);

module.exports = Ratings;
