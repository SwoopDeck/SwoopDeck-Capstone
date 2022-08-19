const router = require('express').Router();
const {
  models: { User, JumpRecord },
} = require('../db');
const jwt = require('jsonwebtoken');
const { requireToken, isAdmin } = require('./middleware');
module.exports = router;

//GET api/users/ Get all users as admin
router.get('/', async (req, res, next) => {
  try {
    const users = await User.findAll({
      
      //   // explicitly select only the id and email fields - even though
      //   // users' passwords are encrypted, it won't help if we just
      //   // send everything to anyone who asks!
      attributes: ["id", "email", "firstName", "lastName"],
    });
    res.json(users);
  } catch (err) {
    next(err);
  }
});

//Grabbing a users data/profile when logged in
//GET api/users/:id
router.get('/:id', async (req, res, next) => {
  try {
    const user = await User.findByPk(req.params.id);
    res.json(user);
  } catch (err) {
    next(err);
  }
});

//Create a new user row to the User table
//POST api/users/
router.post('/', async (req, res, next) => {
  try {
    const user = await User.create(req.body);
    res.status(201).json(user);
  } catch (err) {
    next(err);
  }
});

//Update the user once the form is updated
//PUT api/users/:id
router.put("/:id", async (req, res, next) => {
  try {
    const user = await User.findOne({
      where: { userId: req.params.id },
    });
    user.update({});
    res.json([]);
  } catch (err) {
    next(err);
  }
});

//Delete the user if the user wants the account to be deleted
//DELETE api/users/:id
router.delete('/:id', async (req, res, next) => {
  try {
    const user = await User.findByPk(req.params.id);
    await user.destroy(req.params.id);
    res.send(user);
  } catch (err) {
    next(err);
  }
});

/////////////////////////////////////////////// JUMP ROUTES for USERS ///////////////////////////////////////

//grab the jumps per single user
//GET api/users/:id/jumps/
router.get('/:id/jumps/', async (req, res, next) => {
  try {
    const userJumps = await JumpRecord.findAll({
      where: {userId: req.params.id}
    }
    );
    res.json(userJumps);
  } catch (err) {
    next(err);
  }
}
);

//grab the single jump for a user
//GET api/users/:id/jumps/:jumpId
router.get('/:id/jumps/:jumpId', async (req, res, next) => {
  try {
    const jump = await Jumps.findAll({
      include: {
        model: User,
        where: {id: req.params.id}
      },
      where: {id: req.params.jumpId, 
      }
    }
    );
    res.json(jump);
  } catch (err) {
    next(err);
  }
}
);

//Update the edited jump
//PUT api/users/:id/:jumpId/
router.put("/:id/:jumpId/", async (req, res, next) => {
  try {
    const editRecord = await JumpRecord.findByPk(req.params.jumpId);
    await editRecord.update({
      jumpNumber: req.body.jumpNumber,
      // location: req.body.location,
      // aircraft: req.body.aircraft,
      // equipment: req.body.equipment,
      // exitAltitude: req.body.exitAltitude,
      // pullAtltitude:req.body.pullAtltitude,
      // freeFallTime: req.body.freeFallTime,
      // jumpers: req.body.jumpers,
      // description: req.body.description,
      // jumpType: req.body.jumpType,
    })
    // res.send(editRecord)
    const userJumps = await JumpRecord.findAll({
      where: {userId: req.params.id}
    }
    );
    res.json(userJumps);
  } catch (err) {
    next(err);
  }
});

//Creating a new jump log for a user
//POST /api/users/:id/create
router.post('/:id/create/', async (req, res, next) => {
  try {
    await JumpRecord.create({...req.body, userId: req.params.id});
    const userJumps = await JumpRecord.findAll({
      where: {userId: req.params.id}
    }
    );
    res.send(userJumps)
  } catch (e) {
    next(e);
  }
});
//DELETE ROUTE FOR A USERS JUMP
router.delete('/:id/:jumpId', async (req, res, next) => {
  try {
    const record = await JumpRecord.findByPk(req.params.jumpId)
     await record.destroy()
    const userJumps = await JumpRecord.findAll({
      where: {userId: req.params.id}
    }
    );
    res.send(userJumps)
  } catch (err) {
    next(err);
  }
});
