//Como programar una funcion asíncrona, con callback

function addToArray(data, array, callback) {
    //En javascript convierte a false si es null, 0, cadena vacia, por eso se puede comparar con el if sin poner nada
    if (!array) {
        callback(new Error("No existe el array", null));
    } else {
        array.push(data);
        callback(null, array);
    }
}

var array = [1, 2, 3];
/*
addToArray(4, array, function(err) {
    if (err) { return console.log(err.message); }
    addToArray(5, array, function(err) {
        if (err) { return console.log(err.message); }
        addToArray(6, array, function(err) {
            if (err) { return console.log(err.message); }
            addToArray(7, array, function(err) {
                if (err) { return console.log(err.message); }
            });
        });
    });
    console.log(array);
});
*/

//Hacer esto con promesas, una promesa nos ayuda a gestionar la llamada callback
function addToArrayPromise(data, array) {
    var promise = new Promise(
        //Se crean 2 funciones callback que gestionan la peticion
        function(resolve, reject) {
            setTimeout(function() {
                /* Usarlo para ver como hace el catch en cualquier momento
                if (array.length > 5)
                    array = null;
                */
                array.push(data);
                resolve(array);
            }, 1000);
            if (!array) {
                reject(new Error("No existe el array"));
            }
        }
    );
    return promise;
}
//Nos devuelve un objeto promesa que nos promete la respuesta cuando termine
//con then, llama a la funcion de dentro que nos mostrará el array.
//cuando llamamos a then, vincula la function resolve
addToArrayPromise(4, array)
    .then(function() {
        console.log(array);
        return addToArrayPromise(5, array);
    })
    .then(function() {
        console.log(array);
        return addToArrayPromise(6, array);
    })
    .then(function() {
        console.log(array);
        return addToArrayPromise(7, array);
    })
    .then(function() { console.log(array); })
    .catch(err => console.log(err.message));
//Con catch capturamos el error y nos lo gestiona
//Lo ponemos al final para capturar el error si ocurre en cualquier then...