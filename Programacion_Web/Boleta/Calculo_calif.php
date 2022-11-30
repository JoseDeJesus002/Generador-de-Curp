<?php
$calif1 = (float)$_POST['a1'];
$calif2 = (float)$_POST['a2'];
$calif3 = (float)$_POST['a3'];
$calif4 = (float)$_POST['b1'];
$calif5 = (float)$_POST['b2'];
$calif6 = (float)$_POST['b3'];
$calif7 = (float)$_POST['c1'];
$calif8 = (float)$_POST['c2'];
$calif9 = (float)$_POST['c3'];
$calif10 = (float)$_POST['d1'];
$calif11 = (float)$_POST['d2'];
$calif12 = (float)$_POST['d3'];
//programacion web
$calif13 = (float)$_POST['e1'];
$calif14 = (float)$_POST['e2'];
$calif15 = (float)$_POST['e3'];
$calif16 = (float)$_POST['f1'];
$calif17 = (float)$_POST['f2'];
$calif18 = (float)$_POST['f3'];
$calif19 = (float)$_POST['g1'];
$calif20 = (float)$_POST['g2'];
$calif21 = (float)$_POST['g3'];
$calif22 = (float)$_POST['h1'];
$calif23 = (float)$_POST['h2'];
$calif24 = (float)$_POST['h3'];
//Calculo
$calif25 = (float)$_POST['i1'];
$calif26 = (float)$_POST['i2'];
$calif27 = (float)$_POST['i3'];
$calif28 = (float)$_POST['j1'];
$calif29 = (float)$_POST['j2'];
$calif30 = (float)$_POST['j3'];
$calif31 = (float)$_POST['k1'];
$calif32 = (float)$_POST['k2'];
$calif33 = (float)$_POST['k3'];
$calif34 = (float)$_POST['l1'];
$calif35 = (float)$_POST['l2'];
$calif36 = (float)$_POST['l3'];
//Habilidades
$calif37 = (float)$_POST['m1'];
$calif38 = (float)$_POST['m2'];
$calif39 = (float)$_POST['m3'];
$calif40 = (float)$_POST['n1'];
$calif41 = (float)$_POST['n2'];
$calif42 = (float)$_POST['n3'];
$calif43 = (float)$_POST['o1'];
$calif44 = (float)$_POST['o2'];
$calif45 = (float)$_POST['o3'];
$calif46 = (float)$_POST['p1'];
$calif47 = (float)$_POST['p2'];
$calif48 = (float)$_POST['p3'];
//Electricidad
$calif49 = (float)$_POST['q1'];
$calif50 = (float)$_POST['q2'];
$calif51 = (float)$_POST['q3'];
$calif52 = (float)$_POST['r1'];
$calif53 = (float)$_POST['r2'];
$calif54 = (float)$_POST['r3'];
$calif55 = (float)$_POST['s1'];
$calif56 = (float)$_POST['s2'];
$calif57 = (float)$_POST['s3'];
$calif58 = (float)$_POST['t1'];
$calif59 = (float)$_POST['t2'];
$calif60 = (float)$_POST['t3'];
//tutoria
$calif61 = (float)$_POST['u1'];
$calif62 = (float)$_POST['u2'];
$calif63 = (float)$_POST['u3'];
$calif64 = (float)$_POST['v1'];
$calif65 = (float)$_POST['v2'];
$calif66 = (float)$_POST['v3'];
$calif67 = (float)$_POST['w1'];
$calif68 = (float)$_POST['w2'];
$calif69 = (float)$_POST['w3'];
$calif70 = (float)$_POST['x1'];
$calif71 = (float)$_POST['x2'];
$calif72 = (float)$_POST['x3'];
//ingles
$calif73 = (float)$_POST['y1'];
$calif74 = (float)$_POST['y2'];
$calif75 = (float)$_POST['y3'];
$calif76 = (float)$_POST['z1'];
$calif77 = (float)$_POST['z2'];
$calif78 = (float)$_POST['z3'];
$calif79 = (float)$_POST['aa1'];
$calif80 = (float)$_POST['aa2'];
$calif81 = (float)$_POST['aa3'];
$calif82 = (float)$_POST['ab1'];
$calif83 = (float)$_POST['ab2'];
$calif84 = (float)$_POST['ab3'];
//bases de datos
$calif85 = (float)$_POST['ac1'];
$calif86 = (float)$_POST['ac2'];
$calif87 = (float)$_POST['ac3'];
$calif88 = (float)$_POST['ad1'];
$calif89 = (float)$_POST['ad2'];
$calif90 = (float)$_POST['ad3'];
$calif91 = (float)$_POST['ae1'];
$calif92 = (float)$_POST['ae2'];
$calif93 = (float)$_POST['ae3'];
$calif94 = (float)$_POST['af1'];
$calif95 = (float)$_POST['af2'];
$calif96 = (float)$_POST['af3'];
//Variable para las competencias
$competencias = 0;
//Diseño de interfaces
$calif_Parcial1 = round($calif1 + $calif2 + $calif3)/3;
$calif_Parcial2 = round($calif4 + $calif5 + $calif6)/3;
$calif_Parcial3 = round($calif7 + $calif8 + $calif9)/3;
$calif_Parcial4 = round($calif10 + $calif11 + $calif12)/3;
$calif_Promedio = round($calif_Parcial1 + $calif_Parcial2 + $calif_Parcial3 + $calif_Parcial4)/4;
//Programacion web
$calif_Parcial1_1 = ($calif13 + $calif14 + $calif15)/3;
$calif_Parcial2_1 = ($calif16 + $calif17 + $calif18)/3;
$calif_Parcial3_1 = ($calif19 + $calif20 + $calif21)/3;
$calif_Parcial4_1 = ($calif22 + $calif23 + $calif24)/3;
$calif_Promedio_1 = ($calif_Parcial1_1 + $calif_Parcial2_1 + $calif_Parcial3_1 + $calif_Parcial4_1)/4;
//Calculo
$calif_Parcial1_2 = ($calif25 + $calif26 + $calif27)/3;
$calif_Parcial2_2 = ($calif28 + $calif29 + $calif30)/3;
$calif_Parcial3_2 = ($calif31 + $calif32 + $calif33)/3;
$calif_Parcial4_2 = ($calif34 + $calif35 + $calif36)/3;
$calif_Promedio_2 = ($calif_Parcial1_2 + $calif_Parcial2_2 + $calif_Parcial3_2 + $calif_Parcial4_2)/4;
//Habilidades
$calif_Parcial1_3 = ($calif37 + $calif38 + $calif39)/3;
$calif_Parcial2_3 = ($calif40 + $calif41 + $calif42)/3;
$calif_Parcial3_3 = ($calif43 + $calif44 + $calif45)/3;
$calif_Parcial4_3 = ($calif46 + $calif47 + $calif48)/3;
$calif_Promedio_3 = ($calif_Parcial1_3 + $calif_Parcial2_3 + $calif_Parcial3_3 + $calif_Parcial4_3)/4;
//Electricidad
$calif_Parcial1_4 = ($calif49 + $calif50 + $calif51)/3;
$calif_Parcial2_4 = ($calif52 + $calif53 + $calif54)/3;
$calif_Parcial3_4 = ($calif55 + $calif56 + $calif57)/3;
$calif_Parcial4_4 = ($calif58 + $calif59 + $calif60)/3;
$calif_Promedio_4 = ($calif_Parcial1_4 + $calif_Parcial2_4 + $calif_Parcial3_4 + $calif_Parcial4_4)/4;
//Tutoria
$calif_Parcial1_5 = ($calif61 + $calif62 + $calif63)/3;
$calif_Parcial2_5 = ($calif64 + $calif65 + $calif66)/3;
$calif_Parcial3_5 = ($calif67 + $calif68 + $calif69)/3;
$calif_Parcial4_5 = ($calif70 + $calif71 + $calif72)/3;
$calif_Promedio_5 = ($calif_Parcial1_5 + $calif_Parcial2_5 + $calif_Parcial3_5 + $calif_Parcial4_5)/4;
//Ingles
$calif_Parcial1_6 = ($calif73 + $calif74 + $calif75)/3;
$calif_Parcial2_6 = ($calif76 + $calif77 + $calif78)/3;
$calif_Parcial3_6 = ($calif79 + $calif80 + $calif81)/3;
$calif_Parcial4_6 = ($calif82 + $calif83 + $calif84)/3;
$calif_Promedio_6 = ($calif_Parcial1_6 + $calif_Parcial2_6 + $calif_Parcial3_6 + $calif_Parcial4_6)/4;
//Bases de datos
$calif_Parcial1_7 = ($calif85 + $calif86 + $calif87)/3;
$calif_Parcial2_7 = ($calif88 + $calif89 + $calif90)/3;
$calif_Parcial3_7 = ($calif91 + $calif92 + $calif93)/3;
$calif_Parcial4_7 = ($calif94 + $calif95 + $calif96)/3;
$calif_Promedio_7 = ($calif_Parcial1_7 + $calif_Parcial2_7 + $calif_Parcial3_7 + $calif_Parcial4_7)/4;
//Promedio de las materias
$calif_total= array($calif_Parcial1,$calif_Parcial2,$calif_Parcial3,$calif_Parcial4,$calif_Parcial1_1,$calif_Parcial2_1,$calif_Parcial3_1,$calif_Parcial4_1,$calif_Parcial1_2,$calif_Parcial2_2,$calif_Parcial3_2,$calif_Parcial4_2,$calif_Parcial1_3,$calif_Parcial2_3,$calif_Parcial3_3,$calif_Parcial4_3,$calif_Parcial1_4,$calif_Parcial2_4,$calif_Parcial3_4,$calif_Parcial4_4,$calif_Parcial1_5,$calif_Parcial2_5,$calif_Parcial3_5,$calif_Parcial4_5,$calif_Parcial1_6,$calif_Parcial2_6,$calif_Parcial3_6,$calif_Parcial4_6,$calif_Parcial1_7,$calif_Parcial2_7,$calif_Parcial3_7,$calif_Parcial4_7);
//Promedio del cuatrimestre
$calif_Final = array_sum($calif_total)/32;
$longitud=count($calif_total);
//Contador de competencias
for ($i=0; $i < $longitud; $i++){
    if ($calif_total[$i] <= 6) {
        $competencias++;
    } else {
        $$competencias = 0;
    }
}
//diseño de interfaces
if(isset($_POST['boton1'])){
    echo"<table border=black>";
    echo"<tr>";
    echo"<td>Calificacion Parcial 1</td>";
    echo"<td>Calificacion Parcial 2</td>";
    echo"<td>Calificacion Parcial 3</td>";
    echo"<td>Calificacion Parcial 4</td>";
    echo"<td>Calificacion Final Materia</td>";
    echo"</tr>";
    echo"<tr>";
    echo"<td>$calif_Parcial1</td>";
    echo"<td>$calif_Parcial2</td>";
    echo"<td>$calif_Parcial3</td>";
    echo"<td>$calif_Parcial4</td>";
    echo"<td>$calif_Promedio</td>";
    echo"</tr>";
    echo"</table>";
}
//programacion web
if(isset($_POST['boton2'])){
    echo"<table border=black>";
    echo"<tr>";
    echo"<td>Calificacion Parcial 1</td>";
    echo"<td>Calificacion Parcial 2</td>";
    echo"<td>Calificacion Parcial 3</td>";
    echo"<td>Calificacion Parcial 4</td>";
    echo"<td>Calificacion Final Materia</td>";
    echo"</tr>";
    echo"<tr>";
    echo"<td>$calif_Parcial1_1</td>";
    echo"<td>$calif_Parcial2_1</td>";
    echo"<td>$calif_Parcial3_1</td>";
    echo"<td>$calif_Parcial4_1</td>";
    echo"<td>$calif_Promedio_1</td>";
    echo"</tr>";
    echo"</table>";
}
//calculo
if(isset($_POST['boton3'])){
    echo"<table border=black>";
    echo"<tr>";
    echo"<td>Calificacion Parcial 1</td>";
    echo"<td>Calificacion Parcial 2</td>";
    echo"<td>Calificacion Parcial 3</td>";
    echo"<td>Calificacion Parcial 4</td>";
    echo"<td>Calificacion Final Materia</td>";
    echo"</tr>";
    echo"<tr>";
    echo"<td>$calif_Parcial1_2</td>";
    echo"<td>$calif_Parcial2_2</td>";
    echo"<td>$calif_Parcial3_2</td>";
    echo"<td>$calif_Parcial4_2</td>";
    echo"<td>$calif_Promedio_2</td>";
    echo"</tr>";
    echo"</table>";
}
//habilidades
if(isset($_POST['boton4'])){
    echo"<table border=black>";
    echo"<tr>";
    echo"<td>Calificacion Parcial 1</td>";
    echo"<td>Calificacion Parcial 2</td>";
    echo"<td>Calificacion Parcial 3</td>";
    echo"<td>Calificacion Parcial 4</td>";
    echo"<td>Calificacion Final Materia</td>";
    echo"</tr>";
    echo"<tr>";
    echo"<td>$calif_Parcial1_3</td>";
    echo"<td>$calif_Parcial2_3</td>";
    echo"<td>$calif_Parcial3_3</td>";
    echo"<td>$calif_Parcial4_3</td>";
    echo"<td>$calif_Promedio_3</td>";
    echo"</tr>";
    echo"</table>";
}
//Electricidad
if(isset($_POST['boton5'])){
    echo"<table border=black>";
    echo"<tr>";
    echo"<td>Calificacion Parcial 1</td>";
    echo"<td>Calificacion Parcial 2</td>";
    echo"<td>Calificacion Parcial 3</td>";
    echo"<td>Calificacion Parcial 4</td>";
    echo"<td>Calificacion Final Materia</td>";
    echo"</tr>";
    echo"<tr>";
    echo"<td>$calif_Parcial1_4</td>";
    echo"<td>$calif_Parcial2_4</td>";
    echo"<td>$calif_Parcial3_4</td>";
    echo"<td>$calif_Parcial4_4</td>";
    echo"<td>$calif_Promedio_4</td>";
    echo"</tr>";
    echo"</table>";
}
//Tutoria
if(isset($_POST['boton6'])){
    echo"<table border=black>";
    echo"<tr>";
    echo"<td>Calificacion Parcial 1</td>";
    echo"<td>Calificacion Parcial 2</td>";
    echo"<td>Calificacion Parcial 3</td>";
    echo"<td>Calificacion Parcial 4</td>";
    echo"<td>Calificacion Final Materia</td>";
    echo"</tr>";
    echo"<tr>";
    echo"<td>$calif_Parcial1_5</td>";
    echo"<td>$calif_Parcial2_5</td>";
    echo"<td>$calif_Parcial3_5</td>";
    echo"<td>$calif_Parcial4_5</td>";
    echo"<td>$calif_Promedio_5</td>";
    echo"</tr>";
    echo"</table>";
}
//ingles
if(isset($_POST['boton7'])){
    echo"<table border=black>";
    echo"<tr>";
    echo"<td>Calificacion Parcial 1</td>";
    echo"<td>Calificacion Parcial 2</td>";
    echo"<td>Calificacion Parcial 3</td>";
    echo"<td>Calificacion Parcial 4</td>";
    echo"<td>Calificacion Final Materia</td>";
    echo"</tr>";
    echo"<tr>";
    echo"<td>$calif_Parcial1_6</td>";
    echo"<td>$calif_Parcial2_6</td>";
    echo"<td>$calif_Parcial3_6</td>";
    echo"<td>$calif_Parcial4_6</td>";
    echo"<td>$calif_Promedio_6</td>";
    echo"</tr>";
    echo"</table>";
}
//bases de datos
if(isset($_POST['boton8'])){
    echo"<table border=black>";
    echo"<tr>";
    echo"<td>Calificacion Parcial 1</td>";
    echo"<td>Calificacion Parcial 2</td>";
    echo"<td>Calificacion Parcial 3</td>";
    echo"<td>Calificacion Parcial 4</td>";
    echo"<td>Calificacion Final Materia</td>";
    echo"</tr>";
    echo"<tr>";
    echo"<td>$calif_Parcial1_7</td>";
    echo"<td>$calif_Parcial2_7</td>";
    echo"<td>$calif_Parcial3_7</td>";
    echo"<td>$calif_Parcial4_7</td>";
    echo"<td>$calif_Promedio_7</td>";
    echo"</tr>";
    echo"</table>";
}
//Calificacion final del cuatrimestre
if(isset($_POST['boton10'])){
    echo"<table border=black>";
    echo"<tr>";
    echo"<td>calificacion del cuatrimestre</td>";
    echo"<td>Competencias</td>";
    echo"</tr>";
    echo"<tr>";
    echo"<td>$calif_Final</td>";
    echo"<td>$competencias</td>";
    echo"</tr>";
    echo"</table>";
    //Validacion para la reisncripcion
    if ($competencias >= 4) {
        echo '<script language="javascript">alert("El alumno no se puede reinscribir");</script>';
        echo "El alumno no se puede reinscribir";
    }
}
//Validacion de la beca
if(isset($_POST['boton11'])){
    if ($calif_Final >= 9 && $competencias == 0) {
        echo '<script language="javascript">alert("Tienes beca");window.location.href="Boleta.html"</script>';
    } else {
        echo '<script language="javascript">alert("No Tienes beca");window.location.href="Boleta.html"</script>';
    }
}
?>