
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