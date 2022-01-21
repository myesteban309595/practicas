

/*
  Given a 6x6 2D Array, :

  1 1 1 0 0 0
  0 1 0 0 0 0
  1 1 1 0 0 0
  0 0 0 0 0 0
  0 0 0 0 0 0
  0 0 0 0 0 0

  An hourglass in A is a subset of values with indices falling in this pattern in arr's graphical representation:

   a b c
     d
   e f g

   There are 16 hourglasses in arr. An hourglass sum is the sum of an hourglass' values. Calculate the hourglass sum for 
   every hourglass in arr, then print the maximum hourglass sum. The array will always be 6x6.

   example

   arr =
   -9 -9 -9  1  1  1 
    0 -9  0  4  3  2
   -9 -9 -9  1  2  3
    0  0  8  6  6  0
    0  0  0 -2  0  0
    0  0  1  2  4  0

    The 16 hourglass sums are:

    -63, -34, -9, 12, 
    -10,   0, 28, 23, 
    -27, -11, -2, 10, 
      9,  17, 25, 18

      The highest hourglass sum is 28 from the hourglass beginning at row 1, column 2:

*/

// 2D array
// [
    
//     [1, 1, 1, 0, 0, 0],
//     [0, 1, 0, 0, 0, 0],
//     [1, 1, 1, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0]

// ]

// 1. create maxSum variable to -63
// 2. loop through rows (ultil 4)

function hourglassSun(arr){
    let maxSum = -63;

    for(let i=0;i<4;i++)
    {
        for(let j=0; j<4;j++)
        {
            let top = arr[i][j] + arr[i][j+1] + arr[i][j+2];
            let mid = arr[i+1][j+1]
            let bot = arr[i+2][j] + arr[i+2][j+1] + arr[i+2][j+2]
            let currentsum = top+mid+bot;
            maxSum = Math.max(maxSum,currentsum)
        }

    }
    return maxSum
}