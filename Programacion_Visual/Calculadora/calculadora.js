
var cond;

calculadora();

function calculadora(num1,num2)
{
    let resultado;
    let opc;

    do{
    opc=prompt("Calculadora\nIngresa la operacion:\n1.Suma\n2.resta\n3.multiplicacion\n4.division\n5.Salir");
    if(opc==1)
    {
        num1=prompt("Ingresa el numero 1: ");
        num2=prompt("Ingresa el numero 2: ");
        resultado=parseFloat(num1) + parseFloat(num2);
        alert(resultado);
    }else if(opc == 2)
    {
        num1=prompt("Ingresa el numero 1: ");
        num2=prompt("Ingresa el numero 2: ");
        resultado=parseFloat(num1) - parseFloat(num2);
        alert(resultado);
    }else if(opc == 3)
    {
        num1=prompt("Ingresa el numero 1: ");
        num2=prompt("Ingresa el numero 2: ");
        resultado=parseFloat(num1) * parseFloat(num2);
        alert(resultado);
    }else if(opc == 4)
    {
        num1=prompt("Ingresa el numero 1: ");
        num2=prompt("Ingresa el numero 2: ");
        resultado=parseFloat(num1) / parseFloat(num2);
        alert(resultado);
    }
    }while(opc<5);
}