var loginUrl="http://localhost:3000/api/loginPage/";
function login(event){
    event.preventDefault();
    var name=document.getElementById('name').value;
    var pword=document.getElementById('pword').value;
    var options={
        method:'POST',
        headers:{Accept: 'application/json',
        'Content-Type': 'application/json'},
        data:JSON.stringify({name:name,pword:pword})
    }
    $.post(loginUrl,options,function(data){
    if(data.status!=200){
        alert(data.message)
    }else{
        window.location.href="../main.css";
    }
    })
}