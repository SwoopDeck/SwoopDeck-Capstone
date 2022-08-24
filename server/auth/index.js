const router = require('express').Router()
const { models: {User, Dropzone }} = require('../db')
module.exports = router

router.post('/login', async (req, res, next) => {
  try {
    console.log(req.body)
    res.send({ token: await User.authenticate(req.body)},); 
  } catch (err) {
    next(err)
  }
})

router.post('/dz/login', async (req, res, next) => {
  try {
    console.log(req.body)
    res.send({ token: await Dropzone.authenticate(req.body)},); 
  } catch (err) {
    next(err)
  }
})


router.post('/signup', async (req, res, next) => {
  try {
    const user = await User.create(req.body)
    res.send({token: await user.generateToken()})
  } catch (err) {
    if (err.name === 'SequelizeUniqueConstraintError') {
      res.status(401).send('User already exists')
    } else {
      next(err)
    }
  }
})

router.post('/dz/signup', async (req, res, next) => {
  try {
    const dropzone = await Dropzone.create(req.body)
    res.send({token: await dropzone.generateToken()})
  } catch (err) {
    if (err.name === 'SequelizeUniqueConstraintError') {
      res.status(401).send('Dropzone already exists')
    } else {
      next(err)
    }
  }
})


router.get('/me', async (req, res, next) => {
  try {
    res.send(await User.findByToken(req.headers.authorization))
  } catch (ex) {
    next(ex)
  }
})

router.get('/dz/me', async (req, res, next) => {
  try {
    res.send(await Dropzone.findByToken(req.headers.authorization))
  } catch (ex) {
    next(ex)
  }
})
