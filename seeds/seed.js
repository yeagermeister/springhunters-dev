const sequelize = require('../config/connection');
const { User, Spring } = require('../models');

const userData = require('./userData.json');
const springData = require('./springData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData);
    // , {
  //   individualHooks: true,
  //   returning: true,
  // });
  const springs = await Spring.bulkCreate(springData);

for (const spring of springData) {
    await Spring.create({
      ...Spring,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }

  process.exit(0);
};

seedDatabase();
