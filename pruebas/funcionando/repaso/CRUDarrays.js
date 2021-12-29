
const gatos = [

    {
        id: 1,
        nombre : "feliz",
        edad : 4,
        color : "gris"
    },
    {
        id: 2,
        nombre : "pelusa",
        edad : 10,
        color : "blanco"
    },
    {
        id: 3,
        nombre : "solecito",
        edad : 2,
        color : "amarillo"
    }

]


// PARA AGREGAR INFORMACION PUSH

// gatos.push(  // se agrega al final del array
//     {
//         nombre: "kitty",
//         edad: 5,
//         color: "naranja"
//     },
//     {
//         nombre: "anderomeda",
//         edad: 18,
//         color: "negro"
//     }
// );

const nuevosagregados = gatos.push(  // se agrega al final del array
    {
        id: 4,
        nombre: "kitty",
        edad: 5,
        color: "naranja"
    },
    {
        id: 5,
        nombre: "andromeda",
        edad: 18,
        color: "negro"
    }
);
    

// AGREGAR AL PRINCIPIO UN OBJETO

const agregadounshift = gatos.unshift( 
    
    {
        id: 6,
        nombre: "primero",
        edad: 6,
        color: "especial"
    }
);
        

// PARA ELIMINAR INFORMACION

const eliminado = gatos.pop(); // el metodo pop me elimina el ultimo elemento del arraay
console.log(gatos);

// PARA ELIMINAR EL PRIMER ELEMENTO

const eliminadoprimero = gatos.shift(); 

// PARA REALIZAR ELIMINACIONES EN RANGO 

const rangoeliminado = gatos.splice(2,1)   // si no coloco el otro rango, elimina de alli hacia abajo el segundo parametro es cuantos se eliminaran despues del aprametro

// PARA MODIFICAR O ACTUALIZAR o reemplazar UN ELEMENTO

const rangoemodificado = gatos.splice(0,2,
    {

        id: 8,
        nombre: "segundo",
        edad: 6,
        color: "especialsegundo"

    },
    {

        id: 9,
        nombre: "tercero",
        edad: 6,
        color: "especialtercero"

    }

    )  // QUIERO MODIFICAR EL 2, PUEDO MODIICAR VARIOS AL TIEMPO

// PARA AGREGAR VARIOS ELEMENTOS O ELEMENTOS SIN NECESIDAD DE REEMPLAZAR O ELIMINAR


const rangoagregadosineliminar = gatos.splice(1,0, // al poner cero le digo, no me elimines ninguno despues del index 0
    {
        id: 10,
        nombre: "AGREGADOSINREEMPLAZAR1",
        edad: 6,
        color: "especialsegundo"
    },
    {
        id: 11,
        nombre: "AGREGADOSINREEMPLAZARSEGUNDO",
        edad: 6,
        color: "especialtercero"

    }
);

console.log(gatos); // nos imprime todo el array

console.log();

console.log("elemento eliminado:",eliminado);
console.log("elemento primero eliminado:",eliminadoprimero);
console.log("el elemento agregado:", agregadounshift);
console.log();
console.log("se eliminaron: ", rangoeliminado);
console.log();
console.log("se reemplazaron: ", rangoemodificado);

