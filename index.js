
const express= require('express');
const bodyParser= require('body-parser');
var path = require('path');

const app= express();
const MongoClient = require('mongodb').MongoClient
var mongojs = require('mongojs');
var db = mongojs('localhost/userProfile');
//var MongoClient = require('mongodb').MongoClient;
//var url = "mongodb://localhost:27017/";
__dirname ='./ui/';
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
let connect;
let dbo;
let collection;

// connect= MongoClient.connect(url,function(err,db){
//  if(err){console.log(err);}
//  else{
//    db.db('userProfile').collection('countries').find().toArray()
//  return db.db('userProfile').collection('countries').find().toArray();
// }
// });

app.use(bodyParser.urlencoded({extended:false}));
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
app.get('/api/search/',function(req, res) {
 
  countries= db.countries.find({}).toArray(function (err, docs) { 
  if(err){
   console.log(err);
   return err;
 }else{
  res.send({countries: docs.filter(doc=>{
     if(doc.country.toLowerCase().indexOf(req.query.country.toLowerCase())>-1){
        return doc.country
     }
   })
 })
 }
})

})
