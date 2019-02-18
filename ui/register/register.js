
const registerUrl="http://localhost:3000/api/user/";
const searchUrl ="http://localhost:3000/api/search/?country=";
function submitForm(event){
  event.preventDefault();
  var flag=true;
  var email=document.getElementById('email').value;
  var name= document.getElementById('name').value;
  var pword=document.getElementById('pword').value;
  var pword1=document.getElementById('pword1').value;
  var age=document.getElementById('age').value;
  var pin=document.getElementById('pin').value;
  var country=document.getElementById('country').value;
  if(!name||!email||!pword||!pword1||!country){
    alert("Name, passwords and country have to be mentioned");
    flag=false;
  }
  else if(pword!==pword1){
    flag=false;
    alert("Passwords don't match");
  }else if(flag){
  var object={
    name:name,
    email:email,
    password:pword,
    age:age,
    pin:pin,
    country:country
  };
  var options={
    method:'POST',
    headers:{Accept: 'application/json',
    'Content-Type': 'application/json'},
    body:JSON.stringify(object)
  };
  //console.log(JSON.stringify(object));
 $.post(registerUrl,options,function(data,status){
   console.log(data,status)
  if(data.status!=200){
    alert(data.message)
  }
   else{
     window.location.href='/';
   }
 }) 
}
}
function searchCountries(event){
  var datalist = document.getElementById('countries');
    var country=event.target.value;
    fetch(searchUrl+country).then(response =>{
    response.text().then(text =>{
      var countriesArray=JSON.parse(text).countries
      for(var i=0;i<countriesArray.length;i++){
        datalist.innerHTML="<option>"+countriesArray[i].country+"</option>";
      }
    })
  }).catch(error=>{
    console.log(error);
  })
}
