
/*
  It is New Year's Day and people are in line for the Wonderland rollercoaster ride. Each person wears a sticker indicating their initial position 
  in the queue from 1 to n. Any person can bribe the person directly in front of them to swap positions, but they still wear their original sticker. 
  One person can bribe at most two others.

  Determine the minimum number of bribes that took place to get to a given queue order. Print the number of bribes, or, if anyone has bribed more than 
  two people, print Too chaotic.

  Example

  q = [1,2,3,5,4,6,7,8]

  If person 5 bribes person 4, the queue will look like this: 1,2,3,5,4,6,7,8. Only 1 bribe is required. Print 1.
   
  q= [4,1,2,3]

  Person  had to bribe  people to get to the current position. Print Too chaotic.

  Function Description

  Complete the function minimumBribes in the editor below.

  minimumBribes has the following parameter(s):

   * int q[n]: the positions of the people after all bribes

  Returns

   * No value is returned. Print the minimum number of bribes necessary or Too chaotic if someone has bribed more than 2 people.

  Input Format

The first line contains an integer t, the number of test cases.

Each of the next t pairs of lines are as follows:
- The first line contains an integer t, the number of people in the queue
- The second line has n space-separated integers describing the final state of the queue.

constraints
 * 1<=t<=10
 * 1<=n<=10^5
 * 
 substrack

 for 60% score 1<= n <= 10^3
 for 100% score 1<= n <= 10^5

 sample input

 STDIN       Function
-----       --------
2           t = 2
5           n = 5
2 1 5 3 4   q = [2, 1, 5, 3, 4]
5           n = 5
2 5 1 3 4   q = [2, 5, 1, 3, 4]

Sample Output

3
Too chaotic

Explanation

Test Case 1

The initial state:
After person 5 moves one position ahead by bribing person 4:

Now person 5 moves another position ahead by bribing person 3:

And person 2 moves one position ahead by bribing person 1:

So the final state is 2,1,5,3,4 after three bribing operations.

Test Case 2

No person can bribe more than two people, yet it appears person 5 has done so. It is not possible to achieve the input state.
*/

// source - https://www.hackerrank.com/challenges/new-year-chaos/problem

function minimumBribes(q) {

    const TOO_CHAOTIC = "Too chaotic";
    let total = 0;

    for(let current_pos = 0; current_pos < q.length; current_pos++){ // O(n)
        // getting original position using 0 indexing (starts at 0)
        const original_pos = q[current_pos] - 1;
        
        // diff = how far person has moved
        const diff = original_pos - current_pos;
        // if person has moved more than 2 spots, then impossible
        if(diff > 2) return console.log(TOO_CHAOTIC);

        // if statement not required, but shows understanding
        if(diff <= 0){
            // check each person starting from one person ahead of original pos
            // up until current position
            for(let i = Math.max(0, original_pos - 1); i < current_pos; i++){ // O(logn)
                const start_pos_of_forward_person = q[i] - 1;
                // if a person in front of current person started BEHIND
                // current person, then current person MUST have been bribed by them
                if(start_pos_of_forward_person > original_pos){
                    total++;
                }
            }
        }
    }

    console.log(total); // Time Complexity = O(n) * O(logn) = O(nlogn)
}