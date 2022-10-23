var lo = prompt("ingresa un numero: ");
number(lo);

function number(piramide){
    let resultado = "";
    for(i=0;i<piramide;i++)
    {
        resultado +=i+1;
        console.log(resultado); 
    }
}