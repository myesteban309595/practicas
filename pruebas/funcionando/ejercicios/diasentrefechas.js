
// calcular la cantidad de dias que han transcurrido entre dos fechas

let fecha1 = new Date('07/15/2000'); // creamos la instancia de la fecha inicial
let fecha2 = new Date('07/30/2018'); // creamos la instancia de la fecha inicial

// calculamos la cantidad de milisegundos en un dia

let milisegundosdia = 24*60*60*1000; // milisegundos en un dia

let diferenciadias = Math.abs(fecha1.getTime() - fecha2.getTime()) // gettime calcula el tiempo en milisengundos y abs calcula valor absoluto

let dias = Math.round(diferenciadias/milisegundosdia); // con esto tendremos efectivamente la cantidad de dias que han transcurrido entre fechas

let añospre =(diferenciadias/milisegundosdia)/365;
let años = Math.round(añospre)

let añosround = años*365*24*60*60*1000; // converti esos años redondeados a dias
let diassobra = Math.abs((añosround-diferenciadias)/milisegundosdia)


console.log(dias);

console.log(`han transcurrido ${dias} dias desde la fecha`);
console.log(`han transcurrido ${años} años con ${diassobra} dias desde la fecha`);

