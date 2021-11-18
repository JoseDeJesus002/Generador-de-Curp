
    var nombre = prompt("Ingresa tu nombre");
    var nom = [];
    var apellido = prompt("Ingresa tu apellido Paterno");
    var ape = [];
    var apellido2 = prompt("Ingresa tu segundo Materno");
    var ape2 = [];
    var fecha = prompt("Ingresa tu fecha de nacimiento AÑO/MES/DIA");
    var fec = [];
    var sexo = prompt("Ingresa tu sexo");
    var sex = [];
    var estado = prompt("Ingresa tu estado");
    var est = [];

    generarcurp();

    function generarcurp() {
        nom.push(nombre);
        ape.push(apellido);
        ape2.push(apellido2);
        fec.push(fecha);
        sex.push(sexo);
        est.push(estado);
        let numero = Math.floor(Math.random() * (99 - 10) + 10);
        let curp = apellido[0]+ apellido[3] + apellido2[0] + nombre[0] + fecha + sexo[0] + estado[0, 1];
        alert(curp + numero);
    }

