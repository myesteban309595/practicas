
const express = require('express'); // requerimos express
const app = express();

app.use(express.json()); // para que pueda funcionar

function capturar(){

    //const concatenar = textocapturado.concat();
}

capturar(); 
// localhost:3000
app.listen(3000, () => {   
    
    console.log('INICIADO EN EL PUERTO: ' + 3000); //LISTEN
    
});
