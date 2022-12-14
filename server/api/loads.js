const router = require('express').Router();
const {
  models: { Load, User, JumpRecords },
} = require('../db');

//grab the LOADS per DROPZONE

//GET 'api/loads/:dropzoneId'
router.get('/:dropzoneId', async (req, res, next) => {
  try {
    let loads = await Load.findAll({
      where: {
        dropzoneId: req.params.dropzoneId,
      },
    });
    loads.sort((a, b) => {
      return a.id - b.id;
    });

    res.send(loads);
  } catch (err) {
    next(err);
  }
});

//grab ALL LOADS

//GET 'api/loads'
router.get('/', async (req, res, next) => {
  try {
    let loads = await Load.findAll();

    res.send(loads);
  } catch (err) {
    next(err);
  }
});

//grab a single LOAD for a DROPZONE by id

//GET 'api/loads/:dropzoneId/:loadId'
router.get('/:dropzoneId/:loadId', async (req, res, next) => {
  try {
    let singleLoad = await Load.findOne({
      where: {
        id: req.params.loadId,
        dropzoneId: req.params.dropzoneId,
      },
    });

    // let loads = await Load.findAll({
    //   where: {
    //     dropzoneId: req.params.dropzoneId,
    //   },
    // });
    console.log(singleLoad);
    res.send(singleLoad);
  } catch (err) {
    next(err);
  }
});

///////

// router.get('/:dropzoneId/:loadId', async (req, res, next) => {
//   try {
//     console.log(req.params.loadId);
//     let singleLoad = await Load.findByPk(16);

//     // let loads = await Load.findAll({
//     //   where: {
//     //     dropzoneId: req.params.dropzoneId,
//     //   },
//     // });
//     console.log(singleLoad);
//     res.send(singleLoad);
//   } catch (err) {
//     next(err);
//   }
// });

///////

//Update the LOAD STATUS by load id

//PUT 'api/loads/status/:loadId'
router.put('/status/:loadId', async (req, res, next) => {
  try {
    let loadUpdate = await Load.findOne({
      where: {
        id: req.params.loadId,
      },
    });
    let newStatus = await loadUpdate.update({ status: req.body.status });
    res.send(newStatus);
  } catch (err) {
    next(err);
  }
});

//Update the LOAD by load id

// //GET 'api/loads/:loadId/:userId'
router.put('/:loadId/:userId', async (req, res, next) => {
  try {
    //find the jumper on the load through the jumprecords table
    let removedJumper = await JumpRecords.findOne({
      where: {
        loadId: req.params.loadId,
        userId: req.params.userId,
      },
    });
    //update the jumprecords table for loadId to NULL
    removedJumper.destroy();
    ///pull all jumpers on load ====> WITHOUT the selected userID
    const userJumps = await JumpRecords.findAll({
      where: {
        loadId: req.params.loadId,
      },
    });
    let jumperNames = [];
    for (let i = 0; i < userJumps.length; i++) {
      let userId = userJumps[i].userId;
      let user = await User.findByPk(userId);
      jumperNames.push(user);
    }
    res.send(jumperNames);
  } catch (err) {
    next(err);
  }
});

//UPDATING A LOADS SLOTFILLED COUNTER
//PUT 'api/loads/slotFilled/:dropzoneId/:loadId'
router.put('/slotFilled/:dropzoneId/:loadId', async (req, res, next) => {
  try {
    //find the jumper on the load through the jumprecords table
    let currentJumpers = await JumpRecords.findAll({
      where: {
        loadId: req.params.loadId,
      },
    });
    //finding the current load
    let currentLoad = await Load.findOne({
      where: {
        id: req.params.loadId,
      },
    });
    //number of jumpers on the load
    let loadNumber = currentJumpers.length + 1;

    //update the selected load
    currentLoad.update({ slotsFilled: loadNumber });
    //send back the altered load
    console.log(currentLoad);
    res.send(currentLoad);
  } catch (err) {
    next(err);
  }
});

//Creating a LOAD for a DROPZONE
//GET 'api/loads/:dropzoneId/create'
router.post('/:dropzoneId/create', async (req, res, next) => {
  try {
    //req.body contains all necessary info to fill data table
    await Load.create(req.body);

    console.log(req.body)
    let loads = await Load.findAll({
      where: {
        dropzoneId: req.params.dropzoneId,
      },
    });

    res.send(loads);
  } catch (e) {
    next(e);
  }
});

//DROPZONE REMOVING A LOAD

//DELETE 'api/loads/:dropzoneId/:loadId'
router.delete('/:dropzoneId/:loadId', async (req, res, next) => {
  try {
    await Load.destroy({
      where: {
        id: req.params.loadId,
      },
    });
    let loads = await Load.findAll({
      where: {
        dropzoneId: req.params.dropzoneId,
      },
    });

    res.json(loads);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
