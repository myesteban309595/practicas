 /*
   dada una cadena de texto, comprobar si es un polindromo
   o no. Los polindromos son palabras que se leen igual aun estando invertidoas
   por ejemplo ana, bob, otto, allivessevilla.

   NO TENER EN CUENTA ESPACIOS O SIMBOLOS RAROS

   EJEMPLO

   -ejecuta esta funcion

   palidromo("otto") // devuelve: true
   palindromo("victor") // devuelve: false

   como hacerlo:

   -funcion con parametro "texto"
   -separar el texto en un array de letras
   -darle la vuelta
   -unir el array de letras en un string y comparar con el parametro
 */

   const palabra = "poso"; // aqui se puede hacer un req.query

function palindromo(texto)  // parametro texto
{

    //para separar este string en un array de letras

    // [ 'o', 's', 'o' ] // con split imprime esto cada texto en un array
    // [ 'o', 's', 'o' ] // al aplicarle reverse 
    // si dentro del () aplicamos un '-' imprime
    // o-s-o 
    // oso  // al aplicar la funcion joi

    let invertido = texto.split('') //la funcion split me separa un texto por un espacio que yo queueMicrotas, en este caso no quiero espacios dejo el string vacio
    //let invertido = texto.split('-'); // sis eparo con un "-" el me separa el texto en dos partes
    .reverse()
    .join('');  // funcion joi para unir

    console.log(invertido); // al imprimir vemos como nos separa un string en un array de letras
    
    //para mas usos puedo buscar la docu en google splitjs

    //ahora le damos la vuelta al array con reverse que invierte el orden de los elementos de un array

    // CON LA FUNCION JOI UNIMOS DOS TEXTOS EN UN ARRAY

    if(invertido === texto)
    {
        console.log("es palindromo");
    }
    else
    {
        console.log("no es una palabra palindroma");
    }
}

//ejecuto la funcion
palindromo(palabra);  // asi ejecutamos las funciones