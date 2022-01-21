/*  
   escribir un algoritmo que:

   imprima los numeros del 1 al 100 en una nueva linea con la condicion de que si el numero a imprimir
   es multiplo de 3, imprima el string 'Fizz', si el numero es multiplo de 5 imprima 'Buzz', 
   y si es multiplo de ambos imprima "fizzbuzz"

*/


for (i=0; i<=100;i++) // imprimimos los numeros del 1 al 100
{

    let result = '';

    if(i % 3 === 0) // para saber si es multiplo de 3
    {
        result = 'Fizz';
    }

    if(i % 5 === 0) // para saber si es multiplo de 3
    {
        result = 'Buzz';
    }
    
    if(i % 3 === 0 && i % 5 === 0) // para saber si es multiplo de 3
    {
        result = i + ' FizzBuzz';
    }

    console.log(result || i );

}