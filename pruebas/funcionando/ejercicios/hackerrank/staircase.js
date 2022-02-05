
/*
   Staircase detail

This is a staircase of size n=4
 
     #
    ##
   ###
  ####

Its base and height are both equal to n. It is drawn using # symbols and spaces. The last line is not preceded by any spaces.

Write a program that prints a staircase of size n.

  Function Description

Complete the staircase function in the editor below.

staircase has the following parameter(s):

* int n: an integer

Print

Print a staircase as described above.

Input Format

A single integer, , denoting the size of the staircase.

constraints 

0<n<=100

Output Format

Print a staircase of size n using # symbols and spaces.

Note: The last line must have 0 spaces in it.

Sample Input

6 
Sample Output

     #
    ##
   ###
  ####
 #####
######
Explanation

The staircase is right-aligned, composed of # symbols and spaces, and has a height and width of n=6.

*/

/*
 * Complete the 'staircase' function below.
 *
 * The function accepts INTEGER n as parameter.
 */

const n = 6;

function staircase(n) {
    // Write your code here

    
    for(let i=0; i<n ;i++) // creamos la cantidad de lineas, no importa si es reversa o no, siguen siendo n lineas
    {
        let space = ''
        let num = ''
        //console.log(i);

        // para un caso n=6 se pone n-1 ´porque debemos eliminar elementos espacios apra añadir elementos # y al final quede un espacio vacio

        for(var j=(n-1)-i; j>=1 ;j--) // igualamos a i para que cuente el for hasta i elementos y no recorra hasta n elementos
        {
            space += ' '  // espacio
            //console.log(j);
        }
        
        for(var k=0; k<=i;k++)
        {
            num += '#'
        }

        console.log(space+num);
    }

}

staircase(n)