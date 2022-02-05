
const box = "hoolaaa mundo"
//box.toLocaleLowerCase
function letrarepetida(box) {

    //const convert = box.toLocalLowerCase();

    const convert = box.toLocaleLowerCase();
    const sinespacio = convert.replace(/\,*\s/g , '')
    console.log(sinespacio);
    console.log(convert);
    const array = sinespacio.split('');
    console.log(array);

    const obj = {};

    array.forEach(e => {


        obj[e] = !obj[e] ? 1 : obj[e]+= 1
        
    });

    const result = Object.keys(obj).map(e => ({letra :e, repe : obj[e]}));
    console.log(result);

}

letrarepetida(box);

//console.log(letrarepetida(box));