window.addEventListener("load",function()
{
p = document.querySelector("p");



let name =localStorage.getItem("name");
let email =localStorage.getItem("email");
let password=localStorage.getItem("password");
let age =localStorage.getItem("age");
p.innerHTML=`hi ${name} your mail is ${email}  your age is ${age}`
});