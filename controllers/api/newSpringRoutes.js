const router = require('express').Router();
const { NewSpring } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/:id', async (req, res) => {
    try {
        const springData = await NewSpring.findByPk(req.params.id); 
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
        const springData = await NewSpring.findAll(); 
        res.status(200).json(springData);
    } catch (err) {
    res.status(500).json(err)
    }
});

router.post('/', async (req, res) => {
       NewSpring.create(req.body)
        .then((newNewSpring) => {
            res.status(200).json(newNewSpring);
        })
        .catch((err) => {
            res.status(200).json(err);
        })
});

module.exports = router;
