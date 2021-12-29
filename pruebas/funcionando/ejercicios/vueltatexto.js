/*
   dada una cadena de texto, darle la vuelta e invertir el
   orden de sus caracteres, sin usar metodos propios del lenguaje
   solo estructuras de control

   como hacerlo ?

   - funcion con parametro "texto"
   - crear una variable para guardar la cadena invertida
   - bucle que recorra el string y guarde los caracteres en la variable
*/

const texto = "010";

function invertir(texto)
{
    let invertido = "";
   /*

    of saca valores de las letras
    in saca numeros de las letras

   */

    for(let letra of texto) // este for recorre cada letra del parametro texto
    {
        //console.log(letra);

        //guardar cada una de esas letras dentro de la variable invertido

        for (let letra of texto)
        {
            
            invertido = letra + invertido; // nos va a guardar letra a letra dentro de invertido

            // si concateno con += que es igual a invertido = invertido+texto me recorre las letras y queda en el mismo orden
            // en cambio si invertido = texto + invertido se recorre y le da la vuelta al string
        }
        
        if(texto === invertido)
        {
            console.log("es palindroma la palabra");
        }else{
            console.log("la palabra no es palindroma");
        }

        console.log(invertido);
        return invertido;

    }

}

invertir(texto); // siempre ejecutar la funcion