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
        model: 'spring',comment
        key: 'id'
      }
    },
    // comment_id: {
    //   type: DataTypes.INTEGER,
    //   references:{
    //     model: 'comment',
    //     key: 'id'
    //   }
    // },
    rating: {
    type: DataTypes.INTEGER,
    allowNull: false,
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: false,
    underscored: true,
    modelName: 'rating',
    tableName:'ratings'
  }
);

module.exports = Ratings;
