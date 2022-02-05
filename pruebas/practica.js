
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

function nuevapizza(id,nombre,concarne,precios){

   this.id = id,
   this.nombre = nombre,
   this.concarne = concarne,
   this.precios = precios

}


const nuevo = new nuevapizza(6,'pizza champiñones', false,{ pequeña: 5, mediana: 10, grande: 25 })
//console.log(nuevo);

// pizzas.push(nuevo);
// console.log(pizzas);

const filtrar = pizzas.filter(pizza => pizza.nombre === 'pizza carne molida')
//console.log(filtrar);

const a = [2,3];

const buq = pizzas.filter(pizza => a.indexOf(pizza.id) != -1)
//console.log(buq);

const query = 'haw'   // hawaihana
const text = pizzas.filter(pizza => pizza.nombre.indexOf(query) != -1)
//console.log(text);

const entre = pizzas.splice(3,2,({id:6,nombre:'pizza champiñones', concarne:false, pequeña: 5}));
//console.log(pizzas);

const idpornombre = pizzas.findIndex(pizza => pizza.nombre === 'pizza vegetariana')
//console.log(idpornombre);

const array = ['marlon', 'sandra', 'cristian']

const spl = array.splice(1,0,'ingrid');
//console.log(spl);
//console.log(array);