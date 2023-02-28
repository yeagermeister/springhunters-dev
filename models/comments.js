const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Comments extends Model {}

Comments.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references:{
        model: 'user',
        key: 'id',
      }
    },
    spring_id: {
      type: DataTypes.INTEGER,
      references:{
        model: 'spring',
        key: 'id',
      }
    },
    rating_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'ratings',
        key: 'rating_id'
      }
      
    },
    comment: {
      type: DataTypes.STRING,
      primaryKey: true

    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'comment',
  }
);

module.exports = Comments;
