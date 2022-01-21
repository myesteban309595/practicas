
/*
   ESTIMACION PERDIDA

   Diego es un lider de proyectos, que muy juicioso llevaba el control de las estimaciones
   de las tareas asignadas a los diferentes equipos y personas en un excel, pero
   por desgracia el archivo quedo corrupto y no pudo ser rescatado.

   sin embargo diego tenia un resumen que entregaba a su jefe cada semana, donde le contaba por
   equipo, la cantidad de tareas que dicho equipo tenia, el promedio aritmetico de las estimaciones
   de tareas definido en horas, y la duracion de la tarea con menor valor estimado.
   
   diego necesita saber para una presentacion hoy con el cliente, ? cual es la maxima duracion que puede 
   tener una de las tareas ? y te ha pedido ayuda para resolver el problema

   FUNCTION DESCRIPTION

   complete la funcion en el edito abajo, la funcion recibe una lista de equipos con 3 valores (N,R,T),
   y debe retornar una lista que representa el numero de dias necesario para pagar cada deuda.

    * equipo[j][0] = (N) el numero de tareas asignadas en el equipo j
    * equipo[j][1] = (T) el numero de horas promedio de las tareas en el equipo j
    * equipo[j][2] = (R) La duracion en horas de la tarea mas pequeña en el equipo j
    
   contraints

   2 <= N <= 100     tareas asignadas
   R <= T <= 2000    numero de horas promedio
   1 <= R <= 2000    r duracion en horas tarea mas pequeña

   input format for custom testing

   la primera linea contiene el numero de equipos y la constante 3
   luego viene una linea por cada equipo con las variables N,T y R en ese orden

   sample case 0

   sample input for custom testing

   2 3
   N T  R
   2 4  2
   3 16 8   = 48 

   sample output

   6
   32

   explanation

   si el equipo (1) tiene 2 tareas asignadas, el promedio para hacer dichas tareas es de 4 horas
   y la tarea mas pequeña tiene una duracion estimada de 2 horas, la tarea mas gende
   deberia ser de 6 horas.

   AVG(6,2) = 4

   si el equipo 2 tiene 3 tareas aseignadas, el promedio para hacer dichas tareas es 16 horas y la 
   tarea mas pequeña tiene una duracion estimada de 8 horas, la tarea mas grande nunca pasara las 32 
   horas.

   si hacemos la tarea 1 la mas pequeña de 8 horas, la tarea 2 la hacemos lo mas grande posibloe que 
   son 32 horas y la tarea 3 de 8 horas mas, el proomedio seran las 16 horas estipuladas.

   AVG(32, 8, 8) = 16

   sample case 1

   sample input for ustom testing

   2
   3 2 1
   4 1 1

   sample output

   4 
*/

const equipos = 2;
const constante = 3;
 //             N T R
//const equipo = [1,1,1]
//const equipo = [2,4,2];
//const equipo = [3,16,8];
//const equipo = [3, 2, 1];
const equipo = [4, 1, 1];

function maximoNumeroHoras(equipo){


   let N = 0;
   let T = 0;
   let R = 0;
   let tareagrande =0;

   equipo.forEach((element,index) => {

      //console.log(element);
      //console.log(index);

      if(index === 0)  N = element;
      if(index === 1)  T = element;
      if(index === 2)  R = element;
      
   });

   if((2 <= N <= 100) && (R<= T<2000) && (1 <= R <= 2000))  // restricciones que pide el codigo
   {

         //console.log("hola");
         let totalhoras = T*N;

         if(N <= 2)
         {
           return tareagrande = totalhoras - R
           //console.log(tareagrande);

         }else{


            let tp = (N-1)*R  // numero de tareas pequeñas
            //console.log(tp);
            return tareagrande = totalhoras-tp;


         }

   }

}

maximoNumeroHoras(equipo)
console.log('La tarea grande tiene una duracion de: ' + maximoNumeroHoras(equipo));