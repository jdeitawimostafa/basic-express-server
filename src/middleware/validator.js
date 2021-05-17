'use strict';



function nameHandler(req,res,next){
  if(req.query.name){
    next();
  }
  else {
    next('Something error , try again');
  }
}

module.exports =  nameHandler;