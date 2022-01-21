
/*
  ROBOT EN MARTE

  La NASA nos ha contratado y como empresa llevaremos nuestro primer robot a marte.

  nuestro robot se mueve 1 metro en cada direccion con el comando izquierda (L) derecha (R)
  ARRIBA (A) ABAJO (D)
  
  la NASA prepara una lista de indicaciones para el movimiento del robot desde la base de carga
  en el ejemplo marcada como punto 0.

  sin embargo estan preocupados porque en caso de una emergencia el robot pueda regresar a tiempo
  a la base de carga y quieren que evaluemos los planes de movimiento en un simulador, y les digamos
  la cantidad de isntrucciones maximas que deberiamos enviar al robot cuando se encuentre en su punto
  mas lejano para que pueda retornar a la base
  
  calcule cual es el numero maximo de instrucciones que deberia enviarse al robot
  para que en algun punto del recorrido regrese a la base

  FUNCTION DESCRIPTION

  complete la funcion abajo para completar la tarea requerida, la funcion tendra
  una lista de planes a ejecutar, evalue cada uno y retorne una lista con el numero
  maximo de isntrucciones

  constrainst

  len(instruccion) <= 10000

  INPUT FORMAT FOR CUSTOM TESTING

  primero ingresara un entero N definiendo la cantidad de planes que la NASA quiere evaluar,
  luego existiran N lineas con las cadenas de instrucciones

  SAMPLE CASO 0
  sample input for custom testing

  1
  RUULLLDDDR

  sample output
  4

  EXPLANATION
  Ruta: RUULLLDDDR el robot se movera como se ve en la imagen

  6 5 4 3 x 
  7 x x 2 x 
  8 x 0 1 x 
  910 x x x
  x x x x x

  siguiendo esta ruta, el punto 6 seria el punto mas lejano de la base, 
  y necesitaria 4 instrucciones para poder retornar a la base, (RDRD o RRDD o DDRR o DRDR)

  SAMPLE CASE 1
  
  2
  U
  UUU

  SAMPLE OUTPUT
  
  1
  3
 
*/