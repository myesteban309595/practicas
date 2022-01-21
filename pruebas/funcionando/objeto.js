

/* aplica metodos y funciones a los objetos*/

// funcion constructora

function user(nombre,apellido,edad,correo){

    this.nombre = nombre,
    this.apellido = apellido,
    this.edad = 25,
    this.correo = correo
};

user();

const usuario = {  // objeto

    nombre: "marlon yoel",
    apellido : " esteban valencia",
    edad: 26,
    correo: "maryoe_95@hotmail.com"
}

console.log(usuario.nombre.toLocaleUpperCase()); 
//usuario.nombre = " ingrid paola"; 
console.log(`se ha cambiado el nombre de usuario por: ${usuario.nombre.toLocaleUpperCase()} ` ); 

let ingrid = new user("ingrid paola", "jimenez robles", 25, "ingrid@gmail.com"); 
console.log(ingrid);

primera = usuario.apellido.indexOf("v");
console.log(primera);

ultima = usuario.apellido.lastIndexOf("a");
console.log(ultima);

unirnombre = usuario.nombre.concat(usuario.apellido);
console.log(unirnombre.toLocaleUpperCase());

filtrarnombre = unirnombre.substr(7,(unirnombre.length)-16)
console.log(filtrarnombre);