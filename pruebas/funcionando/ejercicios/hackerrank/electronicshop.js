


// sample input 0

// const b = 10;   // presupúesto
// const n = 2;
// const m = 3;

// const keyboards = [3,1];
// const drives = [5,2,8]

// sample output     9

//sample input 1

const b = 5;   // presupúesto
const n = 1;
const m = 1;

const keyboards = [5];
const drives = [4]

// expected output -1

// Complete the getMoneySpent function below.

function getMoneySpent(keyboards, drives, b , n , m) {
   /*
    * Write your code here.
    */

   const arrayvalores = [];

   keyboards.forEach(element => {

    console.log(element);

    for(valor of drives)
    {
        console.log(valor);

        let operacion = element+valor;
        console.log(operacion);

        if(operacion < b )
        {
            arrayvalores.push(operacion)

        }else{

            let cond = 1-2;

            arrayvalores.push(cond)

        }
    }
       
   });

   const ordenado = arrayvalores.sort((a,b) => b - a).slice(0,1)

   for(let max of ordenado)
   {
       return max;
   }

}

getMoneySpent(keyboards, drives, b , n , m) 