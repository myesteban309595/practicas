
let inicio = new Date(); // asignamos una instancia de la clase date

setTimeout(function(){

    realizartarea(inicio)

},5000)   // importamos la funcion setimeout para crear un temporizador

function realizartarea(fechainicial){

    let fin = new Date(); // fecha en la que finaliza la ejecucion de la tarea
    let diferencia = fin - fechainicial;
    console.log(`el tiempo de diferencia entre dos eventos es de: ${diferencia} milisegundos`);
}

// tenemos que esperar 25 segundo para que aparezca el console