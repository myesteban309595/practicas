var express = require('express');
var router = express.Router();

const libroscontroller = require("../controllers/libroscontroller");

/* GET home page. */
router.get('/', libroscontroller.index); // accede a libros controller y se vaya directamente a index

module.exports = router;
