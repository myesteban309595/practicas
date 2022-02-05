
/*
  Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers. Then print the respective 
  minimum and maximum values as a single line of two space-separated long integers.

  example 

  arr= [1,3,5,7,9]

  the minimum sum is 1+3+5+7=16 
  the maximo sum is  3+5+7+9=24

  output 

  16 24

  Function Description

Complete the miniMaxSum function in the editor below.

miniMaxSum has the following parameter(s):

* arr: an array of 5 integers

Print

Print two space-separated integers on one line: the minimum sum and the maximum sum of 4 of 5 elements.

Input Format

A single line of five space-separated integers.

constraints 

1<=arr[i]<=10^9

Output Format

Print two space-separated long integers denoting the respective minimum and maximum values that can be calculated by summing exactly four of the five integers. (The output can be greater than a 32 bit integer.)

Sample Input

1 2 3 4 5

Sample Output

10 14

Explanation

The numbers are 1,2,3,4, and 5. Calculate the following sums using four of the five integers:

Sum everything except 1, the sum is 2+3+4+5.
Sum everything except 2, the sum is 1+3+4+5.
Sum everything except 3, the sum is 1+2+4+5.
Sum everything except 4, the sum is 1+2+3+5.
Sum everything except 5, the sum is 1+2+3+4.

Hints: Beware of integer overflow! Use 64-bit Integer.
*/



//const arr = [1,3,5,7,9]

// case 13
const arr = [5,5,5,5,5]

function miniMaxSum(arr) {
    // Write your code here
    const long = arr.length;
    //console.log(long);

    
    let acum = 0;
    let acum2 = 0
    let array = [];
    
    for(let i=0; i<long;i++)
    {
       //console.log(i);

       //console.log(arr[i]);

       for(let j=0;j<long;j++)
       {
           if(arr[i] == arr[j])
           {
                   acum2 += arr[i]
                   acumT= acum2-arr[j]; // como son 5 da 25 pero recuerda que toca ir eliminarndo un numero por cada i o j que se recoora en total serian 20

               continue
            }

            acum += arr[j]

            //console.log(arr[j]);
            //console.log(acum);
        }
        
        array.push(acum || acumT); // almacenamos cada acumulacion
        acum = 0;   // cada que cumpla el ciclo reseteamos a cero
        acum2=0
    }

    const ordenado = array.sort(); // de menor a mayo por defecto
    const maximo = Math.max.apply(null, ordenado)   // asi se aplica una funcion a un array
    const minimo = Math.min(...ordenado) // tambien de esta forma
    console.log(minimo+' '+maximo);

    console.log(array);
    
}

miniMaxSum(arr)