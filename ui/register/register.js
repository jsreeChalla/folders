 /* var arr = ["Afghanistan","Albania","Algeria","Andorra","Angola","Anguilla","Antigua & Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia","Bosnia & Herzegovina","Botswana","Brazil","British Virgin Islands","Brunei","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Canada","Cape Verde","Cayman Islands","Central Arfrican Republic","Chad","Chile","China","Colombia","Congo","Cook Islands","Costa Rica","Cote D Ivoire","Croatia","Cuba","Curacao","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea","Eritrea","Estonia","Ethiopia","Falkland Islands","Faroe Islands","Fiji","Finland","France","French Polynesia","French West Indies","Gabon","Gambia","Georgia","Germany","Ghana","Gibraltar","Greece","Greenland","Grenada","Guam","Guatemala","Guernsey","Guinea","Guinea Bissau","Guyana","Haiti","Honduras","Hong Kong","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Isle of Man","Israel","Italy","Jamaica","Japan","Jersey","Jordan","Kazakhstan","Kenya","Kiribati","Kosovo","Kuwait","Kyrgyzstan","Laos","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macau","Macedonia","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Marshall Islands","Mauritania","Mauritius","Mexico","Micronesia","Moldova","Monaco","Mongolia","Montenegro","Montserrat","Morocco","Mozambique","Myanmar","Namibia","Nauro","Nepal","Netherlands","Netherlands Antilles","New Caledonia","New Zealand","Nicaragua","Niger","Nigeria","North Korea","Norway","Oman","Pakistan","Palau","Palestine","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal","Puerto Rico","Qatar","Reunion","Romania","Russia","Rwanda","Saint Pierre & Miquelon","Samoa","San Marino","Sao Tome and Principe","Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Slovakia","Slovenia","Solomon Islands","Somalia","South Africa","South Korea","South Sudan","Spain","Sri Lanka","St Kitts & Nevis","St Lucia","St Vincent","Sudan","Suriname","Swaziland","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","Timor L'Este","Togo","Tonga","Trinidad & Tobago","Tunisia","Turkey","Turkmenistan","Turks & Caicos","Tuvalu","Uganda","Ukraine","United Arab Emirates","United Kingdom","United States of America","Uruguay","Uzbekistan","Vanuatu","Vatican City","Venezuela","Vietnam","Virgin Islands (US)","Yemen","Zambia","Zimbabwe"];*/

const url ="/api/search/";
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

}
}
function searchCountries(event){
    var country=event.target.value;
  fetch(url+country).then(data =>{
    console.log(data);
  }).catch(error=>{
    console.log(error);
  })

  var div= document.createElement("DIV");
  div.setAttribute("id",event.target.id+"autocomplete-list");
  event.target.parentNode.appendChild(div);

}
// function autocomplete(){
//   var currentFocus;
//   var inp=document.getElementById("country")
//   inp.addEventListener("input",function(e){
//     let val= this.value;
//     let div,listElem;
//     closeAllLists();
//     if(!val){
//       return false;
//     }
//     currentFocus=-1;
//     div= document.createElement("DIV");
//     div.setAttribute("id",this.id+"autocomplete-list");
//     this.parentNode.appendChild(div);
//     for(i=0;i<arr.length;i++){
//       if(arr[i].substr(0,val.length).toUpperCase()==val.toUpperCase()){
//         listElem=document.createElement("DIV");
//         listElem.innerHTML="<strong>"+arr[i].substr(0,val.length);
//         listElem.innerHTML+=arr[i].substr(val.length);
//         listElem.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
//         listElem.addEventListener("click",function(e){
//         inp.value = this.getElementsByTagName("input")[0].value;
//         closeAllLists();
//       });
//       div.appendChild(listElem);
//       }
//     }
//   });
//   inp.addEventListener('keydown',function(e){
//     let curr = document.getElementById(this.id+"autocomplete-list");
//     if(curr) curr= curr.getElementsByTagName('div');
//     if(e.keyCode == 40){
//       currentFocus++;
//       addActive(curr);
//     }else if(e.keyCode==38){
//       currentFocus --;
//       addActive(curr)
//     }else if (e.keyCode ==13) {
//       e.preventDefault();
//       if(currentFocus>-1){
//         if(curr) currr[currentFocus].click();
//       }
//     }
//   });
//   function addActive(x){
//     if(!x) return false;
//     removeActive(x);
//     if (currentFocus >= x.length) currentFocus = 0;
//     if (currentFocus < 0) currentFocus = (x.length - 1);
//     x[currentFocus].classList.add("autocomplete-active");
//   }
//   function removeActive(x){
//     for (var i = 0; i < x.length; i++) {
//     x[i].classList.remove("autocomplete-active");
//   }
// }
// function closeAllLists(elmnt) {
//   var x = document.getElementsByClassName("autocomplete-items");
//   for (var i = 0; i < x.length; i++) {
//     if (elmnt != x[i] && elmnt != inp) {
//       x[i].parentNode.removeChild(x[i]);
//     }
//   }
// }
// //
// //  autocomplete(document.getElementById("country"), countries);
// }
