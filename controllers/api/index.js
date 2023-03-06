const router = require('express').Router();
const userRoutes = require('./userRoutes');
const springRoutes = require('./springRoutes');
const newSpringRoutes = require('./newSpringRoutes');
const ratingsRoutes = require('./ratingsRoutes')

router.use('/users', userRoutes);
router.use('/springs', springRoutes);
router.use('/newspring', newSpringRoutes);

module.exports = router;
