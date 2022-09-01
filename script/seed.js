'use strict';

const {
  db,
  models: { User, JumpRecord, Load, Dropzone },
} = require('../server/db');
const JumpRecords = require('../server/db/models/JumpRecords');

/* DUMMY JUMP RECORD DATA */
const jumps = [
  {
    jumpNumber: 1,
    jumpDate: '2022-07-15',
    aircraft: 'Kodiak',
    equipment: 'PD 210',
    exitAltitude: 13500,
    pullAltitude: 3500,
    freeFallTime: 60,
    jumpers: 1,
    description:
      'Great first jump of the day. Front flip exit. Good landing pattern & swoop.',
    jumpType: 'angle',
  },
  {
    jumpNumber: 2,
    jumpDate: '2022-07-15',
    aircraft: 'Kodiak',
    equipment: 'Falcon 260',
    exitAltitude: 13500,
    pullAltitude: 3500,
    freeFallTime: 60,
    jumpers: 1,
    description: 'Front flip exit.',
    jumpType: 'belly',
  },
  {
    jumpNumber: 3,
    jumpDate: '2022-07-20',
    aircraft: 'Kodiak',
    equipment: 'Falcon 260',
    exitAltitude: 13500,
    pullAltitude: 3500,
    freeFallTime: 60,
    jumpers: 1,
    description: 'Back flip exit.',
    jumpType: 'belly',
  },
  {
    jumpNumber: 4,
    jumpDate: '2022-07-20',
    aircraft: 'Kodiak',
    equipment: 'PD 210',
    exitAltitude: 5500,
    pullAltitude: 3500,
    freeFallTime: 60,
    jumpers: 1,
    description: 'great landing!',
    jumpType: 'belly',
  },
  {
    jumpNumber: 5,
    jumpDate: '2022-07-20',
    aircraft: 'Kodiak',
    equipment: 'Falcon 260',
    exitAltitude: 13500,
    pullAltitude: 3500,
    freeFallTime: 60,
    jumpers: 1,
    description: 'Front flip exit.',
    // jumpType: 'belly',
  },
  {
    jumpNumber: 6,
    jumpDate: '2022-07-21',
    aircraft: 'Kodiak',
    equipment: 'PD 210',
    exitAltitude: 5500,
    pullAltitude: 3500,
    freeFallTime: 60,
    jumpers: 1,
    description: 'Front flip exit.',
    // jumpType: 'belly',
  },
  {
    jumpNumber: 7,
    jumpDate: '2022-07-21',
    aircraft: 'Kodiak',
    equipment: 'Falcon 260',
    exitAltitude: 5500,
    pullAltitude: 3500,
    freeFallTime: 60,
    jumpers: 1,
    description: 'Front flip exit.',
    // jumpType: 'belly',
  },
  {
    jumpNumber: 8,
    jumpDate: '2022-07-21',
    aircraft: 'Kodiak',
    equipment: 'PD 210',
    exitAltitude: 5500,
    pullAltitude: 3500,
    freeFallTime: 60,
    jumpers: 1,
    description: 'Front flip exit.',
    // jumpType: 'belly',
  },
  {
    jumpNumber: 9,
    jumpDate: '2022-07-23',
    aircraft: 'Kodiak',
    equipment: 'Falcon 260',
    exitAltitude: 5500,
    pullAltitude: 3500,
    freeFallTime: 60,
    jumpers: 1,
    description: 'Front flip exit.',
    // jumpType: 'belly',
  },
  {
    jumpNumber: 10,
    jumpDate: '2022-07-23',
    aircraft: 'Kodiak',
    equipment: 'PD 210',
    exitAltitude: 5500,
    pullAltitude: 3500,
    freeFallTime: 60,
    jumpers: 1,
    description: 'Front flip exit.',
    // jumpType: 'belly',
  },
  {
    jumpNumber: 11,
    jumpDate: '2022-07-15',
    aircraft: 'Kodiak',
    equipment: 'Falcon 260',
    exitAltitude: 13500,
    pullAltitude: 2500,
    freeFallTime: 40,
    jumpers: 1,
    description:
      'Great first jump of the day. Front flip exit. Good landing pattern & swoop.',
    // jumpType: 'angle',
  },
  {
    jumpNumber: 12,
    jumpDate: '2022-07-15',
    aircraft: 'Kodiak',
    equipment: 'PD 210',
    exitAltitude: 13500,
    pullAltitude: 7500,
    freeFallTime: 120,
    jumpers: 1,
    description: 'Front flip exit.',
    // jumpType: 'belly',
  },
  {
    jumpNumber: 13,
    jumpDate: '2022-07-20',
    aircraft: 'Kodiak',
    equipment: 'Falcon 260',
    exitAltitude: 13500,
    pullAltitude: 5500,
    freeFallTime: 70,
    jumpers: 1,
    description: 'Back flip exit.',
    // jumpType: 'belly',
  },
  {
    jumpNumber: 14,
    jumpDate: '2022-07-20',
    aircraft: 'Kodiak',
    equipment: 'PD 210',
    exitAltitude: 5500,
    pullAltitude: 3500,
    freeFallTime: 60,
    jumpers: 1,
    description: 'great landing!',
    // jumpType: 'belly',
  },
  {
    jumpNumber: 15,
    jumpDate: '2022-07-20',
    aircraft: 'Kodiak',
    equipment: 'Falcon 260',
    exitAltitude: 13500,
    pullAltitude: 3500,
    freeFallTime: 90,
    jumpers: 1,
    description: 'Front flip exit.',
    // jumpType: 'belly',
  },
  {
    jumpNumber: 16,
    jumpDate: '2022-07-21',
    aircraft: 'Kodiak',
    equipment: 'PD 210',
    exitAltitude: 5500,
    pullAltitude: 3500,
    freeFallTime: 60,
    jumpers: 1,
    description: 'Front flip exit.',
    // jumpType: 'belly',
  },
  {
    jumpNumber: 17,
    jumpDate: '2022-07-21',
    aircraft: 'Kodiak',
    equipment: 'Falcon 260',
    exitAltitude: 5500,
    pullAltitude: 3500,
    freeFallTime: 60,
    jumpers: 1,
    description: 'front flip exit.',
    // jumpType: 'belly',
  },
  {
    jumpNumber: 18,
    jumpDate: '2022-07-21',
    aircraft: 'Kodiak',
    equipment: 'Falcon 260',
    exitAltitude: 5500,
    pullAltitude: 3500,
    freeFallTime: 60,
    jumpers: 1,
    description: 'front float exit.',
    jumpType: 'angle',
  },
  {
    jumpNumber: 19,
    jumpDate: '2022-07-23',
    aircraft: 'Kodiak',
    equipment: 'Falcon 260',
    exitAltitude: 5500,
    pullAltitude: 3500,
    freeFallTime: 60,
    jumpers: 1,
    description: 'rear float exit.',
    // jumpType: 'head down',
  },
  {
    jumpNumber: 20,
    jumpDate: '2022-07-23',
    aircraft: 'Kodiak',
    equipment: 'PD 210',
    exitAltitude: 5500,
    pullAltitude: 3500,
    freeFallTime: 60,
    jumpers: 1,
    description: 'back flip exit.',
    // jumpType: 'angle',
  },
];

// DUMMY DROP ZONE DATA
const dropZones = [
  {
    name: 'Cleveland Skydiving Center',
    address: '55 Grove St',
    phoneNumber: '8005555555',
  },
  {
    name: 'Skydive The Ranch',
    address: '123 Manhattan rd',
    phoneNumber: '8002222222',
  },
  {
    name: 'Skydive San Diego',
    address: '777 Sunset blvd',
    phoneNumber: '8002222222',
  },
];

/**
 * seed - this function clears the database, updates tables to
 *      match the models, and populates the database.
 */
async function seed() {
  await db.sync({ force: true }); // clears db and matches models to tables
  console.log('db synced!');

  // Creating Jump Records
  await Promise.all(
    jumps.map((jump) => {
      return JumpRecords.create(jump);
    }),
    dropZones.map((dz) => {
      return Dropzone.create(dz);
    })
  );

  // CREATE DUMMY USER DATA
  const admin = await User.create({
    firstName: 'Admin',
    lastName: 'Admin',
    email: 'admin@gmail.com',
    password: '123',
    address: '1 Coding Blvd',
    licenseNumber: 105050,
    isAdmin: true,
    role: 'Admin',
  });

  const chris = await User.create({
    firstName: 'Chris',
    lastName: 'Tomshack',
    email: 'chris@gmail.com',
    password: '123',
    address: '2 Coding Blvd',
    phoneNumber: '3307773562',
    licenseNumber: 202020,
    isAdmin: false,
  });

  const brian = await User.create({
    firstName: 'Brian',
    lastName: 'Lee',
    email: 'brian@gmail.com',
    password: '123',
    address: '3 Coding Blvd',
    phoneNumber: '4405553562',
    licenseNumber: 303030,
    isAdmin: false,
  });

  const christopher = await User.create({
    firstName: 'Christopher',
    lastName: 'Ruiz',
    email: 'christopher@gmail.com',
    password: '123',
    address: '4 Coding Blvd',
    phoneNumber: '5504443562',
    licenseNumber: 404040,
    isAdmin: false,
  });

  const cole = await User.create({
    firstName: 'Cole',
    lastName: 'Berman',
    email: 'cole@gmail.com',
    password: '123',
    address: '4 Coding Blvd',
    phoneNumber: '7703333562',
    licenseNumber: 505050,
    isAdmin: false,
  });

  const load1 = await Load.create({
    date: '2022-07-15',
    aircraft: 'some aircraft',
    slots: 10,
    slotsFilled: 0,
    isFull: false,
    status: 'delayed',
  });
  ////////////////JUST ADDED TO TEST ALL LOADS DZ VIEW ////
  const load3 = await Load.create({
    date: '2022-07-15',
    aircraft: 'some aircraft',
    slots: 10,
    slotsFilled: 0,
    isFull: false,
    status: 'delayed',
    dropzoneId: 2,
  });

  const load2 = await Load.create({
    date: '2022-02-22',
    aircraft: 'some aircraft',
    slots: 10,
    slotsFilled: 0,
    isFull: false,
    status: 'delayed',
  });

  const DZ1 = await Dropzone.findByPk(3);
  await DZ1.addLoad(load1);
  await DZ1.addLoad(load2);

  // DUMMY DROPZONE WITH USER.CREATE
  const Nigel = await User.create({
    firstName: 'Nigel',
    lastName: 'Doe',
    email: 'nigel@gmail.com',
    password: '123',
    address: '99 Coding Blvd',
    licenseNumber: 898989,
    isAdmin: false,
    isDropzone: true,
    role: 'Dropzone',
  });

  // DUMMY DATA TO ASSIGN A DROPZONE TO A USER
  const nigelUser = await User.findByPk(6);
  const sdsd = await Dropzone.findByPk(3);

  await nigelUser.setDropzone(sdsd);

  const BrianLee = await User.create({
    firstName: 'Brian',
    lastName: 'Lee',
    email: 'BrianLee@gmail.com',
    password: '123',
    address: '99 Coding Blvd',
    licenseNumber: 898989,
    isAdmin: false,
    isDropzone: true,
    dropzoneId: 2,
    role: 'Dropzone',
  });

  // await load1.addUser(cole, {
  //   through: {
  //     jumpNumber: 1,
  //     date: "2022-07-15",
  //     aircraft: "Kodiak",
  //     equipment: "PD 210",
  //     exitAltitude: 13500,
  //     pullAltitude: 3500,
  //     freeFallTime: 60,
  //     jumpers: 1,
  //     description:
  //       "Great first jump of the day. Front flip exit. Good landing pattern & swoop.",
  //       jumpType: 'belly'
  //   },
  // });

  // await load2.addUser(chris, {
  //   through: {
  //     jumpNumber: 1,
  //     date: "2022-07-15",
  //     aircraft: "Kodiak",
  //     equipment: "PD 210",
  //     exitAltitude: 13500,
  //     pullAltitude: 3500,
  //     freeFallTime: 60,
  //     jumpers: 1,
  //     description:
  //       "Front flip exit",
  //       jumpType: 'belly'
  //   },
  // });

  // console.log(Object.keys(Load.prototype));

  const jump1 = await JumpRecords.findByPk(1);
  const jump2 = await JumpRecords.findByPk(2);
  const jump3 = await JumpRecords.findByPk(3);
  const jump4 = await JumpRecords.findByPk(4);
  const jump5 = await JumpRecords.findByPk(5);
  const jump6 = await JumpRecords.findByPk(6);
  const jump7 = await JumpRecords.findByPk(7);
  const jump8 = await JumpRecords.findByPk(8);
  const jump9 = await JumpRecords.findByPk(9);
  const jump10 = await JumpRecords.findByPk(10);
  const jump11 = await JumpRecords.findByPk(11);
  const jump12 = await JumpRecords.findByPk(12);
  const jump13 = await JumpRecords.findByPk(13);
  const jump14 = await JumpRecords.findByPk(14);
  const jump15 = await JumpRecords.findByPk(15);
  const jump16 = await JumpRecords.findByPk(16);
  const jump17 = await JumpRecords.findByPk(17);
  const jump18 = await JumpRecords.findByPk(18);
  const jump19 = await JumpRecords.findByPk(19);
  const jump20 = await JumpRecords.findByPk(20);

  await jump1.setUser(chris);
  await jump3.setUser(chris);
  await jump2.setUser(chris);
  await jump4.setUser(chris);
  await jump5.setUser(chris);
  await jump6.setUser(cole);
  await jump7.setUser(cole);
  await jump8.setUser(cole);
  await jump9.setUser(cole);
  await jump10.setUser(cole);
  await jump11.setUser(brian);
  await jump12.setUser(brian);
  await jump13.setUser(brian);
  await jump14.setUser(brian);
  await jump15.setUser(brian);
  await jump16.setUser(christopher);
  await jump17.setUser(christopher);
  await jump18.setUser(christopher);
  await jump19.setUser(christopher);
  await jump20.setUser(christopher);

  await jump1.setLoad(1);
  await jump2.setLoad(1);
  await jump3.setLoad(1);
  await jump4.setLoad(1);
  await jump5.setLoad(1);
  await jump6.setLoad(1);
  await jump7.setLoad(1);
  await jump8.setLoad(1);
  await jump9.setLoad(1);
  await jump10.setLoad(2);
  await jump11.setLoad(2);
  await jump12.setLoad(2);
  await jump13.setLoad(2);
  await jump14.setLoad(2);
  await jump15.setLoad(2);
  await jump16.setLoad(2);
  await jump17.setLoad(2);
  await jump18.setLoad(2);
  await jump19.setLoad(2);
  await jump20.setLoad(2);

  await jump1.setDropzone(1);
}

/*
 We've separated the `seed` function from the `runSeed` function.
 This way we can isolate the error handling and exit trapping.
 The `seed` function is concerned only with modifying the database.
*/
async function runSeed() {
  console.log('seeding...');
  try {
    await seed();
  } catch (err) {
    console.error(err);
    process.exitCode = 1;
  } finally {
    console.log('closing db connection');
    await db.close();
    console.log('db connection closed');
  }
}

/*
  Execute the `seed` function, IF we ran this module directly (`node seed`).
  `Async` functions always return a promise, so we can use `catch` to handle
  any errors that might occur inside of `seed`.
*/
if (module === require.main) {
  runSeed();
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed;
