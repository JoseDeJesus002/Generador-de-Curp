function SoloNumeros(evt)
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
function validarEmail(valor) {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3,4})+$/.test(valor)){
   alert("La dirección de email " + valor + " es correcta.");
  } else {
   alert("La dirección de email es incorrecta.");
  }
}

function mayor(){
  let anios=document.getElementById('years').value;
  if(anios >= 18){
    alert("Eres mayor de edad");
  }else{
    alert("Menor de edad");
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