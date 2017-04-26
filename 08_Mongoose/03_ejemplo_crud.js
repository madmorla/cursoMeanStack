var mongoose = require("mongoose");
var Modelo = require("./03_ejemplo_modelo");
var Libro = Modelo.Libro;

mongoose.connect("localhost:27017/db_ejemplo");


function getLibros(limit) {
    var array = [];
    //Hacemos una busqueda de todos los libros, le aplicamos un limite y ejecutamos una funcion callback con cada uno de los documentos que hay en la colección
    Libro.find().limit(limit).exec((libro) => {
        array.push(libro);
    });
    //devuelve el array vacio porque ha ejecutado lo anterior asincronamente
    return array;
}

function getLibroById(_id) {
    Libro.findById(_id, (error, libro) => {
        console.log(libro.titulo);
        return libro;
    });

}

function saveLibro(libro) {
    (new Libro(libro)).save((error, libro) => {
        console.log("Libro guardado: " + libro.titulo);
    });
}

function updateLibro(_id, campo, valor) {
    var libro = getLibroById(_id);
    libro[campo] = valor;
    saveLibro(libro);
}

//Exportamos los modulos
module.exports = {
    getLibros: getLibros,
    getLibroById: getLibroById,
    saveLibro: saveLibro,
    updateLibro: updateLibro
}