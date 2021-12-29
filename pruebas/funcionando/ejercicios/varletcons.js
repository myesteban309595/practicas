
// diferencias entre var let const

// var es una variable que se declara y se puede usar en cualquier parte del codigo, incluso si esta dentro de una funcion
// let es una variable que se ejecuta unicamente dentro de la operacion que se esta realizando
// const es un valor ocnstante que no varia

// prueba tecnica, revisa este codigo....

// que imprime ? imprime un 2.... pero necesito que imprima "contratado"; 
// que sucede ?

// function variables() {

//     var i = "contratado";

//     for (var i=0; i < 2; i++)
//     {
//         //
//         //
//         //
//     }

//     console.log(i);
// }

// variables();

// la solucion es sencilla, es simplemente saber la diferencia entre var let y const, si cambiamos var por let en el for podremos imprimir contratado

function variables() {

    const i = "contratado";

    for (var i=0; i < 2; i++)
    {
        //
        //
        //
    }

    console.log(i);
}

variables();