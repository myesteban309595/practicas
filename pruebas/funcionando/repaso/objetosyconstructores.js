
// practica objetos y contructores

// para llamar el atributo de unobjeto se coloca el nombre del objeto.atributo


// ESTO ES UN OBJETO
// const perro = {

//     raza : "pitbul",
//     edad : 9,
//     color : "marron"
// }

// console.log(perro.raza);

// ESTO ES UN CONSTRUCTOR

function perro(raza, edad, color, vivo){

    this.raza = raza,
    this.edad = edad,
    this.color = color,
    this.vivo = vivo;

}

let perronuevo =new perro("pitbul", 12, "blanco", true);
console.log(perronuevo);

let perronuevo2 =new perro("boxer", 8, "negro", true);
console.log(perronuevo2);

let animales = [perronuevo,perronuevo2]; // asis e guardan en un array de objetos
console.log(animales);

// ARRAYS DE OBJETOS 

console.log("\n");
var gatos = [

    {
        nombre : "feliz",
        edad : 4,
        color : "gris"
    },
    {
        nombre : "pelusa",
        edad : 10,
        color : "blanco"
    },
    {
        nombre : "solecito",
        edad : 2,
        color : "amarillo"
    }

]

console.log(gatos);