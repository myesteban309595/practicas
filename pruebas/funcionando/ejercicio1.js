

const numero = 6 ;

function lado(numero) 
{

    let contenido = "";

    for(let i=0;i<numero;i++)
    {

        contenido = contenido + "*";
    }
    return contenido;
}

function lateral(numero)
{
    let dibujo = "";
    let contenido = "";

    for(let i=0;i<(numero-2);i++)
    {
        contenido = "*";
        
        for(let c=0;c<(numero-2);c++)
        {

        contenido = contenido + " ";

        }
        contenido = contenido + "*";

        dibujo += contenido + "\n";
    }

    return dibujo;

}

console.log(lado(numero));
console.log(lateral(numero));
console.log(lado(numero));
