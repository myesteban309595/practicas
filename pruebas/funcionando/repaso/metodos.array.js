function aleatorio (min,max){

    return Math.floor(Math.random() * (max-min)+min);
}

array = [1,2,5,6,4,7,8,9]
nombres = ['marlon', 'cristian', 'ingrid', 'sebastian']
desordenadonumero = [1,2,5,7,9,3,4,8,6]
desordenletra = ['a','u','s','c','b','w','i','e']
texto = "hola mundo"

// metodo map, permite recorrer una rray y modificar los valores y retornar un array del mismo tamaño

const resultado = array.map(result => result*2);
console.log(resultado);

//metodo filter(), Recorre el array y retorna un nuevo array con aquellos elementos que pasen una determinada condición.

const filterarray = array.filter(result => result === 2 || result === 8)
console.log(filterarray);

// metodo foreach()

const recorrerforeach = array.forEach((index,element) => {console.log(element,index) });

//metodo find()

const findelement = array.find(element => element > 4); // busca el primer elemento que cumpla la condicion
console.log(findelement);

// metodo sort()  // sirve para ordenar un arreglo

const ordenarnumero = desordenadonumero.sort((a,b) => (b-a)); // (a-b) imprime invertido una array
console.log(ordenarnumero);

const ordenarletras = desordenletra.sort((a,b) => a > b ? 1 : -1); // ordenar creciente
console.log(ordenarletras);

// metodo some()
// uno de los elementos debe cumplir la condicion

const metodosome = array.some(num => num > 3) // retorna true
console.log(metodosome);

// metodo every()
// todos los elementos deben cumplir la condicion

const metodosome2 = array.every(num => num < 4) // retorna true
console.log(metodosome2);

// metodo concat()

const concatenado = array.concat(desordenadonumero)
console.log(concatenado);

// metodo includes()
// este metodo determina si un elemento esta dentro de un array y retorna un true o false

const comprobar = array.includes(4)
console.log(comprobar);

// metodo join()

const encadenar = array.join("") // "" encadena en uno solo , "-" encadena pero separa por una raya
console.log(encadenar);

// metodo reduce()

const sumatoria = array.reduce((acumulator, current)=> acumulator+current) // suma los array
console.log(`la sumatoria del reduce es : ${sumatoria}`);

// metodo indexof

const indexof = nombres.indexOf('sebastian');  // me manda la posicion del elemento
console.log(`se encuentra en la posicion : ${indexof}`);

// metodo findindex() // retorna el indice del primer elemento que cumpla la condicion

const encontrarprimerporid = nombres.findIndex(user => user === 'ingrid')  // retorna el id del primer elemento con esa condicion
console.log(`el primer elemento con la condicion tiene id : ${encontrarprimerporid}`);

// metodo fill // fill() : Cambia todos los elementos de un array por un valor estático, desde el índice de inicio hasta el índice final. Retorna el array modificado.

const reemplazar = array.fill(10,3,6) // llenar con 10 dese la posicion x hasta la posicion 6 (x,y) o (x,y,z)
console.log(reemplazar);

// metodo push  // agrega un elemento al final del array

const agregarelemento = nombres.push('eybar')
const elementoagregado = nombres.find(e => e === 'eybar')
console.log(`el elemento agregado es: ${elementoagregado}`);
console.log(console.log(nombres))

// metodo pop // elimina el ultimo elemento del array

const eliminarultimo = nombres.pop();
console.log(`se elimino el ultimo elemento: ${eliminarultimo}`);
console.log(nombres);

// metodo shift

const eliminarprimer = nombres.shift();
console.log(`se elimino el primer elemento: ${eliminarprimer}`);
console.log(nombres);

// metodo unshift

const agregaralinicio = nombres.unshift(('andrea'), ('nelson'))
console.log(`se agregaron los siguientes elementos: ${agregaralinicio}`);
console.log(nombres);

// metodo slice() // devuelve una porcion del array tambien porciona el array

const slicetexto = texto.slice();
console.log(slicetexto);
const porcion = nombres.slice(2,4); // devuelve del 2 al 4
console.log(porcion);

// metodo reverse() 

const reversa = nombres.reverse();
console.log(reversa);

// metodo splice

console.log("");
console.log(nombres);
const sustituir = nombres.splice(1,0,'juan pablo') //  si le doy 0 agrega en esa posicion
console.log(sustituir);
console.log(nombres);

// metodo flat()

const subarray = [1,2,3,[9,8,7,6]]

const nuevoarray = subarray.flat()
console.log(nuevoarray);

// isarray

// const esarray = subarray.isArray([1,2,3,[9,8,7,6]])
// console.log(esarray);

// FROM()

const objiterable = ['holamundo']
const instancia = objiterable.from('holamundo');
console.log(instancia);