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
var bien = "✅";
var mal = "❌";
var imagenes = new Array();
function comprobarRadio(vector) {
  var respuestasBuenas = 0;
  var respuestasMalas = 0;
  for (j = 0; j < vector.length; j++) {
    var radios = document.getElementsByName(j + 1);
    for (i = 0; i < radios.length; i++) {
      if (radios[i].checked) {
        var valor = radios[i].value;
        if (valor == vector[j]) {
          imagenes[j] = bien;
          respuestasBuenas++;
        } else {
          imagenes[j] = mal;
          respuestasMalas++;
        }
      }
    }
  }
  for (x = 0; x < imagenes.length; x++) {
    if (radios[i] == vector[j]) {
      document.getElementById(x + 1).innerHTML = imagenes[x];
    } else {
      document.getElementById(x + 1).innerHTML = imagenes[x];
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
    " Correct answers" +
    " " +
    "<b>" +
    respuestasBuenas +
    "</b>" +
    "</br>" +
    "   wrong answers" +
    " " +
    respuestasMalas;
}
