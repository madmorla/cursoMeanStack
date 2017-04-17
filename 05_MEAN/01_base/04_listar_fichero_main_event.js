//Esta app va a utilizar el modulo de eventos
"use strict";
let moduloFiltrado = require("./04_listar_fichero_module_event.js");
//recibe por parametro el directorio y la extension
//node 04_listar_fichero_main_event.js <directorio> .<extension>
let directorio = process.argv[2];
let extension = process.argv[3];

//directorio = "./";
//extension = ".js";

/*
function queHacerCuandoDevuelvaLosFicheros(arrayDeFicheros) {
    arrayDeFicheros.forEach(
        //Funcion callback que imprime los ficheros
        (fichero) => {
            console.log("Fichero: " + fichero);
        })
}
*/
//Tambien podemos añadir el error en este metodo y en module mirar que se ha puesto
function queHacerCuandoDevuelvaLosFicheros(error, arrayDeFicheros) {
    if (error != null) {
        console.log(error.message);
    } else {
        arrayDeFicheros.forEach(
            //Funcion callback que imprime los ficheros
            (fichero) => {
                console.log("Fichero: " + fichero);
            })
    }
}

function tratamientoDeErrorDirectorio(error) {
    console.log(error.message);
}

moduloFiltrado.on("alfiltrar", queHacerCuandoDevuelvaLosFicheros);
//moduloFiltrado.on("onerror", (error) => console.log(error.message));
//moduloFiltrado.on("onerror", tratamientoDeErrorDirectorio);
moduloFiltrado.on("onerror", queHacerCuandoDevuelvaLosFicheros);
moduloFiltrado(directorio, extension);

//Ej:
//node 04_listar_fichero_main_event.js ./ .js

//DEPURACION
//En fichero configuración comprobar que esta puesto la siguiente linea
//"program": "${file}"
//Significa el programa actual