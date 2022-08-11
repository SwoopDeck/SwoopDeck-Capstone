'use strict'

const {db, models: {User, Jumps} } = require('../server/db')


// DUMMY DATA
const jumps = [
  {
    jumpNumber: 1,
    location: 'Cleveland Skydiving Center',
    aircraft: 'Kodiak',
    equipment: 'Falcon 260',
    exitAltitude: 13500,
    pullAltitude: 3500,
    freeFallTime: 60,
    jumpers: 'solo',
    description: 'Great first jump of the day. Front flip exit. Good landing pattern & swoop.',
    jumpType: 'angle',
  },
  {
    jumpNumber: 2,
    location: 'Cleveland Skydiving Center',
    aircraft: 'Kodiak',
    equipment: 'Falcon 260',
    exitAltitude: 13500,
    pullAltitude: 3500,
    freeFallTime: 60,
    jumpers: 'solo',
    description: 'Great first jump of the day. Front flip exit. Good landing pattern & swoop.',
    jumpType: 'angle',
  },
  {
    jumpNumber: 3,
    location: 'Cleveland Skydiving Center',
    aircraft: 'Kodiak',
    equipment: 'Falcon 260',
    exitAltitude: 13500,
    pullAltitude: 3500,
    freeFallTime: 60,
    jumpers: 'solo',
    description: 'Great first jump of the day. Front flip exit. Good landing pattern & swoop.',
    jumpType: 'angle',
  },
]
/**
 * seed - this function clears the database, updates tables to
 *      match the models, and populates the database.
 */
async function seed() {
  await db.sync({ force: true }) // clears db and matches models to tables
  console.log('db synced!')

  // Creating Jumps
  await Promise.all(
    jumps.map((jump) => {
      return Jumps.create(jump);
    })
  );
 

  const admin = await User.create({
    email: "admin@gmail.com",
    password: "123",
    firstName: "Admin",
    lastName: "Admin",
    address: "1 Coding Blvd",
    isAdmin: true,
  });
  
  const chris = await User.create({
    email: "chris@gmail.com",
    password: "123",
    firstName: "Chris",
    lastName: "Tomshack",
    address: "2 Coding Blvd",
    isAdmin: true,
  });

  const brian = await User.create({
    email: "brian@gmail.com",
    password: "123",
    firstName: "Brian",
    lastName: "Lee",
    address: "3 Coding Blvd",
    isAdmin: true,
  });

  const jump1 = await Jumps.findByPk(1); 
const jump2 = await Jumps.findByPk(2); 
const jump3 = await Jumps.findByPk(3); 

await jump1.setUser(chris);
await jump2.setUser(chris);
await jump3.setUser(brian);
}


/*
 We've separated the `seed` function from the `runSeed` function.
 This way we can isolate the error handling and exit trapping.
 The `seed` function is concerned only with modifying the database.
*/
async function runSeed() {
  console.log('seeding...')
  try {
    await seed()
  } catch (err) {
    console.error(err)
    process.exitCode = 1
  } finally {
    console.log('closing db connection')
    await db.close()
    console.log('db connection closed')
  }
}

/*
  Execute the `seed` function, IF we ran this module directly (`node seed`).
  `Async` functions always return a promise, so we can use `catch` to handle
  any errors that might occur inside of `seed`.
*/
if (module === require.main) {
  runSeed()
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed
