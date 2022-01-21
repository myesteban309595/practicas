
// balancear los parentesis

const balancear = function(parentesis){
    
    const pila = [];
    
    var cont1 = 0;
    var cont2 = 0;
    
    for(let single of parentesis) // miramos si en el array es un parentesis que abre
    {
        
        
        if(single == '(' ) // si es un parentesis que abre, insertamos este dato en nuesta pila
        {
            pila.push(single);

            cont1 ++ ;
        }

        if(single == ')')
        {
            if(pila.length === 0)  // sin esto, no detecta los parentesis ) el metodo pop simplemente no los detecta
            {
                return false // abortamos la ejecucion ya que si encontramos un parentesis adicional que cierra la cadena es invalida
            }
            
            pila.pop();    // si no es asi sacamos ese elemento de la pila

            cont2 ++
        }
        
        
    }

    console.log(agregados);
    console.log(`abren: ${cont1} parentesis`);
    console.log(`cierran: ${cont2} parentesis`);
    
    var agregados = cont1 + cont2;

    console.log(`se agregaron un total de ${agregados} parentesis`);
    // si al final ya no tiene elementos, significa que ya esta balanceada
    
    
    return pila.length === 0;  // verificamos que este balanceado
    
}   

    console.log(balancear('(((())))'));