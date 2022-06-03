
const email = document.getElementById("email");
const emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
const password = document.getElementById("password");
const form = document.getElementById("form");

form.addEventListener("submit",validate);

function validarLogin(e){
  e.preventDefault();

 variables 
    
  let error = document.getElementById("error");
  let result = false;
  let warnings = "";
  error.innerHTML = "";
  
/* validación de datos */
   if (!emailRegex.test(email.value)) {
     warnings += `El correo electrónico no es válido <br>`;
     result = true;
   }
    if(password.value.length == ""){
     warnings +=`la contraseña no debe estar vacía <br>`;
     result = true;
   }
   if (result) {
     error.innerHTML = warnings;
   } else {
     error.innerHTML = "Campos completados correctamente...";
   }

};

/* mostrar y ocultar la contraseña  */

const showPassword = document.getElementById("show-pass");

showPassword.addEventListener("click",()=>{
  if(password.type === "password"){
     password.type = "text";
     showPassword.classList.replace("fa-eye-slash","fa-eye");
  }else{
     password.type = "password";
     showPassword.classList.replace("fa-eye","fa-eye-slash");
  }
});

function ValidarLogin(a){
  a.preventDefault();
  /*var email=document.getElementById('username').value;
  var password=document.getElementById('password').value;
  var em = localStorage.getItem(newClient[email]);
  var data = JSON.parse(newClient[password]);
  if(em == null){
      XPathResult.innerHTML = 'wrong';
  }else if(newClient[email] == data.){

  }*/

  var email=document.getElementById('email').value;
  var pass=document.getElementById('password').value;
  var em = localStorage.getItem(email);
  var data = JSON.stringify(newClient);
  console.log();
  if(em == null){
      result.innerHTML = 'wrong';
  }else if(email == data.pemail && pass == data.ppassword){
      result.innerHTML = 'loged in';
      window.open("index_dashboard.html");
  }else{
      result.innerHTML = 'wrong password';
  }
}

function validate(){
  var user = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  if(user == 'User@gmail.com' && password == '123'){
      window.open("index_dashboard.html");
  }else{
      alert("Usuario Inválido");
  }
}