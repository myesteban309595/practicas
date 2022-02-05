

const arr = [2,1,3]

function arrayChallenge(arr) {
    // para cada elemento del array determine el valor del contador
    // hay valores que pueden ser almacenados en un array y retornados
    
    // ejemplo 
    /*
       n= 3 , numero de elementos
       arr = [2,4,3]
       
       - para arr[0] = 2 , el contador inicia en 0 y no hay elementos a la izquierda,
         por tanto inicia el contador = 0
       - para arr[1] = 4 ,  el contador inicia en 0 y incrementa |4-2| = 2 con la primera
         y unica comparacion: contador = 2
       - testing arr[2] = 3, contra el primero 4, contador = 0-|3-4| = -1, y de  
         nuevo 2 , contador = -1 + |3-2| = 0
       - el array respuesta es [0,2,0]
       
       // si el elemento de la izquierda es mas grande, la diferencia absoluta es suibstraida del     
          contador
          
       // si el elemento de la izquierda es menor, la diferencia absoluta es añadida al contador
       
    
    */
    
    

       return arr.reduce((cont, n, index) => {

            if(index != 0)
            {
               cont -= n ;
            }else {

                cont = n;
            }

            return cont
       },0)
    

}

console.log(arrayChallenge(arr) );