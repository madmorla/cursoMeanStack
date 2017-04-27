//El modulo io ya esta creado
var socket = io.connect('/');
socket.on("estado", alRecibirEstado);

function alRecibirEstado(data) {
    document.getElementById("clientesDiv").innerHTML = "Clientes conectados: " + data.numeroClientes;
    console.log("Clientes conectados: ", data.numeroClientes);
}