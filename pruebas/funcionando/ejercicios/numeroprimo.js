/*

   dado una seria de numeros,  determinar cual de estos es un numero primo
   cabe destacar que los numeros primos solo son divisibles entre el mismo y en 1

   RETO PROPIO

   cuantos numeros primos hay entre el rango de numero que asignamos

   mostrar solo los numeros primos

*/

//  if (i != 3 && i != 5 && i != 1 && i != 2)
// numeros primos : / 0 1 / 2 3 5 7 11 13 17 19 23 29 31 37 41 43 47 53 59 61 57 71 73 79 83 89 97

const numero = 100 ;

function  numeroprimo(numero) {

    for (let i = 0; i <= numero; i++) {
        
        
        if( (i % 2 === 0) || (i % 3 === 0) || (i % 5 === 0))
        {

            if ((i != 1) && (i != 2) && (i != 3) && (i != 5)) // todos los numeros menores a 4 son primos

            {
                result = "" ;
                
            }

        } else{

            result = "primo "

        }
        
        console.log(i, result);
}
}

//console.log("hola");

numeroprimo(numero);