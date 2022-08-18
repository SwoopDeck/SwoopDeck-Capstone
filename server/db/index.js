const db = require('./db');

const User = require('./models/User');
const JumpRecord = require('./models/JumpRecord');
const Load = require('./models/load');
const Dropzone = require('./models/Dropzone')

// ASSOCIATIONS
User.hasMany(JumpRecord);
User.hasMany(Load);

Dropzone.hasMany(Load);

Load.hasOne(Dropzone);
Load.hasMany(JumpRecord);

JumpRecord.belongsTo(User);
JumpRecord.belongsTo(Load);
JumpRecord.belongsTo(Dropzone);


JumpRecord.belongsTo(User);

module.exports = {
  db,
  models: {
    User,
    JumpRecord,
    Load,
    Dropzone
  },
}
