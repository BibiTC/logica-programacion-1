//Lógica de Programación
//0.1 Iniciando con Java Script
//DESAFIO: Hora de practicar

//variables
let nombre = 'Lua';
let edad = 25;
let numeroDeVentas = 50
let saldoDisponible = 1000
let mensajeDeError = '¡Error! Completa todos los campos';

console.log('variables por defecto:'+'\nnombre:'+nombre, '\nedad:'+edad, '\nnumero de ventas:'+numeroDeVentas, 
            '\nsaldo disponible: '+saldoDisponible, '\nmensaje error:'+mensajeDeError)

alert('¡Bienvenida y bienvenido a nuestro sitio web!');

alert('¡Error! Completa todos los campos');

alert(mensajeDeError);

nombre = prompt('Ingresar Nombre del Usuario');
edad = prompt('Ingresar Edad');

console.log('captura datos:'+'\nnombre:'+nombre, '\nedad:'+edad)

//condicional
if (edad >= 18 ) {
    //condicional true
    alert('¡Puedes obtener tu licencia de conducir!');
}
else {
    //condicional false
    alert('¡NO Puedes obtener tu licencia de conducir!');
}


/* //Codigo Original

//Variables
let numeroSecreto = Math.floor (Math.random ()*10) + 1    //let numeroSecreto = 6; 
console.log(numeroSecreto);

let numeroUsuario = prompt("Me indicas un numero por favor:");
console.log(numeroUsuario);

// == comparacion, condicional if
if (numeroUsuario == numeroSecreto) {
    //Condicion True
    alert('Acertaste el numero');
}*/
    

/* 1. Ejercicio 1: alert('H o l a   M u n d o');
   2. Ejercicio 2: Preguntas curso : let mensajeDeBienvenida = 'Bienvenido a la aplicación';
alert('mensajeDeBienvenida');*/
/*
Explicación **** Math.floor(Math.random() * (max - min + 1) + min); donde max = 9 y min = 0
   3. Ejercicio 3: Deja entrar con cualquier contraseña

let contraseniaDelSistema = "contraseniaPrueba!";
let contrasenia = prompt("Ingrese la contraseña del sistema:");

if (contrasenia = contraseniaDelSistema){
    alert("Acceso al sistema garantizado");
} //El operador de comparación es ==, sin embargo, dentro de la estructura condicional se está utilizando el operador de asignación =.

Ejercicio 4: //DESAFIO: Hora de practicar

//variables
let nombre = 'Lua';
let edad = 25;
let numeroDeVentas = 50
let saldoDisponible = 1000
let mensajeDeError = '¡Error! Completa todos los campos';

console.log('variables por defecto:'+'\nnombre:'+nombre, '\nedad:'+edad, '\nnumero de ventas:'+numeroDeVentas, 
            '\nsaldo disponible: '+saldoDisponible, '\nmensaje error:'+mensajeDeError)

alert('¡Bienvenida y bienvenido a nuestro sitio web!');

alert('¡Error! Completa todos los campos');

alert(mensajeDeError);

nombre = prompt('Ingresar Nombre del Usuario');
edad = prompt('Ingresar Edad');

console.log('captura datos:'+'\nnombre:'+nombre, '\nedad:'+edad)

//condicional
if (edad >= 18 ) {
    //condicional true
    alert('¡Puedes obtener tu licencia de conducir!');
}
else {
    //condicional false
    alert('¡NO Puedes obtener tu licencia de conducir!');
}
    
*/

