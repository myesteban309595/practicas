
/*
   un robot esta llegando amarte y esta enviando señales de sos
   
   las letras vienen e mesajes sos pero debido en la redaccion tecnica se han alterado las letras por la redaccion

   example 

   s = 'SOSTOT'

   el mensaje original era sossos, dos de los caracteres del mensaje fueron reemplazados

   function description

   compelte el ejercicio en la funcion de abajo

   * string s : es el string que se recibe en la tierra

   Returns

   * int : el numero de letras cambiadas durante la transmision

   input format

   una linea de entrada: un solo string : s

   constraints

   * 1<= lenght of s <= 99
   * lenght of modulo 3 = 0
   * s contrendra solo mayusculas  ascii (A-Z)

   sample imput 0

   SOSSPSSQSSOR

   sample output 0

   3

   explanation 0

   s = SOSSPSSQSSOR y una señal de longitud |s| = 12- enviaron 4 sos (i.e 12/3) = 4

   sample input 1

   SOSSOT

   sample output 1

   1

   sample input 2

   SOSSOSSOS

   sample output 2

   0

*/

//Case 0
//const s = 'SOSSPSSQSSOR'    // output 3

// case1

//const s = 'SOSSOT'  // output 1

// case2
const s = 'SOSSOSSOS'; // output 0



function mensaje(s){

    let cont = 0;
    let tamaño = 0;
    for(letra of s)
    {
        console.log(letra);
        console.log(typeof letra);
        tamaño++

        if(letra === "S" || letra === "O")
        {
            console.log(letra);
            cont ++
        }
    }

    const total = tamaño - cont;
    return total;
}

mensaje(s)
console.log(mensaje(s));