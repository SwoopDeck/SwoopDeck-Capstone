const express = require('express');
const {
  models: { User },
} = require('../db');

// store all of our functions that will act as middleware between our request and our response
// expect 'bad token' when this works
const requireToken = async (req, res, next) => {
  try {
    const token = req.headers.authorization;
    const user = await User.findByToken(token);
    req.user = user;
    next();
  } catch (err) {
    next(err);
  }
};

// const requireTokenDZ = async (req, res, next) => {
//   try {
//     const token = req.headers.authorization;
//     const dropzone = await Dropzone.findByToken(token);
//     req.dropzone = dropzone;
//     next();
//   } catch (err) {
//     next(err);
//   }
// };

const isAdmin = (req, res, next) => {
  // if we get past requireToken, we can guarentee we are a user
  // we have access to req.user
  if (!req.user.isAdmin) {
    return res.status(403).send('You shall not pass!');
  } else {
    next();
  }
};

const isDropzone = (req, res, next) => {
  // if we get past requireToken, we can guarentee we are a user
  // we have access to req.user
  if (!req.user.isDropzone) {
    return res.status(403).send('You are not a Dropzone!');
  } else {
    next();
  }
};

module.exports = {
  requireToken,
  isAdmin,
  isDropzone,
};