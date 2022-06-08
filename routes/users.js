var express = require('express');
const app = require('../app');
const connection = require('../db');
var router = express.Router();
var db = require('../db')
var middl = require('../middleware/auth')
const model=require('../model/users')

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

//get from id
router.get('/getX/:id',model.fun );

//get from query
router.get('/get', function (req, res, next) {

});

//get all data
router.get('/getdata', middl, (req, res) => {
  // console.log('Get All users');
  let qrr = `SELECT * from userreg`;
  db.query(qrr, (err, results) => {
    if (err) {
      console.log(err, 'errs');
    }
    if (results.length > 0) {
      res.send({
        message: 'All users Data',
        data: results
      });
    };
  });
});

//post data
// router.post('/postdata', (req, res) => {
//   console.log('Post Data Sucessful');
//   let fullName = req.body.full_name;
//   let eMail = req.body.email;
//   let Password = req.body.password;

//   let qr = `insert into userreg(full_name,email,password)values('${fullName}','${eMail}','${Password}')`;
//   db.query(qr, (err, results) => {
//     if (err) { console.log(err) }
//     res.send({
//       message: "Data added successful",
//       data: results
//     });
//   });
// });

//register post data
router.post('/postdata', function (req, res) {
  return db.query('insert into userreg (full_name,email,password) values (?,?,?)', [req.body.full_name, req.body.email, req.body.password], function (err, rows1) {
    if (err) {
      console.error('error connecting: ' + err);
      return res.json(err);
    }
    //req.session.destroy(); 
    return res.json(rows1);
  });
});


//for test
router.get('/pdata', (req, res) => {
  console.log(req.body);
  res.send("posting data")
});

module.exports = router;
