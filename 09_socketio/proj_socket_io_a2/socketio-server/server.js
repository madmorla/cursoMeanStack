var app = require("express")();
var http = require("http").Server(app);
var io = require("socket.io")(http);

var sockets = [];
//La apliacación se conecta al 4200
//La sala de chat se abre sobre el puerto 3000 en http.listen
io.origins("http://localhost:4200");
//Le permite conectar a usuarios a traves del puerto 4200
var chat = io.of("/chat"); //creamos un namespace de chat; que sera la url donde conecte

chat.on("connection", (socket) => {
    console.log("Cliente conectado.");
    sockets.push(socket);

    //Este evento ocurre cuando un cliente envia un mensaje
    socket.on("mando-un-mensaje", (mensaje) => {
        console.log("Mensaje recibido: ", mensaje);
        mensaje.user = socket.id;
        //al mismo cliente que nos ha enviado un mensaje, le enviamos un mensaje de vuelta
        socket.emit("mando-un-mensaje", mensaje);
        //Al resto del chat le enviamos el mismo mensaje que hemos recibido
        //chat.emit("mando-un-mensaje", mensaje); //Vamos a cambiarlo por un broadcast
        //Enviamos el mensaje al resto menos a nosotros
        socket.broadcast.emit("mando-un-mensaje", mensaje);
    });
    //aki si se desconecta
    socket.on("disconnect", (socket) => console.log("Desconectado!"));
});

//Esto de aqui abajo no va?
chat.on("disconnect", (socket) => {
    console.log("Cliente desconectado");
});

//La sala de chat se abre sobre el puerto 3000
http.listen(3000, () => {
    console.log("Servidor iniciado *: 3000")
})