
// DIBUJAR UN CUADRADO HUECO CON ASTERISCOS

//ejemplo:
//cuadrado(4)   seria un cuadrado de 4x4 

//devuelve 

// ****
// *  *
// *  *
// ****

// PASOS PARA SOLUCIONARLO HAY MIL MANERAS

//crear una funcion para crear el lado de arriba y de abajo del cuadrado
//funcion que haga los lados y los huecos del cuadrado
//crear un bucle de 0 al tamaño deseado menos 2 para equilibrar con el lado de arriba y abajo (proporciones)
//bucle para pintar los espacios menos dos para equilibrar
// ir comentando en una variable cada linea del cuadro
//mostrar el cuadrado en la funcion principal

//***************************************************** FUNCION PARA CREAR LADOS******************************************************* */


//const numero = req.param;

const numero = 4;

function lado(numero) 
{
    let contenido = "";

    for (i=0 ; i<numero; i++)
    {
       contenido += "*";
    }

    return contenido;

}


function lateral(numero) 
{
    
    let dibujo = "";
    let contenido = "";
    
    for (let i=0 ; i<(numero-2); i++)
    {
        contenido = "*";

        for(let x=0 ; x < (numero-2); x++)
        {
            contenido += " ";
        }

        contenido += "*";

        dibujo += contenido + "\n";

     
    }
    
    return dibujo;
    
}

console.log(lado(numero));
console.log(lateral(numero));
console.log(lado(numero));