// crea un array con las distintas ciudades
// luego de esto escribe una funcion que muestre las 5 ciudades mas repetidas, de manera que aparezca desde la mas repetidas
// hasta la mmenos repetidas

const ciudades = 
[

    "medellin",
    "cucuta",
    "medellin",
    "bogota",
    "villavicencio",
    "villavicencio",
    "bucaramanga",
    "manizales",
    "medellin",
    "villavicencio",
    "cucuta",
    "medellin",
    "ibague",
    "medellin",
    "bogota",
    "manizales",
    "bucaramanga",
    "medellin",
    "cucuta",
    "medellin",
    "ibague",
    "villavicencio",
    "medellin",
    "cucuta",
    "bucaramanga",
    "ibague",
    "villavicencio",
    "tunja",
    "manizales"

]

const numerociudades = 5;

function repetidos () {

 const ciudad = {};
 
  ciudades.forEach(city => {
    
    //console.log(city);
    ciudad[city] = !ciudad[city] ? 1 : ciudad[city] += 1

  });

  return Object.keys(ciudad).map(city => ({nombre: city, repeticiones: ciudad[city]})).sort((a,b) => b.repeticiones - a.repeticiones).slice(0,numerociudades).map(city => city.nombre)


   


}

//repetidos();
         
console.log(repetidos());