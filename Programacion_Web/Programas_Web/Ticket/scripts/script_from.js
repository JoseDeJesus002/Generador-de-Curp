//almacenar respuestas correctas en el vector
var repsuestaCorrecta = new Array("a1", "b1" ,"c3" ,"d3","f3");

function comprobarRadio(vector)
{
    var respuestasBuenas=0;
    var respuestasMalas=0;

    for(j=0;j< vector.length; j++)
    {
        var radios = document.getElementsByName(j+1);
        for(i=0; i< radios.length; i++)
        {
            if(radios[i].checked)
            {
                var valor= radios[i].value;
                if(valor == vector[j] )
                {
                    respuestasBuenas++;
                    break;
                }else
                {
                    respuestasMalas++;
                    break
                }
            }
        }
    }
    document.getElementById("resultasdos").innerHTM=" Respuestas correctas" + " "+ "<b>" + respuestasBuenas + "</b>" + "</br>" + "Respuestas malas"+ " " + respuestasMalas;
}


