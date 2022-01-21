
const aleatorio = function(min,max) {

    return Math.floor( Math.random() * (max-min) + min);

};

const min = 1;
const max = 20;


const cantidad = 20;   // cantidad de elementos que quiero agregar al array

    
    almacenados = [];

    function prueba(almacenados){
    
            for(let i=0 ; i < cantidad; i++)
            {
                    //console.log(i);
                    almacenados.push(aleatorio(min,max));
            }
    }
    
    
    prueba(almacenados);
    console.log(`numero aleatorio prueba: ${aleatorio(min,max)}`);
    console.log(almacenados);
    