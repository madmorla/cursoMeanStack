"use strict";

let fs = require("fs");

//Crea un fichero con Hola Mundo escrito
let streamEscritura = fs.createWriteStream("fich_write.txt");
let streamLectura = fs.createReadStream("00_Cosas_utiles.txt");

const miBuff = Buffer.from("Hola mundo", "utf8"); //Lee como máximo 64k

streamLectura.setEncoding("utf8");
streamLectura.on("data", alLeerStream); //Se llama cada vez que rellena su buffer a alLeerStream

function alLeerStream(miBuffer) {
    console.log(miBuffer.length);
    streamEscritura.write(miBuffer.toString().toLowerCase());
}

/*
streamLectura.on("data", (chunk) => {
    streamEscritura.write(chunk);
});
*/
//streamEscritura.write(miBuff.toString());