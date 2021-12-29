
function getaleatorio(min,max) {

    return Math.floor(Math.random() * (max-min) + min)

}

console.log(getaleatorio(1,5));   // para imprimir un solo numero aleatorio

// para obtener estos numeros puedo hacer un for para filtrar la cantidad de numeros a obtener y almacenarlos en un array

function aleatorio(){

    let array = [];

    for (let i = 0; i < 10; i++) {

        array.push(getaleatorio(1, 100)); // para almacenar los numeros en un array
        
    }

    console.log(array);

}

aleatorio();