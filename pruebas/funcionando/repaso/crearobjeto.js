
// crea un objeto con un metodo "hola" que escribe "hola <name> en la consola"

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

const persona =
{
    name: "andrea",
    hola2: () => {

        console.log(`hola ${persona.name}`);
    }

}

persona.hola2();
console.log(persona.name);
