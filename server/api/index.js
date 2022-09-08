const router = require('express').Router()

router.use('/users', require('./users'))
router.use('/jumpRecords', require('./jumpRecords'));
router.use('/dropzones', require('./dropzones'));
router.use('/loads', require('./loads'));
router.use('/stripe', require('./stripe'))

router.use((req, res, next) => {
  const error = new Error('Not Found')
  error.status = 404
  next(error)
})

module.exports = router;