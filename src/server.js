'use strict';

const express = require('express');
const app = express();

const notFound = require('./error-handlers/404.js');
const errHandler = require('./error-handlers/500.js');
const logger = require('./middleware/logger.js');
const validator = require('./middleware/validator.js');

app.use(logger);




app.get('/person',validator,(req,res) => {
  res.json({
    name:req.query.name,
  });
});

function start(port){
  app.listen(port,() => {
    console.log(`listining to port ${port}`);
  });
}

app.use('*',notFound);
app.use(errHandler);

module.exports = {
  server:app,
  start:start,
};

