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

    isUser: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
    
      isDropzone: {
        type: Sequelize.BOOLEAN,
        defaultValue: true,
      },

});

module.exports = Dropzone;

