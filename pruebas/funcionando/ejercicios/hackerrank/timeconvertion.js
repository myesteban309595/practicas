
/*
   
Given a time in -hour AM/PM format, convert it to military (24-hour) time.

Note: - 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock.
- 12:00:00PM on a 12-hour clock is 12:00:00 on a 24-hour clock.

example

 * s = "12:01:00PM"
Return '12:01:00'.

 * s = "12:01:00AM"
Return '00:01:00'.

Function Description

Complete the timeConversion function in the editor below. It should return a new string representing the input time in 24 hour format.

timeConversion has the following parameter(s):

string s: a time in 12 hour format
Returns

string: the time in 24 hour format

Input Format

A single string s that represents a time in 12 -hour clock format (i.e.:hh:mm:ssAM or hh:mm:ssPM  ).

Constraints

All input times are valid
Sample Input 0

07:05:45PM
Sample Output 0

19:05:45

*/
//const s = "11:01:00PM"

// case 4 

//const s = "12:45:54PM"

// case 8 

//const s = "12:00:39AM"

// case 0

const s = "07:05:45PM"

// formato AM

//const s = "11:20:00AM"

function timeConversion(s) {
    // Write your code here

    const long = s.length;
    //console.log(long);

    const sep = s.replace(/\,*\:/g, '')   // para eliminar los puntos

    let hour = sep.slice(0,2);
    let hh = sep.slice(0,1);
    let hh2 = sep.slice(1,2);
    let mm = sep.slice(2,4)
    let ss = sep.slice(4,6)
    const format = sep.slice(6,8)

    // console.log(sep);
    //console.log(hh2);
    // console.log(mm);
    // console.log(ss);
    // console.log(format);

    // REALMENTE SOLO VAMOS A CAMBIAR LA HORA, YA QUE LOS MINUTOS Y LOS SEGUNDOS SON LOS MISMOS

    if(format === 'PM')
    {
        if(hour == 12) hour = 0;
        let nhh = 12 + parseInt(hour); 

        //console.log(nhh);
        console.log(nhh+':'+ mm +':'+ ss);   // return
    }
    if(format === 'AM')
    {
        if(hh == 1 && hh2 == 2) 
        {
            hh = 0;
            hh2 =0;
        }  
    
        console.log(hh+''+hh2+':'+ mm +':'+ ss);
    }
    
}

timeConversion(s) 