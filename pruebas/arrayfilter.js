
 const users = [


    {id: 0 , nombre: "marlon yoel" , apellido: "esteban valencia", telefono: "3194329073", correo: "marlon@hotmail.com", estado: "activo", edad: 26 },
    {id: 1 , nombre: "ingrid paola" , apellido: "jimenez robles", telefono: "3142589639", correo: "ingrid@hotmail.com", estado: "activo", edad: 25},
    {id: 2 , nombre: "sandra mildred" , apellido: "valencia badillo", telefono: "3122365785", correo: "sandra@hotmail.com", estado: "activo", edad: 49},
    {id: 3 , nombre: "cristian javier" , apellido: "esteban valencia", telefono: "3132547896", correo: "cristian@hotmail.com", estado: "activo", edad:24},
    {id: 4 , nombre: "eybar zulay" , apellido: "valencia badillo", telefono: "3237854125", correo: "eybar@hotmail.com", estado: "activo", edad:43},
    {id: 5 , nombre: "ivan sebastian" , apellido: "almeida valencia", telefono: "3154785123", correo: "ivan@hotmail.com", estado: "activo", edad:20},
    {id: 6 , nombre: "valeryn sofia" , apellido: "salazar valencia", telefono: "3123658592", correo: "valeryn@hotmail.com", estado: "inactivo", edad:15},
    {id: 7 , nombre: "adalid" , apellido: "valencia echeverry", telefono: "3002609836", correo: "adalid@hotmail.com", estado: "activo", edad:78},
    {id: 8 , nombre: "yuliza" , apellido: "diaz alfaro", telefono: "3019822046", correo: "yuliza@hotmail.com", estado: "inactivo", edad:22},
    {id: 9 , nombre: "maria natalia" , apellido: "hernandez cupaja", telefono: "3004508348", correo: "maria@hotmail.com", estado: "activo", edad:24}

];


function aleatorio (min,max){

    return Math.floor(Math.random() * (max-min) + min)
}

const idquery = aleatorio(1,20);

//******************************************************************************* */

const usuario = {

    id: 1,
    nombre : 'marlon',
    apellido: 'esteban',
    edad : 25

}

const valores = Object.values(usuario)
console.log(valores);


// const valor = Object.values(users => users.nombre)
// console.log(valor);


const obtenernombres = function(usuario){

    return usuario.nombre;

}

const obtenerapellido = function(apellidouser){
    return apellidouser.apellido
}

const obtenerid = function(identificador){
    return identificador.id
}

const nombrequery= 'marlon yoel'; 

const filtrado = function(filtro){
    
    let nombreee = filtro.nombre === nombrequery
    return nombreee;
}

console.log();
console.log();

const filtrar = users.filter(filtrado)
console.log(`hey, el usuario filtrado es: ${filtrar} `);
console.log(filtrar);

const soloid = users.map(obtenerid)
console.log(soloid);

const solonombres = users.map(obtenernombres);
console.log(solonombres);

const soloapellido = users.map(obtenerapellido);
console.log(soloapellido);


//******************************** FILTER**************************************** */
const age = 24

const filterbyage = (age)=> {

    return users.filter(user => user.edad == age)

} 
console.log(filterbyage(age));

//******************************************************************************* */

//*******************   METODO find()   **********************/ 


// con el metodo find, especificamente trae el primero del arreglo

// const edadquery = 10;

// const findedad = users.find(user => user.edad === edadquery);

// if(!findedad){

//     console.log("no existe usuario con la edad ingresado");

// }

// console.log(findedad);

// const filteredad = users.filter(user => user.edad === edadquery);

// if(!filteredad){

//     console.log("no existe usuario con la edad ingresado");

// }

// console.log(filteredad);
// // con el metodo filter, trae los que cumplan la condicion

// console.log("");
// console.log("");


// const idmap = users.map(({id}) => id );

// const nombremap = users.map(({nombre}) => nombre );

// const nombreidmap = users.map(function({id, nombre, estado}){

//     return identnombre = {id,nombre,estado};
// })


// const usuarioid = users.filter(user => user.id === idquery)

// if(!usuarioid)
// {
//     console.log("no existe ningun usuario con el identificador: ", usuarioid);
// }


// console.log(idmap); 
// console.log(nombremap); 
// console.log(nombreidmap);

// const estado1 = nombreidmap.estado;
// console.log(estado1);