// const arr= [

//     [1, 2, 3],
//     [4, 5, 6],
//     [9, 8, 9]  
// ]

// caso 1

const arr= [

    [-1,  1, -7, -8],
    [-10,-8, -5, -2],
    [ 0,  9,  7, -1],
    [ 4,  4, -2,  1]

    // invertido

    // [ 4,  4, -2,  1]
    // [ 0,  9,  7, -1],
    // [-10,-8, -5, -2],
    // [-1,  1, -7, -8],

]
function diagonalDifference(arr) {
    // Write your code here
    
    const long = arr.length;


    //console.log(long);
    
    const LR = (long)=> {
        
        let acum1 = 0;
        
        for(let i=0; i<long;i++)
        {
            //console.log(i);
            
            for(var j=0;j<long; j++)
            {
                if(i===j)
                {
                    //console.log(arr);
                    //console.log(arr[i][j]);
                    acum1 += arr[i][j]; 
                }
            }
        } 
        return acum1;
    }
    
    const RL=(long)=> {
        
        let acum2 = 0;
        let array= arr.reverse();
        
        for(let i=0; i<long;i++)
        {
            for(var k=long-1; k>=0;k--)
            { 
                if(i=== k)
                {
                    //console.log(array[i][k]);
                    acum2 += array[i][k];
                }
            }
        }

        return acum2;    
    }
    //console.log(LR(long), RL(long));
    
    console.log(Math.abs(LR(long)-RL(long)));
    //return Math.abs(LR(long)-RL(long));   // EN HACERRANK
}

diagonalDifference(arr);
//console.log(diagonalDifference(arr));


// paso para todos los casos