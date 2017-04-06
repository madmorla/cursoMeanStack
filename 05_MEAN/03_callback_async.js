
//FUNCIONES CALLBACK

function funCallback1(parametros){
    console.log("funCallback 1 ha sido llamada con "+ parametros);
}
function funCallback2(parametros){
    console.log("funCallback 2 ha sido llamada con "+ parametros);
}

miProceso("datos1", funCallback1);
miProceso("datos2", funCallback2);

function miProceso(datos,callback) { 
    console.log("Titulo: ", process.title );
    console.log("S.O.: ", process.platform );
    //process.exit();
    //En ajax espera a recibir respuesta para ejecutar la funcion callback
    callback("Parametro: "+process.title);
}