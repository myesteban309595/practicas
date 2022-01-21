

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

// utilizaremos los metodos mas importantes **  find **  filter **   map  **  reduce  **

// el metodo find envia la primera coincidencia que cumpla la condicion

const query1 = 'marlon';

function findnombre(query1) {

    users.find(u => {

        if(u.nombre === query1){
        
            return console.log(u);

        }else{

            return console.log('el usuario no esta registrado');
        }
     })
    }

    findnombre(query1);
    
//console.log(findnombre(query1));

// agregar nuevos datos con map

const mapeo = users.map(u => u.vivo = true)
console.log(mapeo);
console.log(users);

// con la funcion every comprobar que todos esten vivos

const vivos = users.every(u => u.vivo === false)
console.log(vivos);

// con el metodo some comprobar si hay algun elemento en el array que cumpla la condicion

const comprobarestado = users.some(u=> {
    
    if(u.estado === 'inactivo')
    {
        return console.log(u);
    }

})

// metodo reduce

const sumaredad = users.reduce((total, item) => {

    return total + item.edad

},0)
console.log(`la suma de todas las edades es: ${sumaredad}`);


const array = [1,2,3,6,5,45,7,8,5,6,100,62]

const mayor = array.reduce((acc,item) => {

    return Math.max(acc,item)
})

console.log(`el numero mas grande en el array es: ${mayor}`);