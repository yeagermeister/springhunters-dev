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
        model: 'users',
        key: 'id',
      }
    },
    spring_id: {
      type: DataTypes.INTEGER,
      references:{
        model: 'springs',
        key: 'id',
      }
    },
    rating_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'ratings',
        key: 'id'
      }
      
    },
    comment: {
      type: DataTypes.STRING,
      

    },
    comment_id: {
      type: DataTypes.INTEGER,
      

    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: false,
    underscored: true,
    modelName: 'comment',
    tableName: 'comments'
  }
);

module.exports = Comments;
