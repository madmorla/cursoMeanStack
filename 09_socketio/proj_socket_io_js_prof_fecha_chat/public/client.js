var socket = io.connect("/");

socket.on("estao", alRecibirEstado);
socket.on("actualizarFecha", alRecibirFecha);
socket.on("mensajes", mostrarMensajes);

function alRecibirEstado(data) {
    document.getElementById("clientesDiv").innerHTML = "Clientes conectados: " + data.numeroClientes;
}

function alRecibirFecha(data) {
    document.getElementById("fechaDiv").innerHTML = "Fecha actual: " + new Date(data.fechaActual).toString();
}

function mostrarMensajes(data) {
    //llamamos el metodo map que lo que hace es recorrer uno a uno los elementos del array y llama a una funcion callback
    console.log(data);
    var html = data.map(function(elem, index) {
        return (`
            <div>
                <strong>${elem.author}</strong>
                <em>${elem.text}</em>
            </div>
        `); //Las comillas son de la tecla del acento circunflejo ^`llamadas (backtip), formatear con template strings de ECMASCRIPT6
    }).join("-");

    document.getElementById("divMensajes").innerHTML = html;
}

function enviarMensaje() {
    var nuevoMensaje = {
        author: document.getElementById("nombreUsuario").value,
        text: document.getElementById("texto").value
    };
    socket.emit("nuevo-mensaje", nuevoMensaje);
    return false; //para que no se recargue la página en el formulario enviamos un false
}