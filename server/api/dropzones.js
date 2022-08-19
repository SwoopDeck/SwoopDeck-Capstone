const router = require('express').Router();
const {
  models: { Dropzone },
} = require('../db');

//grab the all DROPZONES for ADMIN

//GET 'api/dropzones/'
router.get('/', async (req, res, next) => {
  try {
    const dropzones = await Dropzone.findAll();
    res.json(dropzones);
    res.send();
  } catch (err) {
    next(err);
  }
});

//grab a single DROPZONE by id

//GET 'api/dropzones/:dropzoneId'
router.get('/:dropzoneId', async (req, res, next) => {
  try {
    const selectedDropzone = await Dropzone.findByPk(req.params.dropzoneId);
    res.json(selectedDropzone);
  } catch (err) {
    next(err);
  }
});

//Update the DROPZONE by id

//GET 'api/dropzones/:dropzoneId'
router.put('/:dropzoneId', async (req, res, next) => {
  try {
    res.send();
  } catch (err) {
    next(err);
  }
});

//Creating a DROPZONE
//GET 'api/dropzone/create'
router.post('/create', async (req, res, next) => {
  try {
    res.send();
  } catch (e) {
    next(e);
  }
});

//REMOVE A DROPZONE

//DELETE 'api/dropzones/:dropzoneId'
router.delete('/:dropzoneId', async (req, res, next) => {
  try {
    res.send();
  } catch (err) {
    next(err);
  }
});

module.exports = router;
