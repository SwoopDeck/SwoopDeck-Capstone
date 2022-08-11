const Sequelize = require('sequelize');
const db = require('../db');

const Jumps = db.define('jumps', {
  jumpNumber: {
    type: Sequelize.INTEGER,
    // autoIncrement: true,
    // allowNull: false,
    // validate: {
    //   notEmpty: true,
    // },
  },
  location: {
    type: Sequelize.STRING, // CAN CHANGE TO SEQUELIZE.ENUM & INCLUDE LIST OF DROPZONES TO SELECT FROM
    allowNull: false,
    validate: {
        notEmpty: true,
      },
  },
  aircraft: {
    type: Sequelize.TEXT,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  equipment: {
    type: Sequelize.TEXT,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  exitAltitude: {
    type: Sequelize.INTEGER,
    allowNull: false,
    validate: {
      notEmpty: true,
      min: 2000,
      max: 20000,
    },
  },
  pullAltitude: {
    type: Sequelize.INTEGER,
    allowNull: false,
    validate: {
      notEmpty: true,
      min: 500,
      max: 20000,
    },
  },
  freeFallTime: {
    type: Sequelize.INTEGER,
    allowNull: false,
    validate: {
      notEmpty: true,
      min: 0,
    },
  },
  jumpers: {
    type: Sequelize.ENUM('solo','2-way','3-way','4-way','5+'),
  },
  description: {
    type: Sequelize.TEXT,
  },
  jumpType: {
    type: Sequelize.ENUM('belly', 'angle', 'head up', 'head down', 'formation','freefly', 'high altitude', 'aff', 'balloon', 'heli','high pull','crw'),
  },
});

module.exports = Jumps;
