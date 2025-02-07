//Variables
let numeroSecreto = 4;
let numeroUsuario = 0;
let intentos = 1;
let palabraVeces = 'vez';

while (numeroUsuario != numeroSecreto) {
    numeroUsuario = prompt("Me indicas un número entre 1 y 10 por favor:");

    console.log(numeroUsuario);
    if (numeroUsuario == numeroSecreto) {
        //Acertamos, fue verdadera la condición
        alert(`Acertaste, el número es: ${numeroUsuario}. Lo hiciste en ${intentos} ${palabraVeces}`);
    } else {
        if (numeroUsuario > numeroSecreto) {
            alert('El número secreto es menor');
        } else {
            alert('El número secreto es mayor');
        }
        //Incrementamos el contador cuando no acierta
        intentos = intentos + 1;
        palabraVeces = 'veces';
        //La condición no se cumplió
        //alert('Lo siento, no acertaste el número');
    }
}


// PREGUNTAS SOBRE EL CODIGO
/* //PREGUNTAS 1:
//Conteo hasta la condicion
let contador = 1;

while (contador < 4) {
  console.log('Ejecutando la iteración ' + contador);
  contador = contador + 1;
}
*/

/*
//-----------------------------------------------------------------------------------------------------------
//PREGUNTAS 2: 
//Cálculo de medias aritméticas. Sin embargo, se encontró con un bucle infinito y no pudo descubrir por qué.
//-----------------------------------------------------------------------------------------------------------

let cantidadNumeros = prompt('Ingrese la cantidad de números para el cálculo del promedio:');
let suma = 0;
let contador = cantidadNumeros;

while(contador > 0){
    console.log(contador)
    let numero = parseInt(prompt('Ingrese el numero:'));
    suma += numero;
    contador --
}

let promedio = suma / cantidadNumeros;

console.log(promedio);
//-----------------------------------------------------------------------------------------------------------

*/

/*
//==========================================================================================================
//Lógica de programación `
//03. Loops y tentativas
//DESAFIO: Hora de Practicar
//==========================================================================================================
*/

/*
//==========================================================================================================
//ACTIVIDAD 1: Crea un contador que comience en 1 y vaya hasta 10 usando un bucle 'while'. Muestra cada número.
//-----------------------------------------------------------------------------------------------------------

//Variables
let contador = 1;

while(contador <= 10){
    console.log(`Número: ${contador}`);
    contador += 1;  //contador = contador +1 // contador ++
}
//-----------------------------------------------------------------------------------------------------------
*/

/*
//==========================================================================================================
//ACTIVIDAD 2: Crea un contador que comience en 10 y vaya hasta 0 usando un bucle 'while'. Muestra cada número.
//-----------------------------------------------------------------------------------------------------------

//Variables
let contador = 10;

while(contador >= 0){
    console.log(`Número: ${contador}`);
    contador --;  //contador = contador -1
}
//-----------------------------------------------------------------------------------------------------------
*/

/*
//==========================================================================================================
//ACTIVIDAD 3: Crea un programa de cuenta regresiva. Pide un número y cuenta desde 0 hasta ese número utilizando un bucle 'while' en la consola del navegador.
//-----------------------------------------------------------------------------------------------------------

//Variables
let numeroMax = prompt('Por favor ingresa un numero para hacer cuenta regresiva');

while(numeroMax >= 0){
    console.log(`Número: ${numeroMax}`);
    numeroMax --;  //numeroMax = numeroMax +1
}

//-----------------------------------------------------------------------------------------------------------

*/

/*
//==========================================================================================================
//ACTIVIDAD 4:Crea un programa de cuenta progresiva. Pide un número y cuenta desde 0 hasta ese número utilizando un bucle 'while' en la consola del navegador.
//-----------------------------------------------------------------------------------------------------------

//Variables
let numeroMax = prompt('Por favor ingresa un numero para hacer cuenta progresiva');
let contador = 0;

while(contador <= numeroMax){
    console.log(`Número: ${contador}`);
    contador += 1;  //contador = contador +1 // contador ++
}

//-----------------------------------------------------------------------------------------------------------
*/


//==========================================================================================================
//OPERADORES LOGICOS
//-----------------------------------------------------------------------------------------------------------
/*
//AND (&&)
let edad = 25;
let tieneLicencia = true;

// si la edad es mayor de 18 y tiene una licencia...
if (edad > 18 && tieneLicencia) {
  console.log("Puede conducir!");
} else {
  console.log("No puede conducir!");
}
*/

/*
//OR( | | )
// si tiene manzana o tiene banana…
if (tieneManzana|| tieneBanana) {
    console.log("Tienes frutas!");
  } else {
    console.log("No tienes frutas.");
  }
*/




