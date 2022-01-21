
//   SALES BY MATCH

/*
   There is a large pile of socks that must be paired by color. Given an array of integers 
   representing the color of each sock, determine how many pairs of socks with matching colors 
   there are.

   example

   n = 7
   ar = [1,2,1,2,1,3,2]

   There is one pair of color 1 and one of color 2. There are three odd socks left, one of each color. 
   The number of pairs is 2.

   Function Description

    Complete the sockMerchant function in the editor below.

    sockMerchant has the following parameter(s):

      * int n: the number of socks in the pile
      * int ar[n]: the colors of each sock
       
    Returns
     
    int: the number of pairs

Input Format

The first line contains an integer n, the number of socks represented in ar.
The second line contains  space-separated integers, ar[i], the colors of the 
socks in the pile.

CONTRAINTS

 * 1 <=   n   <= 100
 * 1 <= ar[i] <= 100 where  0<=i<=n
 
sample input

STDIN                         Function
-----                         --------
9                             n = 9
10 20 20 10 10 30 50 10 20    ar = [10, 20, 20, 10, 10, 30, 50, 10, 20]

sample output

3

explanation

10-10  10-10  50 30  20-20  20

there ir three paisr of socks
*/

// cases jacker rank

// case 1
//  n = 15
//  const ar = [6,5,2,3,5,2,2,1,1,5,1,3,3,3,5];

//case 0
//const n = 9
//const ar = [10,20,20,10,10,30,50,10,20];

// caso2

n = 20
const ar = [4, 5, 5, 5, 6, 6, 4, 1, 4, 4, 3, 6, 6, 3, 6, 1, 4, 5, 5, 5];

// FUNCIONA PARA EL 100% DE LOS CASOS EN HACKER RANK



function sockMerchant(n, ar) {

    const arr = {}
    let cont = 0;
    let cont2 = 0;
    let pares = 0;

    ar.forEach(ele => {
        
        arr[ele] = !arr[ele] ? 1 : arr[ele] +=1
        
    });

    //console.log(arr);

    const val = Object.values(arr).filter(e=> e >= 2)
    console.log(arr);
    console.log(val);
    
    val.forEach(p => {

        if(p % 2 === 0)  // si son pares, cuantos pares hay
        {
            pares = p/2;
            console.log(pares);

            for(let j=0 ; j<pares ; j++)
            {
                cont ++
            }

        }else{

            //console.log('entra: '+ p);
            const convertpairs = p-1;
            //console.log('se convierte a par:  ' + convertpairs);

            if(convertpairs % 2 === 0)
            {
                let calculo = convertpairs/2;

                for(let i=0; i<calculo;i++) { cont2++ } // numero de pares dentro de un impar
            }


        }

    })

    console.log(cont);  // muestra cuantos pares hay dentro los impares
    const totalpairs = cont2 + cont ;
    console.log(`sample output: ${totalpairs} `);


}

sockMerchant(n, ar)
