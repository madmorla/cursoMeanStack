var express = require("express");
var app = express();
var server = require("http").Server(app); //Creamos un server a partir de nuestra app de express
//Aqui decimos que el modulo de socket.io va a correr sobre el servidor de express
var io = require("socket.io")(server);
//Es una especie de metodo que estas llamandolo pasandole el param server, equivale a...
// var funcionModuloSocketIO = require("socket.io");
// var objIO = funcionModuloSocketIO(server);

var numeroClientes = 0;

app.use(express.static("../public")); //Añadimos la carpeta estatica de public de cliente
//Dependiendo desde donde ejecutes el comando node tienes que poner una ruta distinta de public
//ejecutando con F8 del plugin, debemos ponerlo de esta manera, si ejecutamos
//node server\main.js // entonces seria //app.use(express.static("public"));

server.listen(8080, function() {
    console.log("Servidor EXPRESS escuchando en http://localhost:8080");
});

io.on("connection", alConectarseAlguien);

function alConectarseAlguien(socket) {
    numeroClientes++;
    io.emit('estado', { numeroClientes: numeroClientes });

    console.log('Clientes conectados: ' + numeroClientes);
    /*
    socket.on("disconnect", function() {
        numeroClientes--;
        io.emit('estado', { numeroClientes: numeroClientes });

        console.log('Clientes conectados: ' + numeroClientes);
    })*/
}