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
  try {
    const springData = await Spring.findAll({
      
      where:{
        statepark: spvalue,
        pets: petvalue,
        camping: campingvalue,
        scuba: scubavalue,
        fees: feevalue
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

module.exports = router;
