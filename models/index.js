const User = require('./User');
const Spring = require('./Spring');

// User.hasMany(Spring, {
//   foreignKey: 'user_id',
//   onDelete: 'CASCADE'
// });

// Spring.hasMany(User, {
//   foreignKey: 'user_id'
// });

module.exports = { User, Spring };