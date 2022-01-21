

// dada una adena de texto, determinar cual es la letra que mas se repite

/*
  * convertir todo a minisculas, ya que el metodo sort() es sencible a mayusculas y minusculas--- llevar todo aun mismo termino
  * podemos eliminar espacios y comas y dejar un solo elemento
  * convertimos a un array para poder aplicar sort y recorrerlo
  * luego, mediante el metodo sort() ordenamos las letras para mas facilidad de comparacion
  * luego hacemos las condiciones necesarias y realizamos un contador y obtener el maximo y ese sera la letra mas repetida
*/

const texto = "Hola a todos, me llamo marlon y soy programados backend junior un gusto conocerlos";

function letramasrepetida (){

    // pasamos todo a minuculas

    const textoigual = texto.toLocaleLowerCase();
    console.log(textoigual);

    // con el metodo replace eliminamos los espacios comas y valores que no necesitemos

    const uniquetext = textoigual.replace(/\,*\s/g, ""); // g global buscar en toda la cadena
    console.log(uniquetext);
    const arraytext = Array.from(uniquetext).sort();
    console.log(arraytext);

    var cuenta = 1;
    var x = arraytext[0];  // posicion cero seria la primera letra osea la a
    const letras = []; // aqui almacenare las letras
    const conteo = [];


    for(let i=1; i<arraytext.length;i++)
    {
        if(x == arraytext[i])
        {
            cuenta = cuenta + 1;

        }else {

            letras.push(x);
            conteo.push(cuenta)  // las letras y la cantidad quedan en la misma posicion
            x = arraytext[i];  /// arregla en la siguiente posicion
            cuenta = 1;
        }
    }

    console.log(letras);

    // sacamos el max

    const maximo = Math.max(...conteo); 
    const mayor = conteo.indexOf(maximo)  // buscamos el indice, la posicion donde esta la letra o numero mas grande
    const resultado = "la letra mas repetida es: "+ letras[mayor] + " con " + maximo + " repeticiones"
    
    console.log(resultado);

}

letramasrepetida();