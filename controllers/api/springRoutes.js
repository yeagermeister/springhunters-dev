const router = require('express').Router();
const { Spring } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', async(req,res) => {
  try {
    //get all springs
    const springData = await Spring.findall();
    console.log("Hi There");
    res.status(200).json(springData);
  } catch (err) {
    res.status(500).json("you made it here");
  }
}); 

router.get('/:id', async(req,res) => {
  try {
    //get specific spring
    const springData = await Spring.findByPk(req.params.id);
    if(!springData) {
      res.status(404).json({message: 'No Spring with this Id!'});
      return;
    }
      
    const spring = springData.get({ plain: true});
    console.log(spring);
    res.status(200).json(spring);
  } catch (err) {
    res.status(500).json(err)
  }
});


router.post('/', withAuth, async (req, res) => {
  try {
    const newSpring = await Spring.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newSpring);
  } catch (err) {
    res.status(400).json(err);
  }
});


//i dont think we need the ability to delete on here as nothing should get through without verification
// router.delete('/:id', withAuth, async (req, res) => {
//   try {
//     const springData = await Spring.destroy({
//       where: {
//         id: req.params.id,
//         user_id: req.session.user_id,
//       },
//     });

//     if (!springData) {
//       res.status(404).json({ message: 'No spring found with this id!' });
//       return;
//     }

//     res.status(200).json(springData);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

module.exports = router;
