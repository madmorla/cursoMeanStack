"use strict";

//Buffer esta por defecto en nodeJS
//Creamos un buffer a partir de un string y le damos un encode
//Hay que dar siempre un espacio de memoria fijo, no hay dinamico
const miBuff = Buffer.from("Hola mundo", "utf8");
const miBuff2 = Buffer.alloc(20); //Le damos un espacio de memoria(20 bytes)
let miBuff3 = Buffer.alloc(50);

miBuff2[2] = miBuff[0];
miBuff2[4] = miBuff[1];
miBuff2[6] = miBuff[2];
miBuff2[8] = miBuff[3];

console.log("Buffer en bruto:");
console.log(miBuff);
console.log("Contenido del buffer: " + miBuff.toString());

console.log("=========================")

console.log("Buffer 2 en bruto:");
console.log(miBuff2);
console.log("Contenido del buffer: " + miBuff2.toString());

miBuff.copy(miBuff3, 0); //copias al buffer 3 desde la posicion 0
miBuff2.copy(miBuff3, 6); //copias al buffer 3 desde la posicion 6

console.log("=========================")

console.log("Buffer 3 en bruto:");
console.log(miBuff3);
console.log("Contenido del buffer: " + miBuff3.toString());