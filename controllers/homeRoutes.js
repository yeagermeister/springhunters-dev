const router = require('express').Router();
const sequelize = require('../config/connection');
const { Spring, User } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  try {
    let query = "";
    let i = 0;

    if (req.query.spvalue === "true"){i = i + 1;};
    if (req.params.petvalue === "true"){i = i + 1;};
    if (req.params.campingvalue === "true"){i = i + 1;};
    if (req.params.scubavalue === "true"){i = i + 1;};
    if (req.query.userfee === "true"){i = i + 1;};
  
    if (req.query.spvalue === "true"){
      query = `statepark = ${req.query.spvalue}`;
    };
    if (i > 1) {
      query = query + " AND ";
      i = i - 1;
    };
    if (req.query.petvalue === "true"){
      query = query + `pets = ${req.query.petvalue}`;
      if (i > 1) {
        query = query + " AND ";
        i = i - 1;
      };
    };
    if (req.query.campingvalue === "true"){
      query = query + `camping = ${req.query.campingvalue}`;
      if (i > 1) {
        query = query + " AND ";
        i = i - 1;
      };
    };
    if (req.query.scubavalue === "true"){
      query = query + `scuba = ${req.query.scubavalue}`;
      if (i > 1) {
        query = query + " AND ";
        i = i - 1;
      };
    };
    if (req.query.userfee === "true"){
      query = query + `fees = "free"`;
      };
  
      console.log(i, query);
    // Get all springs
    const springData = await Spring.findAll({
      where: sequelize.literal(`${query}`)
      
    });

    // Serialize data so the template can read it
    const springs = springData.map((spring) => {
      const plainspring = spring.get({ plain: true })
      plainspring.distance = 20;

      return plainspring;
    });

    // // Pass serialized data and session flag into template
    res.render('homepage', {
      springs
   
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/springs/:id', withAuth, async (req, res) => {
  try {
    const springData = await Spring.findByPk(req.params.id, {

    });

    const springs = springData.get({ plain: true });
    
  
    res.render('spring', {springs})
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
router.get('/newspring', withAuth, (req, res) => {
  res.render('newspring')
});

module.exports = router;
