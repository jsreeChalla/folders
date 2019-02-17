// var mongoose = require('mongoose');
// var session = require('express-session');
// var MongoStore = require('connect-mongo')(session);
const express= require('express');
const bodyParser= require('body-parser');
const http =require('http');
const fs = require('fs');
const app= express();
const MongoClient = require('mongodb').MongoClient
//var url = "mongodb://localhost:27017/";
__dirname = './ui/';

//mongoose.connect(url);
// app.use(session({
//   secret: 'work hard',
//   resave: true,
//   saveUninitialized: false
//   saveUninitialized: false,
//   store: new MongoStore({
//     mongooseConnection: db
//   })
// }));

app.listen(3000, function() {
  console.log('listening on 3000')
});

// app.get('/', function (req, res, next) {
//   return res.sendFile(path.join(__dirname + '/login/login.html'));
// });

app.use(bodyParser.urlencoded({extended:true}));
app.get('/', function(req, res) {
  res.sendFile('login/login.html',{root:__dirname});
});
app.get('/login.js', function(req, res) {
  res.sendFile('login/login.js',{root:__dirname});
});
app.get('/main.css', function(req, res) {
  res.sendFile('main.css',{root:__dirname});
});
app.get('/register.html', function(req, res) {
  res.sendFile('register/register.html',{root:__dirname});
});
app.get('/register.js', function(req, res) {
  res.sendFile('register/register.js',{root:__dirname});
})
app.get('/api/search/', function(req, res) {
  console.log(res,req);
})
