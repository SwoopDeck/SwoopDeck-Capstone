const router = require('express').Router();
const {
  models: { User, Jumps },
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
    // const user = await User.findOne({
    //   where: { id: req.params.id},
    // });
    const jumps = await Jumps.findAll({
      where: {userId: req.params.id}
    }
    );
    res.json(jumps);
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
    const user = await User.findOne({
      where: { userId: req.params.id},
    });
    const editJump = await Jump.findByPk({
      where: {jumpId :req.params.jumpId, userId: user.id}
    });
    
    await editJump.update({
      ...editJump,
      ...req.body,
      //all other items being updated
    });
    res.json(editJump);
  } catch (err) {
    next(err);
  }
});

//Creating a new jump log for a user
//POST /api/users/:id/create
router.post('/:id/create/', async (req, res, next) => {
  try {
    //DO WE NEED TO IDENTIFY THE USER TO ACCESS THEIR TABLE AND THEN CREATE?
    const user = await User.findOne({
      where: { userId: req.params.id},
    });
    let jump = await Jump.create({...req.body, userId: user.id});
    res.status(201).send(jump);
  } catch (e) {
    next(e);
  }
});
//DELETE ROUTE FOR A USERS JUMP
router.delete('/:id/:jumpId', async (req, res, next) => {
  try {
     await Jumps.destroy({
      where: {userId: req.params.id,
        jumpNumber: req.params.jumpId, 
      }
    }
    );
    res.send()
  } catch (err) {
    next(err);
  }
});
