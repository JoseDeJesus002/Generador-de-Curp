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
var img = document.getElementById("correcto");
var img2 = document.getElementById("error");

function comprobarRadio(vector) {
  var respuestasBuenas = 0;
  var respuestasMalas = 0;

  for (j = 0; j < vector.length; j++) {
    var radios = document.getElementsByName(j + 1);
    for (i = 0; i < radios.length; i++) {
      mostrar();
      if (radios[i].checked) {
        var valor = radios[i].value;
        if (valor == vector[j]) {
          //img.style.visibility = "visible";
          //img2.style.visibility = "hidden";
          respuestasBuenas++;
        } else {
          //img.style.visibility = "hidden";
          //img2.style.visibility = "visible";
          respuestasMalas++;
        }
      }
    }
  }
  promedio = Math.round((respuestasBuenas * 100) / 10);

  if (promedio >= 70) {
    alert("Aprobaste con un " + promedio + "%");
  } else {
    alert("Reprobaste");
  }
  if (promedio >= 90) {
    alert("Obtuviste beca");
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

function mostrar(){
for(x = 0; x < respuestaCorrecta.length; x++)
{
  if (valor == respuestaCorrecta[x]) {
    document.getElementById("correcto").style.display = "block";
  } else{
    document.getElementById("error").style.display = "block";
  }
}
  
}