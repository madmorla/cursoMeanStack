//Ejecutamos el servidor de mongod
var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var MensajeSchema = new Schema({
    id: Number,
    author: String,
    text: String
});

//Exportamos los modelos de los esquemas
module.exports = {
    Mensaje: mongoose.model("Mensaje", MensajeSchema),
}