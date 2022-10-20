const router = require('express').Router()
const { models: {User, Dropzone }} = require('../db')
module.exports = router

// USER ROUTERS
router.post('/login', async (req, res, next) => {
  try {
    console.log('-----', req.body)
    res.send({ token: await User.authenticate(req.body)}); 
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

router.get('/me', async (req, res, next) => {
  try {
    res.send(await User.findByToken(req.headers.authorization))
  } catch (ex) {
    next(ex)
  }
})


// DROPZONE ROUTERS
// router.post('/dropzone/login', async (req, res, next) => {
//   try {
//     console.log(req.body)
//     res.send({ token: await Dropzone.authenticate(req.body)}); 
//   } catch (err) {
//     next(err)
//   }
// })


// router.post('/dropzone/signup', async (req, res, next) => {
//   try {
//     const dropzone = await Dropzone.create(req.body)
//     res.send({token: await Dropzone.generateToken()})
//   } catch (err) {
//     if (err.name === 'SequelizeUniqueConstraintError') {
//       res.status(401).send('User already exists')
//     } else {
//       next(err)
//     }
//   }
// })

// router.get('/dropzone/me', async (req, res, next) => {
//   try {
//     res.send(await Dropzone.findByToken(req.headers.authorization))
//   } catch (ex) {
//     next(ex)
//   }
// })