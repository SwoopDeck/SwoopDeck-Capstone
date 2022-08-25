const router = require('express').Router();
const {
  models: { User, JumpRecords },
} = require('../db');
const jwt = require('jsonwebtoken');
const { requireToken, isAdmin } = require('./middleware');
module.exports = router;

//ADMIN VIEW: GET ALL USERS
router.get('/', requireToken, isAdmin, async (req, res, next) => {
  try {
    const users = await User.findAll(
      
    //   {
    //   //   // explicitly select only the id and email fields - even though
    //   //   // users' passwords are encrypted, it won't help if we just
    //   //   // send everything to anyone who asks!
    //   attributes: ["id", "email", "firstName", "lastName"],
    // }
    );
    res.json(users);
  } catch (err) {
    next(err);
    console.log('did not work')
  }
});

//ADMIN VIEW: GET A USER
router.get('/:id', async (req, res, next) => {
  try {
    const user = await User.findByPk(req.params.id);
    res.json(user);
  } catch (err) {
    next(err);
  }
});

//ADMIN VIEW: CREATE NEW USER
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
    const user = await User.findByPk(req.params.id);
    console.log('TESTTTTTTTTTTTTTTTTTTASDFASDFASDFADSFDS', user)
    console.log('REQUESTBODY',req.body)
    user.update({...user,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      // password: '',
      address: req.body.address,
      licenseNumber: req.body.licenseNumber,
      emergencyContact: req.bodyemergencyContact,
      emergencyPhoneNumber: req.body.emergencyPhoneNumber
    });
    res.json(user);
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

