/*function SoloNumeros(evt)
    {
    if(window.event){
    keynum = evt.keyCode;
    }
    else{
    keynum = evt.which;
    }

    if((keynum > 47 && keynum < 58) || keynum == 8 || keynum== 13)
    {
    return true;
    }
    else
    {
    alert("Ingresar solo numeros");
  return false;
  }
}
*/

var btnRegistrar=document.querySelector('#btnregister');
    btnRegistrar.addEventListener('click',function(){
        window.location.assign("index-register.html");
    })

function validarEmail(valor) {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3,4})+$/.test(valor)){
   alert("La dirección de email " + valor + " es correcta.");
  } else {
   alert("La dirección de email es incorrecta.");
  }
}

function showContent() {
  element = document.getElementById("content");
  check = document.getElementById("checked");
  if (check.checked) {
    element.style.display='block';
  }else{
      element.style.display='none';
  }
}

function add(){
  //localStorage.setItem('usuario', 'name');
let cat=localStorage.getItem('usuario');
localStorage.clear();
console.log(cat);
}



