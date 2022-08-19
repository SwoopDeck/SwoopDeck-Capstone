const router = require('express').Router()
const { models: {Dropzone }}= require('../db')


// '/api/dropzones/:id'
// router.get('/:id', async (req, res, next) => {
//     console.log(req.params.id)
//     try {
//       const selectedDropzone = await Dropzone.findByPk(req.params.id);
//       res.json(selectedDropzone);
//     } catch (err) {
//       next(err);
//     }
//   }
//   );


  router.get('/:id/', async (req, res, next) => {
    try {
        console.log(Dropzone)
      const dz = await Dropzone.findAll({
        where: {id: req.params.id}
      }
      );
      console.log(dz)
      res.json(dz);
    } catch (err) {
      next(err);
    }
  }
  );
  module.exports = router
  