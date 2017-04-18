function ControladorSimple($scope) {
    $scope.tituloDiv = "App Gestion Clientes";
    $scope.listadoClientes = [
        { nombre: 'Fran', ciudad: 'Cadiz' },
        { nombre: 'Sergio', ciudad: 'Madrid' },
        { nombre: 'Angel', ciudad: 'Madrid' },
        { nombre: 'Julio', ciudad: 'Madrid' },
        { nombre: 'Pedro', ciudad: 'Cadiz' }
    ];
    var varLocal = 2;
}

function ControladorSimple2($scope) {
    $scope.tituloDiv = "ControladorSimple2 Gestion Clientes";
    $scope.listadoClientes = [
        { nombre: 'Fran', ciudad: 'Cadiz' },
        { nombre: 'Sergio', ciudad: 'Madrid' },
        { nombre: 'Angel', ciudad: 'Madrid' },
    ];
}
//Angular crea el modulo que vamos a usar
var moduloAplicacion = angular.module("miAppClientes", []);

//Asignamos el controlador a una funcion
moduloAplicacion.controller("controladorSimple", ControladorSimple);
moduloAplicacion.controller("controladorSimpleDos", ControladorSimple2);