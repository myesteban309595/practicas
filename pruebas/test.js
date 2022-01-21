
/*
   * ejercicio con rray de objetos
   * crear una clase constructora para añadir mas pizzas
   * retorne las pizzas cuyos precios mediamos sean menor a 18000 pesos
   * ordene las pizzas que coincidan con un nombre dado (asi el nombre este incompleto)
   * ordenas las pizzas de acuerdo a su precio
   * reciba un arrar de id´s y retorne una rray de pizzas con id´s
   * retornar un nuevo objeto, con la condicional de si tienen carne o no

*/

const pizzas = [
    
        {
            id: 1,
            nombre: 'pizza carne molida',
            concarne: true,
            precios : { pequeña: 12000, mediana: 20000, grande: 40000 }
        },
        {
            id: 2,
            nombre: 'pizza hawaina',
            concarne: false,
            precios : { pequeña: 11000, mediana: 18000, grande: 35000 }
        },
        {
            id: 3,
            nombre: 'pizza vegetariana',
            concarne: false,
            precios : { pequeña: 18000, mediana: 25000, grande: 45000 }
        },
        {
            id: 4,
            nombre: 'pizza pollo',
            concarne: true,
            precios : { pequeña: 12000, mediana: 19000, grande: 38000 }
        },
        {
            id: 5,
            nombre: 'pizza jamon y queso',
            concarne: true,
            precios : { pequeña: 10000, mediana: 15000, grande: 32000 }
        }
    
]

// ****************** FUNCION CONSTRUCTOR AGREGAR PIZZA *********************
function nuevapizza(id,nombre,concarne,precios) {

    this.id = id
    this.nombre = nombre
    this.concarne = concarne
    this.precios = precios
    
   }

let agregarpizza = new nuevapizza(6, 'pizza champiñones', false, {pequeña: 18000, mediana: 32000, grande: 54000});  // asi creo la pizza
console.log(agregarpizza);
console.log();

pizzas.push(agregarpizza);
console.log(pizzas);

//***************************** retornar las pizzas cuyo valor mediano sea menor a 18000 pesos ************************************

let query = 18000; // simula la query

const filterpizzas = () => {

    return pizzas.filter( pizza => pizza.precios.mediana <= query);
}

console.log();
console.log(`pizzas filtradas con el metodo filter precios medianos <= ${query}`);
console.log();

console.log(filterpizzas());

//***************************** ordene las pizzas que coincidan con un nombre dado (asi el nombre este incompleto) ************************************

let buscador = 'haw';  // puedo agregar el nombre incompleto

const buscarpizza = (buscador) => {

    return pizzas.filter(pizza => pizza.nombre.indexOf(buscador) != -1) // si es -1 no existe  

}

console.log();
console.log('aqui comienza la busqueda de pizza por comando');
console.log();

if(buscarpizza(buscador) != -1)
{
    console.log('este producto no existe');
}

console.log();
console.log(buscarpizza(buscador));

//********** ingresar un array con los indices de los id de las pizzas que quiero traer me retornara las pizzas con ese id ************************************

let elementos = [1,4,6]; // array de las pizzas que voy a llamar

const obtenerporid = (elementos)=> {

    return pizzas.filter( pizza => elementos.indexOf(pizza.id) != -1  )  // si es diferente de -1 es porque existe
       
}

console.log();
console.log('elemetos llamados por un array de id');
console.log();

console.log(obtenerporid(elementos));