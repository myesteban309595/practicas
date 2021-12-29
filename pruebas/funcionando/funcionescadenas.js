
/* lenght : calcula la longitud de una cadena de texto
   concat("string"): transforma todos la cadena a sus correspondientes caracteres en mayuscula

   toLowerCase(): transforma todos la cadena en minuscula

   charAt(position): obtiene el caracter que se encuentra en la posicion inducada

   indexOf(caracter): calcula la posicion en la que se encuentra el caracter indicado dentro de la cadena de texto

   lastIndexOf(caracter): calcula la ultima posicion en la que se encuentra el caracter indicado dentro de la cadena

   substring(inicio, final): extrae una porcion de cadena de un texto

   split(separador): convierte una cadena de texto en una rray de cadenas de texto, parte la cadena de texto determinando sus trozos a partir del caracter separador
   */

// escribimos una cadena almacenandola en una variable

// prompt permite mostrar un mensaje de alerta en la pantalla

// var cadena = prompt("escribe una cadena");

var cadena = "escribe una cadena";

// imprimir las funciones y valores de cadena

// alert("longitud de la cadema :" + cadena.length); // devuelve la longitud de la cadena
// alert("mayuscula es :" + cadena.toLocaleLowerCase()); // devuelve la longitud de la cadena
// alert("minuscula es :" + cadena.toLocaleLowerCase()); // devuelve la longitud de la cadena
// alert("posicion 1 es :" + cadena.charAt(1)); // devuelve la longitud de la cadena

// // solicitar un caracter al usuario

// var caracter = prompt("escribe un caracter a buscar");
 var caracter = "escribe un caracter a buscar";

// alert("posicion en la que esta la letra :" + cadena.indexOf());
// alert("posicion en la que esta la ultioma letra:" + cadena.lastIndexOf(1));
// alert("porcion :" + cadena.substr(1,(cadena.length)-1)); // recordar que elprimero caracter es 0

// dividir en una serie de letras

console.log(cadena.split("")); // para separar letra por letra no ponemos espacio, para separar por palabras un espacio
console.log("longitud de la cadema :" + cadena.length);
console.log("mayuscula es :" + cadena.toLocaleUpperCase());
console.log("minuscula es :" + cadena.toLocaleLowerCase());
console.log("posicion 1 es : " + cadena.charAt(0));
console.log("posicion en la que esta la letra :" + caracter.indexOf("e"));
console.log("posicion en la que esta la ultioma letra:" + caracter.lastIndexOf("e"));
console.log("porcion :  " + cadena.substr(5,(cadena.length)-1));


const texto = "hola me llamo marlon";

function separarcadena (texto) {


        const textoseparado =texto.split("");
        console.log(textoseparado);

        
        textocortado = texto.substr(1, (texto.lenght)-1 );
        console.log(textocortado);

} 

separarcadena(texto); // llamo la funcion

function cortarcadena (texto) {

    textocortado = ("porcion :  " + texto.substr(5,(texto.length)-1));
    console.log(textocortado);

}

cortarcadena(texto);

function mayuscula (texto) {

    textocortado = texto.toLocaleUpperCase();
    console.log(textocortado);

}

mayuscula(texto);

function minuscula (texto) {

    textocortado = texto.toLocaleLowerCase();
    console.log(textocortado);

}

minuscula(texto);

function posicionprimera (texto) {

    textocortado = texto.indexOf("a");
    console.log(textocortado);

}

posicionprimera(texto);

function posicionultima (texto) {

    textocortado = texto.lastIndexOf("a");
    console.log(textocortado);

}

posicionultima(texto);

function quehayenestlaposicion (texto) {

    textocortado = texto.charAt(8);
    console.log(textocortado);

}

quehayenestlaposicion(texto);

function longitudtexto (texto) {

   textocortado = texto.length;
   console.log("la longitud del texto es: " + textocortado);

}

longitudtexto(texto);

module.exports = (separarcadena, cortarcadena);