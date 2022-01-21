
/*
  una nueva aplicacion de prestamos sin cuotas de manejo, ni intereses, quiere probar una nueva modalidad de pagos en los prestamos, la misma 
  consiste en que el primer dia del prestamop la persona deba pagar solo 1 peso, y cada dia que pasa debera pagar el doble de lo que pago el dia
  anterior y asi sucesivamente. el ultimo dia solo debera pagar lo que le falte.

  los interesados en la aplicacion quieren hacer un pequeño simulador, que permita conocer la cantidad de dias que se requiere para pagar la deida
  en su totalidad con este sistema, dada la cantidad a prestar inicialmente

  FUNCTION DESCRIPTION

  complete la funcion en el editor abajo, la funcion recibe la lista de deudas, y debe retornar una lista que representa el numero de dias necesario
  para pagar cada deuda.

  CONTRAINTS

  0 <= deuda <= 9223372036854775807

  input format for custom testing

  la primera linea contiene un entero n, que denota el numero de prestamos que se realizara.
  luego existen n lineas cada con el valor de un prestamo especifico

  sample case 0

  sample input for custom testing

  1       numero de prestamos  (n)
  15      valor del prestamo en especifico

  sample output

  4

  EXPLANATION

  si a una persona le prestamos 14 pesos, requerira de 4 dias para pagar la totalidad de la deuda
  
  dia 1      1             total    1
  dia 2      1+2           total    3
  dia 3      1+2+4         total    7
  dia 4      1+2+4+8       total    15
  dia 4      1+2+4+8+16    total    31
  dia 4      1+2+4+8+16+32 total    63

                     
  sample case 1
  
  sample input for custom teesting

  3        n prestamos
  15       valores del prestamo
  16
  45

  sample output

  4
  5
  6

*/


// case 0

// const n = 1 ;
// const prestamo = [15] ;

// case 1

const n = 3 ;
const prestamo = [15,16,45]


function calcularDias(prestamo){

    const array = [];
    
    prestamo.forEach(pr => {
        
        console.log(pr);
        
        let acum1 = 1;
        let acum = 0;
        var cont = 0;

        for(i=0 ; i<pr; i++)
        {
            acum1 = acum1*2 ;
            acum = acum1-1  // ajuste
            
            if(acum <= pr )
            {
                console.log(`acumlador ${acum}`);
                cont ++;  

            }
            if(pr <= acum  )
            {
                let dif = acum-pr;

                if(dif != 0)
                {
                    cont ++
                }

                break
            }

        }

        array.push(cont)
        console.log(`dias ${cont}`);
        console.log(array);
        console.log(`este es el acumulado ${acum}`);
        
    });
    
}

calcularDias(prestamo);

//console.log();
//console.log(`para pagar el monto de ${prestamo} pesos se requieren: ` + calcularDias(prestamo) + ' dias para pagar la deuda');


// para caso 0


// function calcularDias(prestamo){

//     let acum = 1;
//     var cont = 0;

//     for(let i=0 ; i<prestamo;i++)
//     {
//         acum = acum + i*2;

//         if(acum <= prestamo)
//         {
//             console.log(acum);
//             cont ++;
//         }
//     }

//     return cont;
    

// }