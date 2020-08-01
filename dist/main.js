"use strict";

var ops = prompt("Escriba la opcion que desea realizar del 1 al 15: \n1) suma de dos elementos. \n2) Calcular el promedio de 2 examenes. \n3) Calcular Area de un rectangulo. \n4) Calcular Area de un triangulo. \n5) Calcular Area de un circunferencia. \n6) Determinar el salario semanal. \n7) Convertir pulgadas a metros. \n8) Convertir soles a dolares. \n9) convertir a\xF1o de nacimiento a edad. \n10) Determinar el menor de los trabajadores ingresados. \n11) bono por antigudad. \n12) calcular el salario 1500 en los proximos  6 a\xF1os. \n13) Calcular el promedio de 2 examenes. \n14) Calcular el promedio de 2 examenes. \n15) Calcular el promedio de 2 examenes.\n");

switch (parseInt(ops)) {
    case 1:
        ejercio1();
        break;
    case 2:
        ejercio2();
        break;
    case 3:
        ejercio3();
        break;
    case 4:
        ejercio4();
        break;
    case 5:
        ejercio5();
        break;
    case 6:
        ejercio6();
        break;
    case 7:
        ejercio7();
        break;
    case 8:
        ejercio8();
        break;
    case 9:
        ejercio9();
        break;
    case 10:
        ejercio10();
        break;
    case 11:
        ejercio11();
        break;
    case 12:
        ejercio12();
        break;
    case 13:
        ejercio13();
        break;
    case 14:
        ejercio14();
        break;
    case 15:
        ejercio15();
        break;
    default:
        alert("Elija la opcion correcta: 1 - 15 ");
        break;
}

/*Funciones */

function ejercio1() {
    var msg = alert("A continuacion ingrese los dos numero que desea sumar");
    var a = prompt("Primer numero");
    var b = prompt("Segundo numero");
    var resultado = parseInt(a) + parseInt(b);

    alert("El resultado de la suma es: " + resultado);
}

function ejercio2() {
    var msg = alert("A continuacion ingrese los 4 examenes que desea promediar");
    var a = prompt("Primer nota");
    var b = prompt("Segundo nota");
    var c = prompt("tercero nota");
    var d = prompt("cuarta nota");
    var resultado = (parseInt(a) + parseInt(b) + parseInt(c) + parseInt(d)) / 4;

    alert("El promedio de tus 4 notas es: " + resultado);
}

function ejercio3() {
    var msg = alert("A continuacion ingrese la base y la altura para calcular el area del rectangulo");
    var a = prompt("Primer numero");
    var b = prompt("Segundo numero");
    var resultado = parseInt(a) * parseInt(b);

    alert("El resultado de la suma es: " + resultado);
}

function ejercio4() {
    var msg = alert("A continuacion ingrese la base y la altura para calcular el area del triangulo");
    var a = prompt("Primer numero");
    var b = prompt("Segundo numero");
    var resultado = parseInt(a) * parseInt(b) / 2;

    alert("El resultado de la suma es: " + resultado);
}

function ejercio5() {
    var msg = alert("A continuacion ingrese el diametro para saber la circunferencia");
    var a = prompt("ingrese el diametro");
    var resultado = parseInt(a) * Math.PI;

    alert("La circunferencia es: " + resultado);
}

function ejercio6() {
    var a = prompt("ingresar horas trabajadas");
    var b = prompt("ingresa precio por horas");

    var resultado = a * b * 7;

    alert("pago semanal: " + resultado);
}

function ejercio7() {
    var msg = alert("A continuacion ingrese la cantidad en metros para convertirlo a pulgadas");
    var a = prompt("Cantidad en metros");
    var resultado = parseInt(a) / 0.0254;

    alert(" " + a + " metros equivale  a " + resultado + " Pulgadas");
}

function ejercio8() {
    var msg = alert("A continuacion ingrese la cantidad que desea convertir a dolares");
    var a = prompt("Cantidad en soles");
    var resultado = parseInt(a) / 3.45;

    alert(" " + a + " Soles equivale a " + resultado + " Dolares");
}

function ejercio9() {
    var msg = alert("A continuacion ingrese el año en que nacio el trabajador");
    var a = prompt(" año de nacimiento");
    var hoy = new Date();
    var añoActual = hoy.getFullYear();
    var resultado = añoActual - parseInt(a);

    alert(" El trajador tiene " + resultado + " a\xF1os");
}

function trabajador(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
}

function ejercio10() {
    trabajadores = [];
    var msg = alert("A continuacion ingrese los 3 trabajadores que desea saber el menor");
    var nombre1 = prompt("Nombre del primer trabajador");
    var edad1 = prompt("edad del primer trabajador");
    trabajadores.push(new trabajador(nombre1, parseInt(edad1)));
    var nombre2 = prompt("Nombre del segundo trabajador");
    var edad2 = prompt("edad del segundo trabajador");
    trabajadores.push(new trabajador(nombre2, parseInt(edad2)));
    var nombre3 = prompt("Nombre del tercero trabajador");
    var edad3 = prompt("edad del tercero trabajador");
    trabajadores.push(new trabajador(nombre3, parseInt(edad3)));

    if (trabajadores[0].edad < trabajadores[1].edad && trabajadores[0].edad < trabajadores[2].edad) {
        var menor = trabajadores[0].nombre;
        alert(menor + " es el menor ya que tiene " + trabajadores[0].edad + " a\xF1os");
    } else if (trabajadores[0].edad > trabajadores[1].edad && trabajadores[1].edad < trabajadores[2].edad) {
        var _menor = trabajadores[1].nombre;
        alert(_menor + " es el menor ya que tiene " + trabajadores[1].edad + " a\xF1os");
    } else {
        var _menor2 = trabajadores[2].nombre;
        alert(_menor2 + " es el menor ya que tiene " + trabajadores[2].edad + " a\xF1os");

        // alert(trabajadores);
        // // alert(` El trajador tiene ${resultado} años`);
    }
}

function ejercio11() {
    var a = prompt("A continuacion ingrese la cantidad de años trabajados para obtener el bono");

    switch (parseInt(a)) {
        case 1:
            alert("Le corresponde un bono de 100 dolares por tener " + a + " a\xF1os laborados");
            break;
        case 2:
            alert("Le corresponde un bono de 200 dolares por tener " + a + " a\xF1os laborados");
            break;
        case 3:
            alert("Le corresponde un bono de 300 dolares por tener " + a + " a\xF1os laborados");
            break;
        case 4:
            alert("Le corresponde un bono de 400 dolares por tener " + a + " a\xF1os laborados");
            break;
        case 5:
            alert("Le corresponde un bono de 500 dolares por tener " + a + " a\xF1os laborados");
            break;

        default:
            if (parseInt(a) > 5) {
                alert("Le corresponde un bono de 1000 dolares por tener " + a + " a\xF1os laborados");
                break;
            } else {
                alert("No le corresponde bono por no contar con el tiempo minimo de a\xF1os o ingreso mal el tiempo estimado.");
                break;
            }
    }
}

function ejercio12() {
    var salario = 1500;

    alert("Se listara el incremento del sueldo en los proximos 6 a\xF1os (1500 sueldo base - 10% por a\xF1o).");
    for (var index = 0; index < 6; index++) {
        var acumulador = salario * 0.10;
        var nuevoSalario = salario + acumulador;
        salario = nuevoSalario;
        alert("En el a\xF1o " + (index + 1) + " tien un salario de " + salario + " ya que tiene un aumento del 10% ");
    }
}

function ejercio13() {
    var a = parseInt(prompt("Ingrese la cantidad de notas que ingresara para determinar cuantos aprobado y desaprobado hay en total :"));
    var cantAlumnos = [a];
    var aprobado = 0;
    var desaprobados = 0;

    for (var i = 0; i < a; i++) {
        cantAlumnos[i] = prompt("Nota numero " + (i + 1));
    }
    for (var j = 0; j < a; j++) {
        if (cantAlumnos[j] > 11) {
            aprobado++;
        } else {
            desaprobados++;
        }
    }

    alert("El numero de aprobados son : " + aprobado + " \nEl numero de desaprobados son: " + desaprobados);
}

function ejercio14() {
    var a = parseInt(prompt("Ingrese la cantidad de focos que contiene la caja para determinar los colores que hay :"));
    var focos = ['verde', 'blanco', 'rojo'];
    var rojo = 0;
    var blanco = 0;
    var verde = 0;

    // let aleatorio = Math.floor(Math.random() * 3);

    for (var i = 0; i < a; i++) {
        if (focos[Math.floor(Math.random() * 3)] === "verde") {
            verde++;
        } else if (focos[Math.floor(Math.random() * 3)] === "rojo") {
            rojo++;
        } else {
            blanco++;
        }
    }

    alert("Numero de focos de color verde: " + verde + " \nNumero de focos de color rojo: " + rojo + "\n Numero de focos de color blanco: " + blanco);
}

function ejercio15() {
    var a = parseInt(prompt("Ingrese la edad del votante para determinar si votara o no :"));

    if (a >= 18) {
        alert("SI Puede VOTAR ya que cuenta con " + a + " a\xF1os de Edad");
    } else {
        alert("NO Puede VOTAR ya que cuenta con " + a + " a\xF1os de Edad");
    }
}