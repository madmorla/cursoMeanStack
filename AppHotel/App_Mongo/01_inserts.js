//instalamos el driver de mongo localmente y añadimos --save-dev
//npm install mongodb --save-dev

//Nos posicionamos en nuestra carpeta App_mongo en consola y creamos nuestra base de datos
//NOTA: Hay que crear el directorio db_hotel
//mongod --db-path .\db_hotel

//Aqui ya empezamos a programar

var mongodb = require("mongodb");
//Importamos la clase MongoClient
var MongoClient = mongodb.MongoClient;
var ObjectId = mongodb.ObjectID;
//Importamos la clase assert, para crear aserciones para nodeJS para crear mensajes de error controlado por codigo, es decir para depuración
var test = require("assert");
//url de la base de datos
var url = "mongodb://localhost:27017/db_hotel";

MongoClient.connect(url, alConectarDBActualizar);

function alConectarDBInsertar(err, db) {
    //err:error, db: database en caso de exito
    var documentoReserva = {
        nombre: "Primera Persona del Singular",
        email: "email@ejemplo.com",
        fecha_inicio: "25/04/2017",
        fecha_fin: "30/04/2017",
        tipo_habitacion: 1,
        numero_habitaciones: 1,
        con_desayuno: false
    };
    //Insertamos un documento JSON de reserva del hotel
    //db.collection("reservas").insert(documentoReserva);

    //console.log(db.collection("reservas").findOne());
    //Usamos RoboMongo para ver la base de datos
    //Name: Hotel
    //Address: localhost : 27017
    //Advanced --> Default Database : db_hotel

    //Meter un array de datos
    var arrayCollection = [
        { nombre: "Ana Perez", email: "anap@empresa.com" },
        { nombre: "Luis Fernandez", email: "lfer@empresa.com" },
        { nombre: "Javier Gutierrez", email: "jguti@empresa.com" }
    ];
    db.collection("clientes").insert(arrayCollection);
}

function alConectarDBActualizar(err, db) {
    //Comprueba que los 2 datos introducidos por parametros son iguales, si no son iguales manda una seccion y esto es un mensaje de error
    test.equal(null, err);
    //Si el objeto err es null, es que esta bien, sino es que ha habido un error y para el programa

    /*
    //actualizo el email del objeto cuyo id es ese(visto en robomongo)
    //sin $set cambia el documento entero por el nuevo que introduces
    db.collection("clientes").update({ "_id": ObjectId("58ff2145abd67916082a84d5") }, { $set: { "email": "nuevo_email_luis@empresa.com" } });
    //quito el email del objeto cuyo id es ese(visto en robomongo)
    db.collection("clientes").update({ "_id": ObjectId("58ff2145abd67916082a84d6") }, { $unset: { "email": "" } });
    //incrementa en uno las habitaciones
    db.collection("reservas").update({ "nombre": "Primera Persona del Singular" }, { $inc: { tipo_habitacion: 1 } });
    //Cambia la clave "email" por "nuevo_campo_email"
    db.collection("clientes").update({ "_id": ObjectId("58ff2145abd67916082a84d5") }, { $rename: { "email": "nuevo_campo_email" } });
    */
    //
    var reserva = db.collection("reservas").findOne({ "_id": ObjectId("58ff142b08a69916d010c976") }, function(err, document) {
        console.log(document);
    });
    var reserva2 = db.collection("reservas").find({ "_id": ObjectId("58ff142b08a69916d010c976") }).toArray(function(err, documents) {
        console.log(documents[0]);
    });
    db.close(); //cerramos la conexion
};