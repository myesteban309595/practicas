
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

function seleccionados(numerociudades)
 {
     //iteramos ese array e ir contando las veces que se repite

     //usamos una estructura tipo objeto donde la clave sea la ciudad y valor las veces que se repite

     const cities = {} ;

     ciudades.forEach( city => {  // city:  vamos a almacenar en cities el nombre de la ciudad definido como city

        cities[city] = !cities[city] ? 1: cities[city] += 1  // ! negacion si la ciudad no esta, ponemos uno, y si si esta le sumamos +1

     });

     //return cities;

     // esto me devuelve un array, pero como transformamos ese array en un objeto ?

     return Object.keys(cities).map(city => ({name: city, times: cities[city]}))  // ahora si me imprime un objeto y lo mapea agregandole nombres a los valores

     // para ordenar el array de objetos, usamos e metodo sort

     .sort((a,b) => b.times - a.times) // con esto ordena, para ordenar es a-b

     // el ejercicio me pide que ordene por nombre de ciudades las 5  objetos mas grnades

     .slice(0, numerociudades) // slice nos devuelve una porcion del array de objetos
      
     // y como solo me pide los nombres hago un mapeo para filtrar los nombres

     .map(city => city.name) // y me imprime un array con los nombres de las ciudades mas repetidas en orden mayor
 }

 console.log(seleccionados(numerociudades));