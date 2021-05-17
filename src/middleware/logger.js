'use strict';
module.exports = (req,res,next) => {
  console.log('Request information', req.method, req.path);
  next();
};