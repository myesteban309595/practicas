
 const users = [

   {id: 0 , nombre: "marlon yoel" , apellido: "esteban valencia", telefono: "3194329073", correo: "marlon@hotmail.com", estado: "activo", edad: 26 },
   {id: 1 , nombre: "ingrid paola" , apellido: "jimenez robles", telefono: "3142589639", correo: "ingrid@hotmail.com", estado: "activo", edad: 25},
   {id: 4 , nombre: "eybar zulay" , apellido: "valencia badillo", telefono: "3237854125", correo: "eybar@hotmail.com", estado: "activo", edad:43},
   {id: 3 , nombre: "cristian javier" , apellido: "esteban valencia", telefono: "3132547896", correo: "cristian@hotmail.com", estado: "activo", edad:24},
   {id: 7 , nombre: "adalid" , apellido: "valencia echeverry", telefono: "3002609836", correo: "adalid@hotmail.com", estado: "activo", edad:78},
   {id: 8 , nombre: "yuliza" , apellido: "diaz alfaro", telefono: "3019822046", correo: "yuliza@hotmail.com", estado: "inactivo", edad:22},
   {id: 5 , nombre: "ivan sebastian" , apellido: "almeida valencia", telefono: "3154785123", correo: "ivan@hotmail.com", estado: "activo", edad:20},
   {id: 6 , nombre: "valeryn sofia" , apellido: "salazar valencia", telefono: "3123658592", correo: "valeryn@hotmail.com", estado: "inactivo", edad:15},
   {id: 2 , nombre: "sandra mildred" , apellido: "valencia badillo", telefono: "3122365785", correo: "sandra@hotmail.com", estado: "activo", edad: 49},
   {id: 9 , nombre: "maria natalia" , apellido: "hernandez cupaja", telefono: "3004508348", correo: "maria@hotmail.com", estado: "activo", edad:24}

];

const array = [2,4,5,6,7,3,9,];
const letras = ["a","m","l","r","n","b","h","d"]

// obtener datos de usuarios

const nombrequery = "ingrid paola";
const idquery = 6;
const edadquery = 24;

// ******* METODO EL FIND *********** */

const metodofindnombre = users.find(user => user.nombre); // encuentra el primer usuario del array
//console.log(metodofindnombre);

// BUSCAR POR nombre

const metodofilternombre = users.filter(user => {

   if(user.nombre !== nombrequery)

   {
      //console.log("el nombre ingresado no se encuentra en la base de dato"); 
   }

   return user.nombre === nombrequery;

});

//console.log(metodofilternombre);

// BUSCAR POR id

const metodofilterid = users.filter(user => {

    return user.id === idquery;

});

//console.log(metodofilterid);            

// BUSCAR POR edad

const metodofilteredad = users.filter(user => {

   return user.edad === edadquery;

});

//console.log(metodofilteredad);        

const ordenar = array.sort((a,b)=> a-b);
console.log(ordenar);

// ******* METODO EL FILTER ********** */

