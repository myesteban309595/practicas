
/* programacion orientada a objetos

   * POLIMORFISMO
   * HERENCIA
   * ENCAPSULAMIENTO
   * ABSTRACCION
   * MODULARIDAD
   
   CLASE: Define las caracteristicas del objeto
   OBJETO: una instancia de una clase
   PROPIEDAD: una caracteristica del objeto, como el color
   METODO: una capacidad del objeto
   CONSTRUCTOR: es el molde o metodo llamado en el momento de crear instancias

*/
  
// creamos una clase

// una vez se le añaden propiedades se le llama constructor, porque constructor se le llama cuando se llama una instancia de la clase 

function personas(nombre){

    this.nombre = nombre;  // esto seria una variable publica
    let id = 1231; // esto seria una variable privada
    console.log("hola mi nombre es: " + nombre);

    // const getid = function(id) {

    //     return id;
    // }

}

//personas(); // llamamos la clase asi se llaman normalmente

let objetopersonas = new personas("marlon yoel"); // aqui puedo agregar las propiedades
console.log(objetopersonas.nombre); // devuelve el nombre
console.log(objetopersonas.id); // undefined
console.log();
//console.log(getid);