function addToArray(data, array, callback) {
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
    if (err) return console.log(err.message);
    addToArray(5, array, function(err) {
        if (err) return console.log(err.message);
        addToArray(6, array, function(err) {
            if (err) return console.log(err.message);
            addToArray(7, array, function(err) {});
        });
        console.log(array);
    });
});*/

function addToArrayPromise(data, array) {
    var promise = new Promise(
        function(resolve, reject) {
            if (array.length > 5)
                array = null;
            setTimeout(function() {
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
addToArrayPromise(4, array)
    .then(function() { return addToArrayPromise(5, array) })
    .then(function() { return addToArrayPromise(6, array) })
    .then(function() { return addToArrayPromise(7, array) })
    .then(function() { console.log(array) })
    .catch(err => console.log(err.message));