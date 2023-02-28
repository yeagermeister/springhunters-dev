const User = require('./User');
const Spring = require('./Spring');

// User.hasMany(comments, {
//   foreignKey: 'user_id',
//   onDelete: 'CASCADE'
// });
// comments.hasone(ratings, {
//   foreignKey: 'user_id',
//   onDelete: 'CASCADE'
// });

// Spring.hasMany(User, {
//   foreignKey: 'user_id'
// });

module.exports = { User, Spring };