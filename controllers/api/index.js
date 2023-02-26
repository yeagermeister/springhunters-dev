const router = require('express').Router();
// const userRoutes = require('./userRoutes');
const springRoutes = require('./springRoutes');

// router.use('/users', userRoutes);
router.use('/springs', springRoutes);

module.exports = router;
