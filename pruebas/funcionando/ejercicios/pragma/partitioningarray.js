
//  const k = 2;
//  const numbers = [3,5,3,2]

// const k = 3;
// const numbers = [3,6,4,8,8,6,4]

k=3
numbers = [4,8,8,8,6,4]


function partitionArray(k, numbers) {

   
    let tamarr = numbers.length;
    let v = tamarr/k;
    //console.log(v);

    let cant = 0;

     numbers.forEach(element => {

         cant++
        
        });

        let arr = [];
        let tam = 0;
    
        for(let i=0 ; i < cant ; i+=v)
        {
            let fragmento = numbers.slice(i,i+v)
            arr.push(fragmento)
            //console.log(fragmento);
            tam = arr.length;
            //console.log(tam);

            fragmento.forEach( (e,i) =>{

                if(fragmento[i] != fragmento[i+1])
                {
                   console.log(fragmento);
                   return 'No'
                } 

            })
            
        }
        

        if(tam % k === 0)
        {
            console.log('Yes'); 
            
        }else{
    
           console.log('No');    
        }

    
    console.log(arr);
    
    
}
partitionArray(k, numbers)
//console.log(partitionArray(k, numbers));