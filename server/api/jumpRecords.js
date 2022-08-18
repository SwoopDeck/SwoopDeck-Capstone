const router = require('express').Router()
const {Jump} = require('../db')

//I dont think we need this if we have to find a USERID to find the specific user's jump table.

// GET /api/jumps
router.get('/', async (req, res, next) => {
  try {
    const allJumps = await Jump.findAll()
    //res.json/res.send?
    res.send(allJumps)
  }
  catch (error) {
    next(error)
  }
});

// GET /api/jumps/:jumpId
router.get('/:jumpId', async (req, res, next) => {
  try {
    const jump = await Jump.findAll({
      where: {
        id: req.params.jumpId
      },
    })
    res.send(jump)
  }
  catch (error) {
    next(error)
  }
})

//POST to create a new jump log
router.post('/add', async (req, res, next) => {
  try {
    res.status(201).send(await Jump.create(req.body));
  } catch (error) {
    next(error); 
  }
});


// PUT /api/jumps/:id
router.put('/:id', async (req, res, next) => {
  try {
    const jump = await Jump.findByPk(req.params.id);
    console.log(req.body)
    res.send(await jump.update({
    number: req.body.number,
    date: req.body.date,
    location: req.body.location,
    aircraft: req.body.aircraft,
    equipment: req.body.equipment,
    exitAltitude: req.body.exitAltitude,
    pullAtltitude:req.body.pullAtltitude,
    freefallTime: req.body.freefallTime,
    jumpers: req.body.jumpers,
    description: req.body.description,
    licenseNumber: req.body.licenseNumber,
  }));
  } catch (error) {
    next(error);
  }
});

//DETELE to remove jump
router.delete('/:id', async (req, res, next) => {
  try {
    const jump = await Jump.findByPk(req.params.id)
    await jump.destroy(req.params.id);
    res.send(jump);
  } catch (error) {
    next(error);
  }
})

module.exports = router