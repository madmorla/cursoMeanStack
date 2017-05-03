//Instalamos mocha con npm install mocha
//Lo añadimos en package.json en test y ejecutamos npm test

var assert = require("assert");
var indexMod = require("./index");
var modPromesa = require("./ejemplo_promesa.js");

describe("Batería de pruebas", function() {

    describe("Probar asincronía con promesas", function() {
        it("Debe devolver un array con un 7 al final", function(done) {

            var array = [1, 2, 3];
            modPromesa.addToArrayPromise(4, array)
                .then(function() { return modPromesa.addToArrayPromise(5, array) })
                .then(function() { return modPromesa.addToArrayPromise(6, array) })
                .then(function() { return modPromesa.addToArrayPromise(7, array) })
                .then(function() {
                    console.log(array);
                    assert.equal(7, array[array.length - 1]);
                    done();
                })
                .catch((err) => {
                    console.log(err.message);
                    done(err);
                });
        });
    });

    describe("Probando index.js", function() {
        describe("Probando ejecutarApp()", function() {
            it("Debe devolver 36", function() {
                assert.equal(36, indexMod.ejecutarApp());
            });
            it("No debe devolver 666", function() {
                assert.notEqual(666, indexMod.ejecutarApp());
            });
        });
        describe("Probando miFuncionSumadora()", function() {

            it("Debe sumar bien el array", function() {

                assert.equal(testMiCompArray([11, 23, 33], indexMod.miFuncionSumadora(
                    [10, 20, 30], [1, 2, 3])), true);
            });
        });
    });

    describe("#indexOf()", function() {
        it("Debe devolver -1 cuando el valor no esté", function() {
            assert.equal(-1, [1, 2, 3].indexOf(4));
        });
        it("Debe devolver -1 cuando el valor no esté", function() {
            assert.equal(3, "Mi cadena de prueba".indexOf("cadena"));
        });
    });
});

function testMiCompArray(array_1, array_2) {
    for (var i = 0; i < array_1.length; i++) {
        if (array_1[i] != array_2[i])
            return false;
    }
    return true;
}