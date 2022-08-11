//this is the access point for all things database related!

const db = require('./db');

const User = require('./models/User');
const Jumps = require('./models/Jumps');

// ASSOCIATIONS
User.hasMany(Jumps);
Jumps.belongsTo(User);

module.exports = {
  db,
  models: {
    User,
    Jumps,
  },
}
