//Programación de una tuberia

"use strict";

let fs = require("fs");
let zlib = require("zlib");
//NO SE PUEDE TENER UN STREAM DE LECTURA ABIERTO A LA VEZ DE ESCRITURA SOBRE UN MISMO FICHEERO

let streamLectura = fs.createReadStream("fich_write.txt.gz");
let streamEscritura = fs.createWriteStream("fich_descomprimido.txt");

//Entubamos el streamLectura con el de streamEscritura
//Usamos la libreria zlib de nodeJS, que usamos createGunzip, que nos devolvera un stream bidireccional para descomprimir
streamLectura.pipe(zlib.createGunzip()).pipe(streamEscritura);
//al meterlo en el pipe el streamEscritura hace el write directamente

streamEscritura.close();
streamLectura.close();

streamLectura = fs.createReadStream("fich_descomprimido.txt");
streamEscritura = fs.createWriteStream("fich_write.txt.gz");

//con createGzip, comprimimos el archivo
streamLectura.pipe(zlib.createGzip()).pipe(streamEscritura);