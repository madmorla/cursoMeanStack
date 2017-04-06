// Objeto process
// https://nodejs.org/api/process.html
// Tenemos acceso al directorio de trabajo, 

process.on("exit",
    function(codigo){
        console.log("Saliendo de marcha");
        console.log(codigo);
    }
);

console.log("Titulo: ", process.title );
console.log("S.O.: ", process.platform );

console.log(`This processor architecture is ${process.arch} ` + process.arch);

//Si se ponen más argumentos al ejecutar el archivo con node, saldrán más:
// C:\Curso Mañana\VSCode\05_MEAN>node 02_process.js -l arg
// 0: C:\Program Files\nodejs\node.exe
// 1: C:\Curso Mañana\VSCode\05_MEAN\02_process.js
// 2: -l
// 3: arg
process.argv.forEach((val, index) => {
  console.log(`${index}: ${val}`);
  
});

process.exit();

console.log("PID  ", process.pid );