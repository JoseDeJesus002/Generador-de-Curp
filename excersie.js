
var ns,ne,ni = 0;
var array = [];

ns = prompt("Ingresa el numero de incio");
ne = prompt("Ingresa numero final");
ni = prompt("Ingresa numero de aleatorios");

serie(ns,ne,ni);

function serie(ns,ne,ni)
{
    if(ns>0){
    for(x=0;x<ni;x++)
    {
    array.push(getRandomIntInclusive(ns,ne));
    }
}else{
    console.log("no");
}

    for(var y=0;y<array.length; y++)
    {
        console.log(array[y]);
    }
}

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  // Ahora, tanto el valor mínimo como el máximo están incluidos en el resultado.
  