let ops = prompt("Escriba la opcion que desea realizar del 1 al 15: \n" +
    "1) suma de dos elementos. \n" +
    "2) Calcular el promedio de 2 examenes. \n" +
    "3) Calcular Area de un rectangulo. \n" +
    "4) Calcular Area de un triangulo. \n" +
    "5) Calcular Area de un circunferencia. \n" +
    "6) Determinar el salario semanal. \n" +
    "7) Convertir pulgadas a metros. \n" +
    "8) Convertir soles a dolares. \n" +
    "9) convertir año de nacimiento a edad. \n" +
    "10) Determinar el menor de los trabajadores ingresados. \n" +
    "11) bono por antigudad. \n" +
    "12) calcular el salario 1500 en los proximos  6 años. \n" +
    "13) Calcular el promedio de 2 examenes. \n" +
    "14) Calcular el promedio de 2 examenes. \n" +
    "15) Calcular el promedio de 2 examenes.\n"
);

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
        alert("Elija la opcion correcta: 1 - 15 ")
        break;
}







/*Funciones */

function ejercio1() {
    let msg = alert("A continuacion ingrese los dos numero que desea sumar");
    let a = prompt("Primer numero");
    let b = prompt("Segundo numero");
    let resultado = parseInt(a) + parseInt(b);

    alert("El resultado de la suma es: " + resultado);
}

function ejercio2() {
    let msg = alert("A continuacion ingrese los 4 examenes que desea promediar");
    let a = prompt("Primer nota");
    let b = prompt("Segundo nota");
    let c = prompt("tercero nota");
    let d = prompt("cuarta nota");
    let resultado = (parseInt(a) + parseInt(b) + parseInt(c) + parseInt(d)) / 4;

    alert("El promedio de tus 4 notas es: " + resultado);
}

function ejercio3() {
    let msg = alert("A continuacion ingrese la base y la altura para calcular el area del rectangulo");
    let a = prompt("Primer numero");
    let b = prompt("Segundo numero");
    let resultado = parseInt(a) * parseInt(b);

    alert("El resultado de la suma es: " + resultado);
}

function ejercio4() {
    let msg = alert("A continuacion ingrese la base y la altura para calcular el area del triangulo");
    let a = prompt("Primer numero");
    let b = prompt("Segundo numero");
    let resultado = (parseInt(a) * parseInt(b)) / 2;

    alert("El resultado de la suma es: " + resultado);
}

function ejercio5() {
    let msg = alert("A continuacion ingrese el diametro para saber la circunferencia");
    let a = prompt("ingrese el diametro");
    let resultado = parseInt(a) * Math.PI;

    alert("La circunferencia es: " + resultado);
}

function ejercio6() {
    let a = prompt("ingresar horas trabajadas");
    let b = prompt("ingresa precio por horas");

    let resultado = (a * b) * 7;

    alert("pago semanal: " + resultado);
}

function ejercio7() {
    let msg = alert("A continuacion ingrese la cantidad en metros para convertirlo a pulgadas");
    let a = prompt("Cantidad en metros");
    let resultado = parseInt(a) / 0.0254;

    alert(` ${a} metros equivale  a ${resultado} Pulgadas`);
}

function ejercio8() {
    let msg = alert("A continuacion ingrese la cantidad que desea convertir a dolares");
    let a = prompt("Cantidad en soles");
    let resultado = parseInt(a) / 3.45;

    alert(` ${a} Soles equivale a ${resultado} Dolares`);
}

function ejercio9() {
    let msg = alert("A continuacion ingrese el año en que nacio el trabajador");
    let a = prompt(" año de nacimiento");
    let hoy = new Date();
    let añoActual = hoy.getFullYear();
    let resultado = añoActual - parseInt(a);

    alert(` El trajador tiene ${resultado} años`);
}

function trabajador(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
}

function ejercio10() {
    trabajadores = [];
    let msg = alert("A continuacion ingrese los 3 trabajadores que desea saber el menor");
    let nombre1 = prompt("Nombre del primer trabajador");
    let edad1 = prompt("edad del primer trabajador");
    trabajadores.push(new trabajador(nombre1, parseInt(edad1)));
    let nombre2 = prompt("Nombre del segundo trabajador");
    let edad2 = prompt("edad del segundo trabajador");
    trabajadores.push(new trabajador(nombre2, parseInt(edad2)));
    let nombre3 = prompt("Nombre del tercero trabajador");
    let edad3 = prompt("edad del tercero trabajador");
    trabajadores.push(new trabajador(nombre3, parseInt(edad3)));

    if (trabajadores[0].edad < trabajadores[1].edad && trabajadores[0].edad < trabajadores[2].edad) {
        const menor = trabajadores[0].nombre;
        alert(`${menor} es el menor ya que tiene ${trabajadores[0].edad} años`);
    } else if (trabajadores[0].edad > trabajadores[1].edad && trabajadores[1].edad < trabajadores[2].edad) {
        const menor = trabajadores[1].nombre;
        alert(`${menor} es el menor ya que tiene ${trabajadores[1].edad} años`);
    } else {
        const menor = trabajadores[2].nombre;
        alert(`${menor} es el menor ya que tiene ${trabajadores[2].edad} años`);

        // alert(trabajadores);
        // // alert(` El trajador tiene ${resultado} años`);
    }
}

function ejercio11() {
    let a = prompt("A continuacion ingrese la cantidad de años trabajados para obtener el bono");

    switch (parseInt(a)) {
        case 1:
            alert(`Le corresponde un bono de 100 dolares por tener ${a} años laborados`);
            break;
        case 2:
            alert(`Le corresponde un bono de 200 dolares por tener ${a} años laborados`);
            break;
        case 3:
            alert(`Le corresponde un bono de 300 dolares por tener ${a} años laborados`);
            break;
        case 4:
            alert(`Le corresponde un bono de 400 dolares por tener ${a} años laborados`);
            break;
        case 5:
            alert(`Le corresponde un bono de 500 dolares por tener ${a} años laborados`);
            break;

        default:
            if (parseInt(a) > 5) {
                alert(`Le corresponde un bono de 1000 dolares por tener ${a} años laborados`);
                break;
            } else {
                alert(`No le corresponde bono por no contar con el tiempo minimo de años o ingreso mal el tiempo estimado.`);
                break;
            }
    }

}

function ejercio12() {
    let salario = 1500;

    alert(`Se listara el incremento del sueldo en los proximos 6 años (1500 sueldo base - 10% por año).`)
    for (let index = 0; index < 6; index++) {
        let acumulador = salario * 0.10;
        let nuevoSalario = salario + acumulador;
        salario = nuevoSalario;
        alert(`En el año ${index+1} tien un salario de ${salario} ya que tiene un aumento del 10%`);
    }


}

function ejercio13() {
    let a = parseInt(prompt("Ingrese la cantidad de notas que ingresara para determinar cuantos aprobado y desaprobado hay en total :"));
    let cantAlumnos = [a];
    let aprobado = 0;
    let desaprobados = 0;

    for (let i = 0; i < a; i++) {
        cantAlumnos[i] = prompt(`Nota numero ${i+1}`);
    }
    for (let j = 0; j < a; j++) {
        if (cantAlumnos[j] > 11) {
            aprobado++;
        } else {
            desaprobados++;
        }
    }

    alert(`El numero de aprobados son : ${aprobado} \nEl numero de desaprobados son: ${desaprobados}`);
}

function ejercio14() {
    let a = parseInt(prompt("Ingrese la cantidad de focos que contiene la caja para determinar los colores que hay :"));
    let focos = ['verde', 'blanco', 'rojo'];
    let rojo = 0;
    let blanco = 0;
    let verde = 0;

    // let aleatorio = Math.floor(Math.random() * 3);

    for (let i = 0; index < a; i++) {
        if (focos[Math.floor(Math.random() * 3)] === "verde") {
            verde++;
        } else if (focos[Math.floor(Math.random() * 3)] === "rojo") {
            rojo++;
        } else {
            blanco++;
        }
    }

    alert(`Numero de focos de color verde: ${verde} \nNumero de focos de color rojo: ${rojo}\n Numero de focos de color blanco: ${blanco}`);
}

function ejercio15() {
    let a = parseInt(prompt("Ingrese la edad del votante para determinar si votara o no :"));

    if (a >= 18) {
        alert(`SI Puede VOTAR ya que cuenta con ${a} años de Edad`);
    } else {
        alert(`NO Puede VOTAR ya que cuenta con ${a} años de Edad`);
    }
}