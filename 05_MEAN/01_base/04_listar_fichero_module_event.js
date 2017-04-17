//Este modulo va a filtrar todos los ficheros por extensión y por cada fichero vamos a hacer algo

//Este modulo solo define el evento on

"use strict"; //Para revisar que nos recomienda en compilador nodeJS
let fs = require("fs"); //Modulo de File System
let path = require("path"); //Modulo para la dirección de ficheros
let moduleEvents = require("events"); //Modulo de eventos

let EmisorDeEventos = moduleEvents.EventEmitter; //Emisor de eventos es una Clase, por eso la E va en mayuscula

let events = new EmisorDeEventos();
let miEmisor = new EmisorDeEventos();

//module.exports es un objeto de JavaScript
module.exports = function(directorio, extension) {
    fs.readdir(directorio, (error, ficheros) => {
        if (error) {
            //miEmisor.emit("onerror", error);
            miEmisor.emit("onerror", error, null);
        } else {
            //Por cada fichero que se encuente el modulo fs, va a llamar a esta función callback pasando error, ficheros como parametros
            ficheros = ficheros.filter((fichero) => {
                return path.extname(fichero) === extension;
            });
            //miEmisor.emit("alfiltrar", ficheros);
            miEmisor.emit("alfiltrar", null, ficheros);
        }
    })
}

//Función que va a invocar la función on de miEmisor
module.exports.on = function(nombreEvento, funcionCallback) {
    miEmisor.on(nombreEvento, funcionCallback);
}