

const input = [

    "aab", 
    "abb", 
    "abab" 
]

// quiero como salida ab, ab , abab

/* CONVERTIR STRING A ARRAY
   -string.split("")
   -[...string]
   -array.from(string)
   -object.assign([], string)

*/

/* PASOS

   * primero tomo el array y con la funcion join convierto todo a una misma cadena de texto
   * luego mediante la operacion substr tomo cada fraccion y la convierto en una salida individual
   * por ultimo convierto cada una de estas fracciones en arrays individuales con la operacion .split() o array.from()
   * finalmente con la funcion .concat, concateno cada uno de los arrays individuales dandome una salida output
*/

function salida(input){

   unir = input.join("");
   console.log(typeof unir);
   
   parte1 = (unir.substr(1,(unir.length-8))).split(); // split se usa para convertir string a array
   console.log(parte1);
   
   parte2= (unir.substr(3,(unir.length-8))).split();
   console.log(parte2);
   
   parte3= (unir.substr(6,(unir.length-6))).split();
   console.log(parte3);
   
   output = parte1.concat(parte2,parte3)
   console.log( `la entrada: ${input} fue convertida a la salida : ${output}`);
   
   console.log("");
   const convertirstring = Array.from(parte1) // otra forma de convertir un string a array
   console.log(convertirstring);

} 

salida(input);


// para convertir un array a string podemos usar el metodo join


