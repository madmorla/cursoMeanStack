//Creamos una nueva base de datos en la carpeta db_ejemplo
//C:\Curso Mañana\cursoMeanStack_madmorla\08_Mongoose>mongod --dbpath .\db_ejemplo
//"npm init" para inicializar proyecto y crear package.json
//npm install mongoose --save-dev --> instala mongoose y con --save-dev en package.json lo pone en dependencias
var mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/db_ejemplo");

//mongoose.model(Nombre del modelo, esquema, nombre de la coleccion)
var Libro = mongoose.model("Libro", {
    titulo: String,
    autor: String,
    paginas: Number
}, "libreria");
var Camion = mongoose.model("Camion", {
    marca: String,
    modelo: String,
    ruedas: Number
}, "camiones");

var nuevoLibro = new Libro({
    titulo: "El señor de los anillos",
    autor: "J.R.Tolkien",
    paginas: 1999
});

//Es como hacer un insert en mongo
nuevoLibro.save((error, data) => {
    if (error) {
        console.log("Error al guardar: " + error);
    } else {
        console.log("Libro guardados: ");
        console.log("Libro titulo " + data.titulo + ", Autor: " + data.autor);
    }
});

var nuevoCamion = new Camion({
    marca: "Mercedes",
    modelo: "Benz",
    ruedas: 8
});

nuevoCamion.save((error, data) => {
    if (error) {
        console.log("Error al guardar el camion: " + error);
    } else {
        console.log("Camión guardado: " + data.modelo);
    }
});