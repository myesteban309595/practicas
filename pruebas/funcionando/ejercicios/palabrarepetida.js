
/*
   buscar cuantas veces aparece una palabra en una frase y devolver cuantas veces aparece

   la palabra y la frase deben ser parametros de una funcion

*/


const texto = " Las ideas que comunica un texto están contenidas en lo que se suele denominar «macroproposiciones», unidades estructurales de nivel superior o global, que otorgan coherencia al texto constituyendo su hilo central, el esqueleto estructural que cohesiona elementos lingüísticos formales de alto nivel, como los títulos y subtítulos, la secuencia de párrafos, etc. En contraste, las «microproposiciones» son los elementos coadyuvantes de la cohesión de un texto, pero a nivel más particular o local."

function palabrarepetida(texto){


   const buscador = 'que'
   const textominuscula = texto.toLocaleLowerCase().split(' ')
   //console.log(textominuscula);

   const palabra = {}

   textominuscula.forEach(t => { 

       palabra[t] = !palabra[t] ? 1 : palabra[t] += 1;
      
   });

   const objeto = Object.keys(palabra).map(t => ({palabra: t , repeticiones: palabra[t]}))
   console.log(objeto);

   const filtro = objeto.filter(o => {

      if(o.palabra == buscador)
      {
         return objeto.filter(o => o.repeticiones)
      }

   })
   
   console.log(filtro);

}

palabrarepetida(texto);