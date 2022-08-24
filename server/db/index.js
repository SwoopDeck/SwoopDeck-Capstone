const db = require("./db");

const User = require("./models/User");
const Load = require("./models/Load");
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

// User.belongsToMany(Load, { through: JumpRecords });
// Load.belongsToMany(User, { through: JumpRecords });

Dropzone.hasMany(Load);
Load.belongsTo(Dropzone);

User.hasMany(JumpRecords);
JumpRecords.belongsTo(User);

JumpRecords.belongsTo(Load);
Load.hasMany(JumpRecords);

JumpRecords.belongsTo(Dropzone);
Dropzone.hasMany(JumpRecords);

Dropzone.hasOne(User);
User.belongsTo(Dropzone);

module.exports = {
  db,
  models: {
    User,
    JumpRecords,
    Load,
    Dropzone,
  },
};
