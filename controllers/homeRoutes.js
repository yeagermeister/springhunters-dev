const router = require('express').Router();
const { Spring, User } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  try {
    // Get all springs and JOIN with user data
    const springData = await Spring.findAll({

    });

    // Serialize data so the template can read it
    const springs = springData.map((spring) => {
      const plainspring = spring.get({ plain: true })
      plainspring.distance = 20;
      console.log(plainspring);
      return plainspring;
    });

    // // Pass serialized data and session flag into template
    res.render('homepage', {
      springs
      // logged_in: req.session.logged_in 
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/springs/:id', async (req, res) => {
  try {
    const springData = await Spring.findByPk(req.params.id, {

    });

    const springs = springData.get({ plain: true });

    res.render('spring', {
      springs,
    })
  } catch (err) {
    res.status(500).json(err);
  }
})



// Use withAuth middleware to prevent access to route
router.get('/profile', withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] }
    });

    const user = userData.get({ plain: true });

    res.render('profile', {
      ...user,
      logged_in: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
});
router.get('/admin', withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] }
    });
    console.log(userData);
    const user = userData.get({ plain: true });
    console.log(user);
    if (user.permissions === "admin") {
      res.render('admin');
    } else {res.render('homepage')};
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/profile');
    return;
  }

  res.render('login');
});

// Route to input a new spring 
router.get('/newspring', (req, res) => {
  res.render('newspring')
});


module.exports = router;
