
 document.getElementById("btn").addEventListener('click', () => {

            const saludo = "hola";

            const valor = document.getElementById("tx").value;
            const concatenado = saludo + " " + valor;

            document.getElementById("result").innerHTML = concatenado;


} )