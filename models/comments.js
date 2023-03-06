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
    // rating_id: {
    //   type: DataTypes.INTEGER,
    //   references: {
    //     model: 'rating',
    //     key: 'id'
    //   }
      
    // },
    comment: {
      type: DataTypes.STRING,
      primaryKey: true

    },
    comment_id: {
      type: DataTypes.INTEGER,
      primaryKey: true

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
