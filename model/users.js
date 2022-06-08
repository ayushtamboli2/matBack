var db = require('../db');

const fun=(req, res, next)=> {
    res.send('respond with getx' + req.params.id);
  }
  module.exports={fun}