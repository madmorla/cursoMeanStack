"use strict";
// Pedimos la memoria usada
let mem = process.memoryUsage();
// Calcularlo en Kb
let memKb = {
    rss: parseInt(mem.rss / 1024),
    heapTotal: parseInt(mem.heapTotal / 1024), //Tamañp de la pila
    heapUsed: parseInt(mem.heapUsed / 1024), //Tamaño de la pila usada
    external: parseInt(mem.external / 1024),
}

function primeraFuncion() {
    console.log(memKb);
    // process.exit(1);
    process.chdir("../");
}

function segundaFuncion() {
    console.log(process.cwd()); //Directorio actual usado
    var unVariablePorsterior = "unVariablePorsterior";
    // Información del entorno de usario
    console.log(process.env);
}

function terceraFuncion() {
    primeraFuncion();
    segundaFuncion();

    // Tiempo de uso de la CPU
    const startUsage = process.cpuUsage(); //Uso de cpi

    const now = Date.now();
    while (Date.now() - now < 500);
    // Tiempo pasado en micro segundos
    console.log(process.cpuUsage(startUsage)); //Tiempo que lleva de ejecucion del proceso
}
terceraFuncion();