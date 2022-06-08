var express = require('express');
var router = express.Router();
var app=express();
var db=require('../db');

//session
// var session = require('express-session');
// var MySQLStore = require('express-mysql-session')(session);
// var sessionStore = new MySQLStore({}/* session store options */, db);

// app.use(session({
//   secret: 'codessss',
//   resave: false,
//   saveUninitialized: true,
//   store:sessionStore,
//   cookie: { maxAge:3000000}
// }));


// const userData = {
//   fullname: "Ricardo Arbois",
//   username: "ricky",
//   password: 12345
// };


// app.use('/login',function(req,res){
//   const { username , password} = req.body
//   if(username != userData.username || password != userData.password){
//       return res.status(401).json({
//            error: true,
//            message: "Username or Password is invalid"
//       })
//   }
//   else{
//       req.session.userinfo = userData.fullname
//       res.send("Landing success!")
//   }
// })

// app.use('/logout', function(req,res){
//   req.session.destroy(function(err){
//       if(!err){
//           res.send("Log Out!")
//       }
//   })
// })

// app.use('/', function(req,res){
//   if(req.session.userinfo){
//       res.send("Hello "+ req.session.userinfo + " Welcome")
//   }
//   else{
//    res.send("Not Logged In")
//   }
// })

// app.get('/', function(req, res, next) {
//   if(req.session.count){
//     req.session.count++;
// }else{
//  req.session.count=1;
// }
//   res.send("Hello User ur visit no : "+req.session.count);
 
//   if(req.session.count==20){
//     req.session.destroy();
//   } 
// });



module.exports = app;
