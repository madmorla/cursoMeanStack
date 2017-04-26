//Ejecutamos el servidor de mongod
var mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/db_ejemplo");

var Schema = mongoose.Schema;

//Esquema es equivalente a crear una entidad
var LibroSchema = new Schema({
    titulo: String,
    autor: String,
    sinopsis: {
        type: String,
        trim: true,
        set: function(string) {
            return string.replace(/\s/g, " "); //con la g indicamos todas las ocurrencias que haya mas de un espacio pero no va
        }
    },
    fecha: Date,
    categoria: String,
    campos_biblioteca: {
        ejemplares: Number,
        reservas: Number,
        ultima_reserva: {
            type: Date,
            default: Date.now()
        }
    },
    sitioweb: {
        type: String,
        set: function(url) { //indicas un metodo que sera llamado cuando creamos el documento
            if (!url) {
                return url; //No hay url
            } else {
                if (url.indexOf('http://') !== 0 && url.indexOf("https://") !== 0) {
                    url = "http://" + url; //Añades a url 'http://'
                }
                return url;
            }
        }
    }
});

LibroSchema.add({ estado: String }); //Añade el campo al final
LibroSchema.add({}); //Añade el campo al final

//El modelo se basa en ese esquema
//El 3º parametro no lo ponemos para ver que mongoose crea ya el nombre de la colección
var Libro = mongoose.model("Libro", LibroSchema);

var docLOTR = new Libro({
    titulo: "  Lord of the rings - Comunidad  ",
    autor: "JRR Tolkien",
    sinopsis: "  bla    bla    bla  bla       blaaaa  ",
    estado: "Nuevo estado",
    campo_que_no_existe: "Un valor",
    fecha: new Date(1955, 03, 15), //En javascript el date, tienes que poner el mes desde 0 hasta 11, y el dia de 0 a 30
    campos_biblioteca: {
        ejemplares: 9,
    },
    sitioweb: "www.lotr_1.com"
});

var docLOTR_2 = new Libro({
    titulo: "  Lord of the rings 2 - Las dos torres  ",
    autor: "JRR Tolkien",
    sinopsis: "  bla    bla    bla    bla   blaaaa  ",
    estado: "Nuevo estado",
    campo_que_no_existe: "Un valor",
    fecha: new Date(1955, 03, 15), //En javascript el date, tienes que poner el mes desde 0 hasta 11, y el dia de 0 a 30
    campos_biblioteca: {
        ejemplares: 9,
    },
    sitioweb: "http://www.lotr_1.com"
});

docLOTR.save(alGuardar);
docLOTR_2.save(alGuardar);

function alGuardar(error) {
    if (error) {
        console.error("Error al guardar: " + error);
    } else {
        console.log("Libro guardado: " + docLOTR._id); //Parece ser que al hacer el save, mongo le asigna
        Libro.find((error, data) => {
            console.log(data);
        });
    }
}
/* 
//Si lo hacemos fuera de guardar, como esta realizando la query contra el servidor tarda un tiempo y esta linea sería en el momento despues de ejecutar esta función
Libro.find((error, data) => {
    console.log(data);
});*/