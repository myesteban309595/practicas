
// naliza este codigo, el nombre puede ser cambiado, como harias que este nombre sea inmutable ?


const usuario = 
{
    
    nombre: ' marlon',

    hola: () => {

        console.log(`hola ${usuario.nombre}` )

    } 

}

usuario.hola();
// si deseo cambiar el nombre
usuario.nombre = "pepe"
usuario.hola(); // imprime pepe ahora y no marlon

const nameconst = "carlos"; // volvi el nombre una constante y la llame en el atributo name, de esta forma es inmutable

const persona =
{
    name: nameconst,
    hola2: () => {

        console.log(`hola ${persona.name}`);
    }

}

Object.freeze(persona); // con esto congelo el valor y es inmutable tambien como lo hice yo con un const y reasignando

persona.hola2();
persona.name = "adrian"; // aunque quiera redefinirla como carlos, el nombre es inmutable ya que es un const
//console.log(persona.name);

// https://www.youtube.com/watch?v=G6uvuIJ6Af0