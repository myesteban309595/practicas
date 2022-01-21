
const text = "This Is a Text Example, we need to extract letter more time repeat"

function repetido(){
    
    const textmin = text.toLocaleLowerCase()   // convetimos todo a minusculas
    const textnospace = textmin.replace(/\,*\s/g, '') //.split('')
    const arraytext = Array.from(textnospace)

   console.log(arraytext);

   const letra = {}
 
   arraytext.forEach( array => {

      letra[array] = !letra[array] ? 1 : letra[array] += 1;

   })

   let objeto = Object.keys(letra).map(array => ({letra: array, repeticiones: letra[array]})).sort((a,b) => b.repeticiones -  a.repeticiones).slice(0,3)

   const masrepetida = objeto.map(o => o.repeticiones );
   //const max = (masrepetida.length)
   const recorte = masrepetida.slice(0,1) // el mas repetido es el que sale de priomero

   console.log(masrepetida);
 //  console.log(max);
   console.log(recorte);
   console.log(objeto);


}

repetido();