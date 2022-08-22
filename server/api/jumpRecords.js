const router = require('express').Router()
const JumpRecords = require('../db/models/JumpRecords');
const Load = require('../db/models/Load');
const User = require('../db/models/User');
const Dropzone = require('../db/models/Dropzone')

/////////////////////////////////////////////// JUMP ROUTES for USERS ///////////////////////////////////////

//grab the jumps per single user
//GET api/jumprecords/:id/jumps/
router.get('/:id/jumps/', async (req, res, next) => {
  try {
    // const userJumps = JumpRecords.findAll({
    //   where: {
    //     userId: req.params.id,
    //     // include: [
    //     //   Dropzone
    //     // ]
    //   }
    // })
    const userJumps = await User.findByPk(req.params.id, {
      include: [
        {
          model: JumpRecords,
          include: [
            Dropzone
          ]
        }
      ]
    });
    // const userJumps = await User.findByPk(req.params.id);
    res.json(userJumps);
  } catch (err) {
    next(err);
  }
}
);

//grab the single jump for a user
//GET api/jumprecords/:id/jumps/:jumpId
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
//PUT api/jumprecords/:id/:jumpId/
router.put("/:id/:jumpId/", async (req, res, next) => {
  try {
    const editRecord = await JumpRecord.findByPk(req.params.jumpId);
    await editRecord.update({
      jumpNumber: req.body.jumpNumber,
      // location: req.body.location,
      // aircraft: req.body.aircraft,
      // equipment: req.body.equipment,
      // exitAltitude: req.body.exitAltitude,
      // pullAtltitude:req.body.pullAtltitude,
      // freeFallTime: req.body.freeFallTime,
      // jumpers: req.body.jumpers,
      // description: req.body.description,
      // jumpType: req.body.jumpType,
    })
    // res.send(editRecord)
    const userJumps = await JumpRecord.findAll({
      where: {userId: req.params.id}
    }
    );
    res.json(userJumps);
  } catch (err) {
    next(err);
  }
});

//Creating a new jump log for a user
//POST /api/jumprecords/:id/create
router.post('/:id/create/', async (req, res, next) => {
  try {
    await JumpRecord.create({...req.body, userId: req.params.id});
    const userJumps = await JumpRecord.findAll({
      where: {userId: req.params.id}
    }
    );
    res.send(userJumps)
  } catch (e) {
    next(e);
  }
});
//DELETE ROUTE FOR A USERS JUMP
router.delete('/:id/:jumpId', async (req, res, next) => {
  try {
    const record = await JumpRecord.findByPk(req.params.jumpId)
     await record.destroy()
    const userJumps = await JumpRecord.findAll({
      where: {userId: req.params.id}
    }
    );
    res.send(userJumps)
  } catch (err) {
    next(err);
  }
});


module.exports = router


//I dont think we need this if we have to find a USERID to find the specific user's jump table.

// // GET /api/jumps
// router.get('/', async (req, res, next) => {
//   try {
//     const allJumps = await Jump.findAll()
//     //res.json/res.send?
//     res.send(allJumps)
//   }
//   catch (error) {
//     next(error)
//   }
// });

// // GET /api/jumps/:jumpId
// router.get('/:jumpId', async (req, res, next) => {
//   try {
//     const jump = await Jump.findAll({
//       where: {
//         id: req.params.jumpId
//       },
//     })
//     res.send(jump)
//   }
//   catch (error) {
//     next(error)
//   }
// })

// //POST to create a new jump log
// router.post('/add', async (req, res, next) => {
//   try {
//     console.log('request body',req.body)
//     res.status(201).send(await Jump.create({
//       number: req.body.number,
//       date: req.body.date,
//       location: req.body.location,
//       aircraft: req.body.aircraft,
//       equipment: req.body.equipment,
//       exitAltitude: req.body.exitAltitude,
//       pullAtltitude:req.body.pullAtltitude,
//       freefallTime: req.body.freefallTime,
//       jumpers: req.body.jumpers,
//       description: req.body.description,
//       licenseNumber: req.body.licenseNumber,
//     }));
//   } catch (error) {
//     next(error); 
//   }
// });


// // PUT /api/jumps/:id
// router.put('/:id', async (req, res, next) => {
//   try {
//     const jump = await Jump.findByPk(req.params.id);
//     console.log('request body',req.body)
//     res.send(await jump.update({
//     number: req.body.number,
//     date: req.body.date,
//     location: req.body.location,
//     aircraft: req.body.aircraft,
//     equipment: req.body.equipment,
//     exitAltitude: req.body.exitAltitude,
//     pullAtltitude:req.body.pullAtltitude,
//     freefallTime: req.body.freefallTime,
//     jumpers: req.body.jumpers,
//     description: req.body.description,
//     licenseNumber: req.body.licenseNumber,
//   }));
//   } catch (error) {
//     next(error);
//   }
// });

// //DETELE to remove jump
// router.delete('/:id', async (req, res, next) => {
//   try {
//     const jump = await Jump.findByPk(req.params.id)
//     await jump.destroy(req.params.id);
//     res.send(jump);
//   } catch (error) {
//     next(error);
//   }
// })