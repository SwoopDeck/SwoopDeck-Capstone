const db = require("./db");

const User = require("./models/User");
const Load = require("./models/load");
const Dropzone = require("./models/Dropzone");
const JumpRecords = require("./models/JumpRecords");

// ASSOCIATIONS
// User.hasMany(JumpRecord);
// User.hasMany(Load);

// Dropzone.hasMany(Load);

// Load.hasOne(Dropzone);
// Load.hasMany(JumpRecord);

// JumpRecord.belongsTo(User);
// JumpRecord.belongsTo(Load);
// JumpRecord.belongsTo(Dropzone);

// JumpRecord.belongsTo(User);

User.belongsToMany(Load, { through: JumpRecords });
Load.belongsToMany(User, { through: JumpRecords });

Dropzone.hasMany(Load);
Load.belongsTo(Dropzone);

module.exports = {
  db,
  models: {
    User,
    JumpRecords,
    Load,
    Dropzone,
  },
};
