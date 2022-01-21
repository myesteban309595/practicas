
/*
  a tu equipo de desarrollo el cliente les ha pedido realizar un algoritmo de indexacion
  y optimizacion de almacenamiento en el proceso de inventario.

  sin embargo el equipo tiene probloemas con un metido que no saben como
  realizar de forma optima y te han pedido ayuda para resolverlo.

  siguiendo el principio de responsabilidad unica (SRP), vas a construir una funcion que 
  tiene como unica responsabilidad calcular la cantidad de numeros diferentes dentro de una
  lista dada.

  function description

  complete la funcion en el editor abajo, la funcion recibe la lista de tareas, y debe retornar la 
  cantidad de valores unicos que existen.

  constraints

  0<= N <= 100.000
  0 <= Xi <= 1.000.000.000

  input format for custom testing

  la primera linea contiene un entero n, que denota el numero e elementos de la lista
  luego existen n lineas cada una indicando el elemento xi de la lista

  sample case 0

  sample input for custom testing

  5
  5
  3
  5
  2
  5

  sample output

  3

  explanation

  si tenemos tareas con diracion {5,3,5,2}  5, 2, 3 son diferentes elementos

  sample case 1

  sample input for custom testing

  4
  1
  2
  3
  4

  sample output

  4

*/

// case 0

let x = [5,5,3,5,2,5]

// case 1

//let x = [4,1,2,3,4]


function CantidadMinimaDeDias(x) {

    const xi = {};

    x.forEach( e => {

        xi[e] == !xi[e] ? 1 : xi[e] += 1

    });

    const objeto = Object.keys(xi);
    const cant = objeto.length;
    console.log(`los objetos unicos en el array son: ${objeto}`);
    console.log(`la cantidad de numeros unicos en la lista son: ${cant}`);


}

CantidadMinimaDeDias(x);

