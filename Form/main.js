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