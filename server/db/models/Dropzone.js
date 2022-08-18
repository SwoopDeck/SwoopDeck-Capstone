const Sequelize = require('sequelize');
const db = require('../db');

const Dropzone = db.define('dropzones', {
    name: {
        type: Sequelize.STRING,
        validate: {
            notEmpty: true,
        },
        
    },

    address: {
        type: Sequelize.STRING,
        validate: {
            notEmpty: true,
        },
    },

    phoneNumber: {
        type: Sequelize.STRING,
        validate: {
            notEmpty: true,
        },
    },

});

module.exports = Dropzone;

