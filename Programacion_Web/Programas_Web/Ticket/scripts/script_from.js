//almacenar respuestas correctas en el vector
var respuestaCorrecta = [
  "a3",
  "b2",
  "c1",
  "d3",
  "e1",
  "f3",
  "g2",
  "h2",
  "i3",
  "j3",
];
var img = document.getElementById("correct");
var img2 = document.getElementById("error");

function comprobarRadio(vector) {
  var respuestasBuenas = 0;
  var respuestasMalas = 0;

  for (j = 0; j < vector.length; j++) {
    var radios = document.getElementsByName(j + 1);
    for (i = 0; i < radios.length; i++) {
      if (radios[i].checked) {
        var valor = radios[i].value;
        if (valor == vector[j]) {
        img.style.visibility = "visible";
        img2.style.visibility = "hidden";  
        respuestasBuenas++;
          break;
        } else {
            img2.style.visibility = "visible";
            img.style.visibility = "hidden";
          respuestasMalas++;
          break;
        }
      }
    }
  }
  document.getElementById("resultados").innerHTML =
    " Respuestas correctas" +
    " " +
    "<b>" +
    respuestasBuenas +
    "</b>" +
    "</br>" +
    "Respuestas malas" +
    " " +
    respuestasMalas;
}
