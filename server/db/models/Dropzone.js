const Sequelize = require('sequelize');
const db = require('../db');

const Dropzone = db.define('dropzones', {
    name: {
        type: Sequelize.STRING,
        validate: {
            notEmpty: true,
        },
        
    },

    // email: {
    //     type: Sequelize.STRING,
    //     unique: true,
    //     allowNull: false,
    //     validate: {
    //       isEmail: true,
    //       notEmpty: true,
    //     },
    //   },
    
    //   password: {
    //     type: Sequelize.STRING,
    //     allowNull: false,
    //   },

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

      isDropzone: {
        type: Sequelize.BOOLEAN,
        defaultValue: true,
      },

      isAdmin: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },

});

module.exports = Dropzone;

// /**
//  * instanceMethods
//  */
//  Dropzone.prototype.correctPassword = function(candidatePwd) {
//     //we need to compare the plain version to an encrypted version of the password
//     return bcrypt.compare(candidatePwd, this.password);
//   }
  
//   Dropzone.prototype.generateToken = function() {
//     return jwt.sign({id: this.id}, process.env.JWT)
//   }
  
//   /**
//    * classMethods
//    */
//   Dropzone.authenticate = async function({ email, password }){
//       const dropzone = await this.findOne({where: { email }})
//       if (!dropzone || !(await dropzone.correctPassword(password))) {
//         const error = Error('Incorrect email/password');
//         error.status = 401;
//         throw error;
//       }
//       return dropzone.generateToken();
//   };
  
//   Dropzone.findByToken = async function(token) {
//     try {
//       const {id} = await jwt.verify(token, process.env.JWT)
//       const dropzone = Dropzone.findByPk(id)
//       if (!dropzone) {
//         throw 'nooo'
//       }
//       return dropzone
//     } catch (ex) {
//       const error = Error('bad token')
//       error.status = 401
//       throw error
//     }
//   }
  
//   /**
//    * hooks
//    */
//   const hashPassword = async(dropzone) => {
//     //in case the password has been changed, we want to encrypt it with bcrypt
//     if (dropzone.changed('password')) {
//         dropzone.password = await bcrypt.hash(dropzone.password, SALT_ROUNDS);
//     }
//   }
  
//   Dropzone.beforeCreate(hashPassword)
//   Dropzone.beforeUpdate(hashPassword)
//   Dropzone.beforeBulkCreate(dropzones => Promise.all(dropzones.map(hashPassword)))
  