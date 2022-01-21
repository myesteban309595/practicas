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

function nuevapizza(id,nombre,concarne,precios) {

this.id = id
this.nombre = nombre
this.concarne = concarne
this.precios = precios

}
let agregarpizza = new nuevapizza(6, 'pizza champiñones', false, {pequeña: 18000, mediana: 32000, grande: 54000});  // asi creo la pizza

console.log(agregarpizza);

pizzas.push(agregarpizza);

console.log(pizzas);