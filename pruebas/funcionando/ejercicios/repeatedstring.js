
/*
  There is a string, S, of lowercase English letters that is repeated 
  infinitely many times. Given an integer, n, find and print the number
  of letter a's in the first n letters of the infinite string.

  EXAMPLE

  s = 'abcac'
  n = 10

  The substring we consider is abcacabcac, the first 10 characters of the infinite string.
  There are 4 occurrences of a in the substring.

  Function Description

   Complete the repeatedString function in the editor below.

   repeatedString has the following parameter(s):

    s: a string to repeat
    n: the number of characters to consider  

   Returns

   int: the frequency of 'a' in the substring

   Input Format

   The first line contains a single string, s.
   The second line contains an integer, n.

   contraints

   * 1<=├s├ <= 100
   * 1<= n <= 10^12
   for 25% od cases test
   n<=10^6

   SAMPLE INPUT

   sample input 0

   aba
   10

   sample output

   7

   EXPLANATION

   The first n=10 letters of the infinite string are abaabaabaa. Because there are 7 a's, we return 7.

   sample input1
   a
   1000000000000000

   sample output

   1000000000000000

   Explanation 1

   Because all of the first n=1000000000000000 letters of the infinite string are a, we return 1000000000000000.
*/

// caso 0

// const s = 'aba';
// const n = 10;

// caso 1

const s = 'a';
let n = 1000000000000;

// sample oouput = 7

function reapeatedstring(s,n)
{
    const repetir = s.repeat((n));   // repetimos el string n veces para generar las repeticiones
    //console.log(repetir);
    const trunc = repetir.substr(0,n) // luego truncamos el string hasta n numeros de veces
    console.log(trunc);

    var cont = 0;
    // una vez esto, recorremos el string y contamos la cantidad de letras 'a'

    for(let letra of trunc)
    {
        if(letra === 'a')
        {
            cont++;
        }
    }

    console.log(cont);

}

reapeatedstring(s,n)