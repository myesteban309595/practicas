

// esta es una prueba que me pusieron en mercadolibre, consta de tener un array de numeros, debo filtrar cuantos de esos numeros no son unicos
// luego filtrar cuantos estan DUPLICADOS

// como ejercicio extra quiero filtrar aquellos numeros que se repiten solamente sin importar la cantidad

// y en otro lado imprimir aquellos que sean unicos esto ahcerlo en otro js

// de un array obtener los numeros que se duplican solamente


function duplicado () {

    const numeros = [4,5,6,2,2,5,4,8,7,7,7,7,7,6,6,2,3,3,7,4,4,5,1,1]  
    const array = [];

    const dup = {};

     numeros.forEach(num => {

        dup[num] = !dup[num] ? 1: dup[num] += 1
        
    });

    hola = Object.keys(dup).map(num => ({numero: num, veces: dup[num]})).sort((a,b) => a.veces - b.veces)
    
    return hola.filter(h => h.veces == 2).map(num => num.numero)
        
    
}


console.log(duplicado())
console.log(numeros);


