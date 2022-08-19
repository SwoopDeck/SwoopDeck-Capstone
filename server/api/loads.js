const router = require('express').Router()
const { models: { Load }}= require('../db')


//grab the LOADS per DROPZONE

//GET 'api/loads/:dropzoneId'
router.get('/:dropzoneId', async (req, res, next) => {
    try {
        const dropzoneLoads = await Load.findAll({
            where: {id: req.params.dropzoneId}
          }
          );
      res.send(dropzoneLoads)
    } catch (err) {
      next(err);
    }
  }
  );
  
  //grab a single LOAD for a DROPZONE by id

  //GET 'api/loads/:dropzoneId/:loadId'
  router.get('/:dropzoneId/:loadId', async (req, res, next) => {
    try {
      res.send()
    } catch (err) {
      next(err);
    }
  }
  );
  
  //Update the LOAD by load id

  //GET 'api/loads/:dropzoneId/:loadId'
  router.put('/:dropzoneId/:loadId', async (req, res, next) => {
    try {
      res.send()
    } catch (err) {
      next(err);
    }
  });
  
  //Creating a LOAD for a DROPZONE
  //GET 'api/loads/:dropzoneId/create'
  router.post('/:dropzoneId/create', async (req, res, next) => {
    try {
      res.send()
    } catch (e) {
      next(e);
    }
  });

  //DROPZONE REMOVING A LOAD
 
  //DELETE 'api/loads/:dropzoneId/:loadId'
  router.delete('/:dropzoneId/:loadId', async (req, res, next) => {
    try {
      res.send()
    } catch (err) {
      next(err);
    }
  });
  
  
  module.exports = router