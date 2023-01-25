window.addEventListener("load",function(){

  
///selectors 
let submit = document.querySelector("#submit");
let name = document.querySelector("#name");
let email = document.querySelector("#email");
let password = document.querySelector("#password");
let age = document.querySelector("#age");
let form = document.querySelector("form");



submit.onclick=function()
{
    
   
    localStorage.setItem("name",name.value);
    localStorage.setItem("email",email.value);
    localStorage.setItem("password",password.value);
    localStorage.setItem("age",age.value);
    

      
    
}

    
});

