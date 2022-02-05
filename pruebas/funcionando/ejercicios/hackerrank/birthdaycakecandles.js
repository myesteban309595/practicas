
/*
  You are in charge of the cake for a child's birthday. You have decided the cake will have one candle for each year of their total age. 
  They will only be able to blow out the tallest of the candles. Count how many candles are tallest.

  Example

  candles = [4,4,1,3]

The maximum height candles are 4 units high. There are 2 of them, so return .

Function Description

Complete the function birthdayCakeCandles in the editor below.

birthdayCakeCandles has the following parameter(s):

 * int candles[n]: the candle heights

Returns

 * int: the number of candles that are tallest

Input Format

The first line contains a single integer, n, the size of candles[].
The second line contains  space-separated integers, where each integer  describes the height of candles[i].

constraints

* 1<= n <= 10^5
* 1<= candles[i] <= 10^7

Sample Input 0

4
3 2 1 3
Sample Output 0

2
Explanation 0

Candle heights are [3,2,1,3]. The tallest candles are 3 units, and there are 2 of them.

  */


const candles = [4,4,1,3,3]

function birthdayCakeCandles(candles) {

    // Write your code here
    const long = candles.length;
    //console.log(long);

    const ob = {};

    candles.forEach(e => {
        ob[e] = !ob[e] ? 1 : ob[e] += 1 
    });

    const obj = Object.values(ob).sort((a,b) => b - a);
    const result = Math.max(...obj)
    //console.log(obj);
    console.log(result);
}

birthdayCakeCandles(candles)