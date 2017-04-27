var mongoose = require("mongoose");
var Modelo = require("./mensaje_modelo");
var Mensaje = Modelo.Mensaje;

mongoose.connect("localhost:27017/db_mensajes");
/*
function getLibros(limit) {
    var array = [];
    //Hacemos una busqueda de todos los libros, le aplicamos un limite y ejecutamos una funcion callback con cada uno de los documentos que hay en la colección
    Libro.find().limit(limit).exec((libro) => {
        array.push(libro);
    });
    //devuelve el array vacio porque ha ejecutado lo anterior asincronamente
    return array;
}
*/

function getMensajesBD() {
    Mensaje.find({}, (error, mensajes) => {
        console.log(mensajes);
        return mensajes;
    });
}

function insertMensajeBD(mensaje) {
    (new Mensaje(mensaje)).save((error, libro) => {
        console.log("Mensaje del usuario " + mensaje.author + " guardado.");
    })
}

//Exportamos los modulos
module.exports = {
    getMensajesBD: getMensajesBD,
    insertMensajeBD: insertMensajeBD,
}