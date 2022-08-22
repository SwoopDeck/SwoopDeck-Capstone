const router = require('express').Router()

router.use('/users', require('./users'))
router.use('/jumprecords', require('./jumprecords'));
router.use('/dropzones', require('./dropzones'));
router.use('/loads', require('./loads'));

router.use((req, res, next) => {
  const error = new Error('Not Found')
  error.status = 404
  next(error)
})

module.exports = router;