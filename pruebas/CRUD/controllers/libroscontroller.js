
var con= require ('../confg/conexion')

module.exports = {


    index:function(req, res) {

        con.query("SELECT * FROM libros", function );
        res.render('libros/index', { title: 'Aplicacion' });
    }
}

