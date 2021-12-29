

 const almuerzos = [

     {principal : "arroz"},
     {principal : "sopa"},
     {principal : "spaguetti"},
     {principal : "frijol"},
     {principal : "lenteja"},
     {principal : "carne"},
     {postre : "brownie"},
     {postre : "helado"},
     {postre : "quesada"},
     {postre : "caramelos"},
     {postre : "torta"},
     {bebidas : "gaseosa"},
     {bebidas : "cerveza"},
     {bebidas : "jugo naturales"},
     {bebidas : "coctel"},
     {bebidas : "agua"},
     {bebidas : "vino"}

 ]

 const platosprincipales = almuerzos.map(function(plato) {

    //return plato.bebidas;

    if(plato.bebidas == "cerveza")
    {
       console.log("si hay cerveza");
       return plato.bebidas = "Cerveza";
    }

});

 console.log(platosprincipales);

 const numeros = [1,2,3,4,5,6,7,8,9]

 const getnumero = numeros.map(function(numero) { // funcion transformadora


    return numero*2;

 });

 console.log(getnumero);