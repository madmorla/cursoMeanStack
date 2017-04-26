//Ejecutamos el servidor de mongod
var mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/db_ejemplo");

var Schema = mongoose.Schema;

//Esquema es equivalente a crear una entidad
var LibroSchema = new Schema({
    titulo: {
        type: String,
        required: [true, "El campo titulo está requerido."],
        //Campo obligatorio, si no se encuentra en el documento devuelve el mensaje definido
        validate: {
            validator: (valor) => {
                return /^[A-Z]/.test(valor); //Validando si empieza por letra mayuscula
            },
            message: "'{VALUE}' de '{PATH}' No empieza por mayusculas" //Sino muestra este mensaje
        }
    },
    autor: String,
    sinopsis: {
        type: String,
        trim: true
    },
    fecha: Date,
    categoria: {
        type: String,
        enum: {
            values: ["aventuras", "terror", "novela"], //defines los tipos de string que puede contener
            message: "Categoria no valida."
        },
        required: true
    },
    campos_biblioteca: {
        ejemplares: {
            type: Number,
            min: [10, "Menos de 10 no merece la pena vender"]
        },
        reservas: Number,
        ultima_reserva: {
            type: Date,
            default: Date.now()
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
    categoria: "aventuras",
    campos_biblioteca: {
        ejemplares: 11,
    }
});

var docLOTR_2 = new Libro({
    titulo: "Lord of the rings - las dos torres  ",
    autor: "JRR Tolkien",
    sinopsis: "  bla    bla    bla    bla   blaaaa  ",
    estado: "Nuevo estado",
    campo_que_no_existe: "Un valor",
    fecha: new Date(1955, 03, 15), //En javascript el date, tienes que poner el mes desde 0 hasta 11, y el dia de 0 a 30
    categoria: "aventura",
    campos_biblioteca: {
        ejemplares: 9,
    }
});

docLOTR.save(alGuardar);
docLOTR_2.save(alGuardar);

function alGuardar(error) {
    if (error) {
        console.error("Error al guardar: " + error);
        //Recorre cada campo y vemos si hay alguno que tiene error muestra el mensaje
        Libro.schema.eachPath((campo) => {
            if (error.errors[campo]) {
                //Aqui habria que devolverlo para que se muestre en el cliente
                console.error(error.errors[campo].message + " " + campo);
            }
        });
    } else {

        console.log("Libro guardado: " + docLOTR._id); //Parece ser que al hacer el save, mongo le asigna
        /*
        Libro.find((error, data) => {
            console.log(data);
        });*/
    }
}
/* 
//Si lo hacemos fuera de guardar, como esta realizando la query contra el servidor tarda un tiempo y esta linea sería en el momento despues de ejecutar esta función
Libro.find((error, data) => {
    console.log(data);
});*/