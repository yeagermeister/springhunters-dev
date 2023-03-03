const router = require('express').Router();
const { Spring, Ratings } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/:id', async (req, res) => {
  try {
    const springData = await Spring.findByPk(req.params.id); 
      if(!springData){
        res.status(404).json({ message: 'no spring with this id!'});
        return;
      }
      res.status(200).json(springData);
    } catch (err) {
      res.status(500).json(err)
    }
  });

  router.get('/', async (req, res) => {
    try {
      const springData = await Spring.findAll(); 
        res.status(200).json(springData);
      } catch (err) {
        res.status(500).json(err)
      }
    });

router.get('/filtered/:spvalue/:petvalue/:campingvalue/:scubavalue/:userfee', async (req, res) => {
  console.log("made it here")
  if (req.params.spvalue === "true"){
    spvalue = true
  } else {spvalue = ""};
  if (req.params.petvalue === "true"){
    petvalue = true
  } else {petvalue = ""};
  if (req.params.campingvalue === "true"){
    campingvalue = true
  } else {campingvalue = ""};
  if (req.params.scubavalue === "true"){
    scubavalue = true
  } else {scubavalue = ""};
  if (req.params.userfee === "free"){
    feevalue = "free"
  } else {feevalue = ""};
console.log(spvalue, petvalue, campingvalue, scubavalue, feevalue);
  try {
    let filter = ""
    if (spvalue){
      sp = `statepark: ${spvalue}, `;
      filter = sp;
    };
    if (petvalue){
      pet = `pets: ${petvalue}, `;
      filter = filter + pet;
    };
    if (campingvalue){
      camp = `camping: ${campingvalue}, `
      filter = filter + camp;
    };
    if (scubavalue){
      scuba = `scuba: ${scubavalue}, `;
      filter = filter + scuba;
    };
    if (feevalue){
      fees = `fees: ${feevalue}, `;
      filter = filter + fees;
    };
    console.log(filter);
    const springData = await Spring.findAll({
      
      where:{
        statepark: spvalue,
        pets: petvalue,
        camping: campingvalue,
        scuba: scubavalue,
        userfee: userfee
      },
    });
    if (!springData) {
      res.status(404).json({ message: 'your search did not match any filters!' });
      return;
    }
    res.status(200).json(springData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// router.get('/:id', async(req,res) => {
//   try {
//     //get specific spring
//     const springData = await Spring.findByPk(req.params.id);
//     if(!springData) {
//       res.status(404).json({message: 'No Spring with this Id!'});
//       return;
//     }
      
//     const spring = springData.get({ plain: true});
//     console.log(spring);
//     res.status(200).json(spring);
//   } catch (err) {
//     res.status(500).json(err)
//   }
// });


// let spvalue;

// const query = `(SELECT * FROM springs WHERE state_park = ${spvalue} )`







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
