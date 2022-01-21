

/*
   EL PROGRAMADOR PERFECCIONISTA

   ricardo es miembro de nuestro equipo, y aunque suele ser muy productivo
   sufre de un impulso que le lleva a perfeccionar y reescribir una parte del
   trabajo que hace cada dia

   cada dia es capaz de escribir F cantidad de funciones nuevas, pero su impulso
   lo lleva el mismo dia a borrar R cantidad de las funciones, y asi cada dia, increibiblemente
   cuando termina su trabajo no vuelve a refactorizar ninguna funcion, sino que envia
   el pull request a review.

   todos aman el trabjo de ricardo, pero el arquitecto del equipo esta preocupado por el deadline 
   (fecha de entrega) de las historias que le asigna a ricardo, y te pide su ayuda con un programa
   que determine si ricardo podra cumplir con su asignacion. para ello el arquitecto te entregara
   un numero D correspondiente al numero de dias del deadline de entrega, T la cantidad de funciones
   totales que espera el cliente que realice ricardo, F la cantidad de funciones nuevas que escribira ricardo 
   por dia, R la cantidad de funciones que borrara ricardo cada dia al finalizar su trabajo.

   calcule si ricardo puede o no cumplir con las tareas asignadas

   true      lo lograra
   false     no lo lograra

   la plantilla convertira el true en 1 y false en 0 automaticamente

   FUNCTION DESCRIPTION

   complete la funcion, que recibira un arreglo de casos a evaluar por el arquitecto. cada caso se 
   compondra de la siguiente manera

    * caso[i][0] (D) numero de dias para el deadline
    * caso[i][1] (T) numero de funciones esperadas por el cliente al finalizar el deadline
    * caso[i][2] (F) numero de funciones nuevas que puede escribir ricardo en un dia
    * caso[i][3] (R) numero de funciones que borrara ricardo al finalizar el dia

   CONTRAINTS

   0 <  D <= 10000
   1 <= T <= 5000
   2 <= F <= 5000
   3 <= R <= 5000

   INPUT FORMAT FOR CUSTOM TESTING

   sample case '0

   sample input for custom testing

   1
   4
   5 110 30 10

   sample output

   1

   EXPLANATION

   el cliente espera en 5 dias que ricardo escriba 110 funciones. ricardo podra escribir 30 funciones,
   pero finalizando el dia borrara 10 de las funciones escritas. cada dia ricardo escribira 25 funciones
   pero borrara 5, al finalizar el dia 4 ricardo tendra 80 funciones en codigo, como el dia 5 podria escribir 
   30 funciones nuevas terminara su trabajo y enviara el pull request sin borrar ninguna funcion, ricardo
   cumplira con el deadline.

   DIA      TOTAL FUNCIONES
   1             20     30-10
   2             40     50-10
   3             60     70-10
   4             80     90-10
   5             110    110

   sample case 1

   sample input for custom testing

   1
   3
   2 40 20 5
   5 110 30 10

   sample output

   0
   1

   explanation
   en este caso ricardo no lograra cumplir su cometido, ta que el dia 2 tendra a lo sumo 35 funciones escritas
   de las 40 requeridas por elcliente


*/

// case 0
//            D  T  F  R
//const caso = [5,110,30,10]

// case 1
//            D  T  F  R
const caso = [2,40,20,5]


function podraCumpli(caso){

   let D = 0;
   let T = 0;
   let F = 0;
   let R = 0;

   let acum = 0;

   caso.forEach((e,index) => {

         if(index == 0)  D = e;   // numero de dias
         if(index == 1)  T = e;   // tareas pedidas por el cliente
         if(index == 2)  F = e;   // funciones escritas
         if(index == 3)  R = e;   // funciones borradas
         
      });
      
      for(let i=0; i<D ; i++)
      {
         acum += (F-R)
         console.log(acum+R);
      }
      
      console.log(`acumulador: `+ acum);
      console.log();
      console.log(`D: ${D}`);
      console.log(`T: ${T}`);
      console.log(`F: ${F}`);
      console.log(`R: ${R}`);

      return (acum + R) >= T ? true : false ;

}

//podraCumpli(caso);
console.log(podraCumpli(caso));
