var express = require('express');
var router = express.Router();
var User = require('./user');

__dirname ='/ui/';
// GET route for reading data

// router.post('/',function(req,res,next){
//   var userData= {
//       email: req.body.email,
//       username: req.body.username,
//       password: req.body.password,
// };
// User.create(userData, function (error, user) {
//       if (error) {
//         return next(error);
//       } else {
//         req.session.userId = user._id;
//         return res.redirect('/profile');
//       }
// });
// })
