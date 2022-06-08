var express = require('express');
var app = express();
var authModel = require('../model/auth-model');
var bcrypt = require('bcrypt');
var Cryptojs = require('crypto-js');
 
const decryptKey = 'ayush'; 

//register user
// app.post('/register', function(req, res) {
//     const password = req.body.password;
//     const saltRounds = 10;
//     bcrypt.hash(password, saltRounds, function(err, hash) {
//         req.body.password = hash;
//         authModel.signup(req.body, function(err, result) {
//             res.json({ data: result, error: err })
//         });
//     });
// });

// //login user
// app.post('/login', function(req, res, next) {
//     passport.authenticate('local', {session: false}, function(err, user, info) {
        
//         if (err) { return next(err); }

//         if ( ! user) {
//             return res.send("errorrrr");
//         }

//         const payload = {
//             full_name: user.full_name,
//             email: user.email
//         }
//         const options = {
//             subject: `${user.id}`,
//             expiresIn: 3600
//         }
//         const token = jwt.sign(payload, 'secret123', options);
        
//         res.json({token});

//     })(req, res, next);
// });





// const users=[];

// app.get('/login', function(req,res){
//     res.send(users);
// })

// app.post('/login', function(req,res){
//     try {

//         bcrypt.genSalt(10,function(err,salt){
//             bcrypt.hash(req.body.password, salt, function(err,hash){
//                 console.log(hash)
//                 user={name:req.body.name,password:hash};
//                 users.push(user);
//             })
//         })
//     } catch (error) {
//     }
//     res.send("")
// })

//Login
app.post('/login', function(req, res){
    var passwordByte = Cryptojs.AES.decrypt(req.body.password, decryptKey );
    passwordByte = passwordByte.toString(Cryptojs.enc.Utf8)
    console.log(passwordByte)
 res.send({name:"dev"})
})


//Register
app.post('/register', function(req, res){
    var passwordData = Cryptojs.AES.decrypt(req.body.password, decryptKey);
    var passwordData = passwordData.toString(Cryptojs.enc.Utf8) //dycrypt by cryptojs
    console.log(passwordData)
    const saltRounds = 10;
    //encrypt by nodejs for DataBase
    bcrypt.hash(passwordData, saltRounds, function(err, hash) {
        req.body.passwordData = hash;
        authModel.signup(req.body, function(err, result) {
            res.json({ data: result, error: err })
        });
    });

})

module.exports = app;