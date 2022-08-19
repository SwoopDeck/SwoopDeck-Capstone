const Sequelize = require("sequelize");
const db = require("../db");

const JumpRecords = db.define("jumpRecords", {
  jumpNumber: {
    type: Sequelize.INTEGER,
  },

  date: {
    type: Sequelize.DATEONLY,
  },

  aircraft: {
    type: Sequelize.TEXT,
  },

  equipment: {
    type: Sequelize.TEXT,
  },

  exitAltitude: {
    type: Sequelize.INTEGER,
  },

  pullAltitude: {
    type: Sequelize.INTEGER,
  },

  freeFallTime: {
    type: Sequelize.INTEGER,
  },

  jumpers: {
    type: Sequelize.INTEGER,
  },

  description: {
    type: Sequelize.TEXT,
  },

  // jumpType: {
  //   type: Sequelize.ENUM('belly', 'angle', 'head up', 'head down', 'formation','freefly', 'high altitude', 'aff', 'balloon', 'heli','high pull','crw'),
  // },
});

module.exports = JumpRecords;
