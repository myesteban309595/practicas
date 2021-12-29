
// const precio = 100;
// const iva = 0.21;

const { userInfo } = require("os");
const { receiveMessageOnPort } = require("worker_threads");

// // calcular el total a pagar

// const totalpagar = precio+ (precio*iva)
// console.log(`el total a pagar iva incluido es: ${totalpagar}`);



//********************************************** */

// const lado = 40;
// const carasfigura = 4;

// areacuadrado = lado*lado;
// console.log(areacuadrado);

// perimetro = lado*carasfigura;
// console.log(`el perimetro del cuadrado es: ${perimetro}`);

//********************************************** */

// const nombre = prompt("escribe tu nombre aqui");
// const saludo = "hola !"
// console.log(`${saludo}, me llamo ${nombre}`);

// ***********************************************

// const numero1 = parseInt(prompt("ingresa el numero"))
// const numero2 = parseInt(prompt("ingresa el numero"))
// const numero3 = parseInt(prompt("ingresa el numero"))

// const media = (numero1+numero2+numero3)/3

//************************************************ */

/*En este script deberás crear un array para guardar los nombres de los días de la semana, empezando por 0 para el domingo.
Para comprobar el funcionamiento pide al usuario un número entre 0 y 6 y devuelve el nombre del día. Se supone que el dato 
tecleado estará entre 0 y 6*/

// const diassemana = ['domingo','lunes','martes','miercoles','jueves','viernes','sabado']

// const dias = diassemana.slice(0,4);

// console.log(dias);

// const ingresadia = 5;  // valor entre 0 y 6

// const recorrerarray = diassemana.map(function(element,index)
// {
//     console.log(element, index);

//     //return index, index

//     if(index===ingresadia)
//     {
//         console.log(element);
//         return element || index
//     }


// });

// console.log(recorrerarray);

//console.log(diassemana.find(id => id == 'jueves'));


//******************************************************************* */

/*Crea un array booleano con dos valores 'verdadero' y 'falso'. Este array te sirve para traduicr los valores true y false.
Usalo para que el script muestre un alert con el nombre vedadero si un usuario teclea un valor entre 0 y 9 y falso en el 
caso contrario. */


// function aleatorio(min,max) {
     
//     return Math.floor(Math.random() * (max -min) + min)
// }
// const arraybooleano = ['verdadero', 'falso']

// const numero = aleatorio(0,20);
// console.log(numero);

// if(numero > 0 && numero<10 )
// {
//     let verd = arraybooleano.slice(0,1);
//     console.log(verd);
// }else{

//     let fal = arraybooleano.slice(1,2)
//     console.log(fal);
// }

//*************************************************** */

/* Sin usar métodos del objeto array, diseña una función llamada sumaLista() capaz de sumar todos los números
que forman el array que se le pase como argumento. */

//const numeros = [1,2,3,4,5,6,7,8,9]

// for (numero of numeros)
// {
//     let sum = 0;

//     //console.log(numero);

//     for (numero of numeros)
//     {
//         sum += numero;
//         console.log(sum);

//     }
//     return sum
// }

// **********************************************************

/* Diseña un script que vaya leyendo números y guardándolos en un array. Una vez lleno mostrará 
el array y deberá decir cuantos números son pares y cuantos son impares. La entrada de datos 
termina cuando el usuario teclea 0 o un valor no numérico. Intenta resolverlo sin usar métodos 
del objeto array, solo indices y longitudes de arrays. No debe aceptar valores no numéricos (isNaN(valor) 
permite detectar valores no numéricos). */

function aleatorio (min,max) {

    return Math.floor(Math.random() * (max-min) + min)
}

const numeros = aleatorio(3,20);

const arrayalmacenar = [''];

const array = arrayalmacenar.push(10);
console.log(array);


// for(i=0 ; i<Array.length == 10 ; i++)
// {

//     return array

// }

//******************************************************** */

// para obtener los valores de un objeto

// const usuario = {

//     id: 1,
//     nombre : 'marlon',
//     apellido: 'esteban',
//     edad : 25

// }

// const valores = Object.values(usuario)
// console.log(valores);

//******************************************************* */}

/*Diseña un script que vaya leyendo números y guardándolos en un array. Una vez lleno mostrará el array y
deberá decir cuantos números son pares y cuantos son impares. La entrada de datos termina cuando el usuario 
teclea 0 o un valor no numérico.

Intenta resolverlo sin usar métodos del objeto array, solo indices y longitudes de arrays.

No debe aceptar valores no numéricos (isNaN(valor) permite detectar valores no numéricos).*/

                
function aleatorio(min,max){    // me va simular la entrada de datos aleatorias

    return Math.floor(Math.random() * (max-min) + min)

}

var lista=[]
var ind=0
var pares=0
var impares=0
//var numero;

do{

    var numero = aleatorio(0,15)
    console.log(numero);

  //numero= parseInt(prompt("Número "));   // el numero se agrega mediante el prompt

  
   if(numero !=0 && !isNaN(numero))
      {
      
      lista[ind] = numero
      ind++;

    }

    
}while (numero !=0 && !isNaN(numero));

//alert("Lista de números "+lista);
console.log("Lista de números "+ lista);

for(ind=0; ind < lista.length; ind++){

   if (lista[ind] % 2==0) 

     pares++

      else 

       impares++
}

console.log("pares " + pares);
console.log("Impares " + impares);