const User = require('./User');
const Spring = require('./Spring');
const Comments = require('./comments');
const Ratings = require('./ratings');
const NewSpring = require('./NewSpring')

User.hasMany(Comments, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Comments.belongsTo(User, {
    foreignKey: 'user_id',
});

User.hasMany(Ratings, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});
// Ratings.belongsTo(User, {
//     foreignKey: 'user_id'
// });
// Ratings.belongsTo(Spring, {
//     foreignKey: 'spring_id'
// });

// Comments.hasOne(Ratings, {
//   foreignKey: 'comment_id',
//   onDelete: 'CASCADE'
// });

// Ratings.hasOne(Comments, {
//     foreignKey: 'comment_id'
// });

Comments.belongsTo(Spring,{
    foreignKey: 'spring_id',
    onDelete: 'CASCADE'
});

// Spring.hasMany(Ratings, {
// foreignKey: 'rating_value',
// onDelete: 'CASCADE'
// });

module.exports = { User, Spring, Comments, Ratings, NewSpring };