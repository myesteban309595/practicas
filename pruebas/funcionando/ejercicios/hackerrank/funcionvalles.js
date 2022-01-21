

// un viajero va caminando por los valles, necesita saber cuantos valles ha cruzado, cada valle se define cuando se inicia desde el nivel del mar
// sube baja sube y baja hasta que llegue al nivel del mar nuevamente. eso es un valle

/*
An avid hiker keeps meticulous records of their hikes. During the last hike that took exactly STEPS steps, for every step it was noted if it was an
uphill, U, or a downhill, D step. Hikes always start and end at sea level, and each step up or down represents a 1 unit change in altitude. We define
the following terms:
  
  * A mountain is a sequence of consecutive steps above sea level, starting with a step up from sea level and ending with a step down to sea level.
  * A valley is a sequence of consecutive steps below sea level, starting with a step down from sea level and ending with a step up to sea level.

 Given the sequence of up and down steps during a hike, find and print the number of valleys walked through.

 EXAMPLE

 steps = 8 path = [DDUUUUDD]

 The hiker first enters a valley  units deep. Then they climb out and up onto a mountain  units high. Finally, the hiker returns to sea level and ends the hike.

 Function Description

 Complete the countingValleys function in the editor below.
 countingValleys has the following parameter(s):
  
  * int steps: the number of steps on the hike
  * string path: a string describing the path

 returns

  * int: the number of valleys traversed

 input format

 The first line contains an integer steps, the number of steps in the hike.
 The second line contains a single string , of  characters that describe the path.

 contraints

  * 2<= steps <= 10^6 
  * path[i] E {UD}

 SAMPLE INPUT

 8
 UDDDUDUU

 SAMPLE OUTPUT

 1

 EXPLANATION

 If we represent _ as sea level, a step up as /, and a step down as \, the hike can be drawn as:

_/\      _
   \    /
    \/\/

The hiker enters and leaves one valley.

*/

// analisis propio...

/*

   debo analizar las bajadas y als subidas, los valles se cuentan desde el nivel del mar y cuando venimos subiendo
   por tal debo crear una logica que cuente cara paso y detecte cuando esta nuevamente al ivel del mar y viene subiendo
   en esto reseteamos a cero el contador nuevamente y sumamos +1 en valles.

*/
const path = ['U','D','D','D','U','D','U','U','D','D','U','U']    // dos valles
const steps = 12;

//const path = ['U','D','D','D','U','D','U','U'];    // un valle
//const steps = 8;

let cont = 0;
let valleys = 0;

function countingValley(steps,path){

   for(let i=0; i<steps ; i++)
   {
      if(path[i] === 'D')
      {
         cont ++
      }else{
         cont --
      }

      if(cont === 0 && path[i] === 'U')
      {
         valleys ++
      }
   }

   return valleys


}

//countingValley(steps,path)
console.log(cont);

console.log(countingValley(steps,path));