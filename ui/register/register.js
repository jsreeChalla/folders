 /* var arr = ["Afghanistan","Albania","Algeria","Andorra","Angola","Anguilla","Antigua & Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia","Bosnia & Herzegovina","Botswana","Brazil","British Virgin Islands","Brunei","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Canada","Cape Verde","Cayman Islands","Central Arfrican Republic","Chad","Chile","China","Colombia","Congo","Cook Islands","Costa Rica","Cote D Ivoire","Croatia","Cuba","Curacao","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea","Eritrea","Estonia","Ethiopia","Falkland Islands","Faroe Islands","Fiji","Finland","France","French Polynesia","French West Indies","Gabon","Gambia","Georgia","Germany","Ghana","Gibraltar","Greece","Greenland","Grenada","Guam","Guatemala","Guernsey","Guinea","Guinea Bissau","Guyana","Haiti","Honduras","Hong Kong","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Isle of Man","Israel","Italy","Jamaica","Japan","Jersey","Jordan","Kazakhstan","Kenya","Kiribati","Kosovo","Kuwait","Kyrgyzstan","Laos","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macau","Macedonia","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Marshall Islands","Mauritania","Mauritius","Mexico","Micronesia","Moldova","Monaco","Mongolia","Montenegro","Montserrat","Morocco","Mozambique","Myanmar","Namibia","Nauro","Nepal","Netherlands","Netherlands Antilles","New Caledonia","New Zealand","Nicaragua","Niger","Nigeria","North Korea","Norway","Oman","Pakistan","Palau","Palestine","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal","Puerto Rico","Qatar","Reunion","Romania","Russia","Rwanda","Saint Pierre & Miquelon","Samoa","San Marino","Sao Tome and Principe","Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Slovakia","Slovenia","Solomon Islands","Somalia","South Africa","South Korea","South Sudan","Spain","Sri Lanka","St Kitts & Nevis","St Lucia","St Vincent","Sudan","Suriname","Swaziland","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","Timor L'Este","Togo","Tonga","Trinidad & Tobago","Tunisia","Turkey","Turkmenistan","Turks & Caicos","Tuvalu","Uganda","Ukraine","United Arab Emirates","United Kingdom","United States of America","Uruguay","Uzbekistan","Vanuatu","Vatican City","Venezuela","Vietnam","Virgin Islands (US)","Yemen","Zambia","Zimbabwe"];*/
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
  //   var k=await fetch(registerUrl,options).then(response=>response.json()).then(data=>console.log(data))
  // .catch((err)=>console.log(err))
  // return k;
  // fetch(registerUrl,
  //   {
  //     method:'POST',
  //     headers:new Headers(),
  //     body:JSON.stringify(object)
  //   }).then(res=>res.json())
  //   .then((data)=> console.log(data)).catch((err) => console.log(err))
  
 
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
