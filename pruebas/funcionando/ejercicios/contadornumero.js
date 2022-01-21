
// vamos a realizar un codigo donde podamos determinar cuantos numeros pares y cuantos impares hay en un array

function getaleatorio (min,max) {

    return Math.floor(Math.random() * (max - min) + min);

}

console.log(getaleatorio(1,100));

const tamaño = 20;

function aleatorio(tamaño) {
    
    const numeros = []

    for(let i =0; i < tamaño; i++)
    {
        numeros.push(getaleatorio(1,100))
        
        var cont2 = 0;
        var cont1 = 0;
        
        numeros.forEach(element => {
            
            if(element % 2 === 0)
            {
                 cont1 ++ ;
    
            }else{
                cont2 ++ ;
            }
            
        });
    }

    console.log(numeros);
    console.log(`hay ${cont1} numeros pares`);
    console.log(`hay ${cont2} numeros impares`);
    
}

//aleatorio(tamaño);

console.log(aleatorio(tamaño));


