
const express= require('express');
const mongoose=require('mongoose');
const bodyParser= require('body-parser');
const cors = require('cors');
const path = require('path');

const app= express();
const MongoClient = require('mongodb').MongoClient
var mongojs = require('mongojs');
var db = mongojs('localhost/userProfile');
const route = require('./routes.js'); 

var morgan =require('morgan');
__dirname ='./ui/view/src/';

//app.set('superSecret' ,config.secret);
//app.use(morgan('dev'));
mongoose.connect('mongodb://localhost:27017/ubuntu');
mongoose.connection.on('connected' ,()=>{
  console.log('connected to mongo')
})
mongoose.connection.on('error' ,(err)=>{
 if(err){
  console.log(err)
 }
 
})

app.listen(3000, function() {
  console.log('listening on 3000')
});

app.use(express.static(path.join(__dirname,)))
app.use(cors());

app.use(bodyParser.urlencoded({extended:true}));

app.use('/api',route);


/*app.get('/', function(req, res) {
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
app.get('/dashboard.html', function(req, res) {
  res.sendFile('dashboard.html',{root:__dirname});
})
app.get('/logout',function(req,res){
  req.session.destroy(function(err){  
    if(err){  
        console.log(err); 
        res.send({status:404,message:err.message}); 
    }  
    else  
    {  
      res.send({status:200,message:'Logged off'}); 
    }  
});
});
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
});
async function hashPword(pword){
  var salt=await bcrypt.genSaltSync(10);
  var hash=await bcrypt.hashSync(pword,salt);
  //console.log(salt,hash,"rywehgsdfg")
  return hash;
}
app.post('/api/user/',function(req,res){
  //console.log(req.body.body)
 var userFormData=JSON.parse(req.body.body)
  var existingUsers = db.users.find({$or:[{name:userFormData.name},{email:userFormData.email}]}).toArray(
  async function (err, docs) { 
     if(err){
      res.send(err);
     }else if(docs&&docs.length>0){
       console.log(docs)
        res.send({status:403, message:"user name or email already exists"});
   }else{
    var hash=await hashPword(userFormData.password)
    //console.log(hash,"432534")
    var result=db.users.insert({
      name:userFormData.name,
      password:hash,
      email:userFormData.email,
      age:userFormData.age,
      pincode:userFormData.pincode,
      country:userFormData.country
    });
    res.send({status:200,message:"Registration successful"})
  }
});
});
app.post('/api/loginPage/',function(req,response){
var userFormData=JSON.parse(req.body.data);
db.users.findOne({name:userFormData.name},function(err,docs){
  if(err){return err;}
  else if(!docs){
    response.send({status:403, message:"No user Found"});
  }
  else{
  var r=bcrypt.compare(userFormData.pword,docs.password,function(err,res){
  if(err){
    response.send({status:404,message:"Wrong Password"})
  }else{
    var payload = {};
    var token= jwt.sign(payload,app.get('superSecret'),{
      expiresInMinutes:10
    });
    //console.log(res)
    //req.session.user=docs;
    response.send({token:token,status:200,message:"Welcome"})
  }
})
}
})

});*/
