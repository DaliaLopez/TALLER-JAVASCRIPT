//------------------------------ 1. Comentarios

// Esto es un comentario de una línea
/* Esto es un comentario
de varias líneas */

//------------------------------ 2. Variables


// Introducción a let y const en JavaScript

// let se utiliza para declarar variables que pueden ser reasignadas.
// let variableLet = "Hola";
// console.log(variableLet); 

// variableLet = "Adiós";
// console.log(variableLet); 

// const se utiliza para declarar variables que no pueden ser reasignadas.
// const variableConst = "Hola";
// console.log(variableConst);

// var sirve para los valores cambiantes 
// var esMayor = true;

//------------------------------ 3. Tipos de Datos

// let numero = 10; // Número
// let texto = "Hola"; // String
// let esMayor = true; // Booleano
// let nulo = null; // Null
// let indefinido; // Undefined


//------------------------------ 3. Asignar una variable y concatenar strings

//------------------------------ Actividad (Escribamos un programa que nos pida la información por consola) -> Mi nombre es Pepito Perez, mi edad es 27 años y nací el 29 de septiembre de 1996.


 // Capturar el formulario
const formulario = document.getElementById('formulario');

// Escuchar el evento "submit" del formulario
formulario.addEventListener('submit', function (event) {
    event.preventDefault(); // Evitar que el formulario se envíe

    // Obtener los valores del formulario
    const nombre = document.getElementById('op1').value;
    const edad = document.getElementById('operador').value;
    const fechaNacimiento = document.getElementById('op2').value;

    // Formatear la fecha de nacimiento (opcional)
    const fechaFormateada = new Date(fechaNacimiento).toLocaleDateString('es-ES', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    });

    // Concatenar el texto
    const textoFinal = `Mi nombre es ${nombre}, mi edad es ${edad} años y nací el ${fechaFormateada}.`;

    // Mostrar el resultado en el HTML
    document.getElementById('resultado').textContent = textoFinal;
});