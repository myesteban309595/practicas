
//const c= [0,1,0,0,0,1,0]
//const c=[0, 0, 0, 1, 0, 0]   // debe retornar 3

// case 2

const c = [0, 0, 1, 0, 0, 0, 0, 1, 0, 0]   // debe retornar 6

function jumpingOnClouds(c) {

    const long = c.length;

    var cont = 0;
    var cont1 = 0;
    var cont2 = 0;
    var cont3 = 0;
    let acum = 0;
    let acum1 = 0;
    let acum2 = 0;
    let array = [];

    if(c[0] === 0)
    {
       // console.log("la posicion 2 comienza en 0");
        for(let i=0; i<long;i+=2) // recorre de 2 en 2 desde la posicion 2
        {
            //console.log(c[i]);
            acum += c[i];
            var indicefinal = i;
            cont++;
        }
        // console.log(cont);  cuenta 3 
        if(indicefinal < long-1) cont+=1
        // console.log(cont); como sobra un ultimo espacio brinca alli y suma uno mas
        if(acum === 0)   array.push(cont)
    }
    if(c[2] === 0)
    {
       // console.log("la posicion 2 comienza en 0");
        for(let i=2; i<long;i+=2) // recorre de 2 en 2 desde la posicion 2
        {
            console.log(c[i]);
            acum1 += c[i];
            var indicefinal1 = i;
            cont1++;
        }
        if(indicefinal1 < long-1) cont1+=1
        if(acum1 === 0)   array.push(cont1)
    }

    if(c[1] === 0)
    {
        for(let i=1; i<long;i+=2) // recorre de 2 en 2 desde la posicion 1
        {
            acum2 += c[i];
            var indicefinal2 = i;
            cont2 ++
        }
        if(indicefinal2 < long-1) cont2+=1
        if(acum2 === 0)  array.push(cont2)

        //console.log("la posicion 1 comiuenza en 0");
    }

    for(i=1;i<long;i++)
    {
        console.log(c[i])
        if(c[i]=== 0)
        {
            cont3++    
        }
    }
    array.push(cont3)

    //console.log(cont);
    //console.log(acum);
    console.log(array);

    const nuevo = array
    const result = Math.min(...nuevo)
    console.log(result);
}

jumpingOnClouds(c)