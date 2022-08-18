const Sequelize = require('sequelize');
const db = require('../db');

const Load = db.define('loads', {
    date: {
        type: Sequelize.DATE,
        validate: {
            notEmpty: true,
        },
    },

    aircraft: {
        type: Sequelize.STRING,
        validate: {
            notEmpty: true,
        },
    },

    slots: {
        type: Sequelize.INTEGER,
    },

    slotsFilled: {
        type: Sequelize.ARRAY,
    },

    isFull: {
        type: Sequelize.BOOLEAN,
    },

    status: {
        type: Sequelize.ENUM('on time', 'delayed', 'closed', 'cancelled'),
    },

});

module.exports = Load;