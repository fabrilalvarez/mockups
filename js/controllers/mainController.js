angular
    .module('mainController', [])
    .controller('signUP', signUP)
    .controller('sentimientoController', sentimientoController)
    .controller('loginController', loginController);

/** funciones */
function signUP($scope) {
    $scope.action = "exitoso!";
}

function sentimientoController($scope, $location) {
    $scope.nombre = "sentimiento";
    $scope.irSentimiento = function () {
        $location.url('/sentimiento');
    };
}

function loginController($scope, $location) {
    $scope.nombre = "login";
    $scope.irLogin = function () {
        $location.url('/login');
    };
    $scope.irSignUp = function () {
        $location.url('/signup');
    };
}

/*
function sentimientoController($scope, $location) {
    $scope.nombre = "sentimiento";
    $scope.irSentimiento = function () {
        $location.url('/sentimiento');
    };
}
function sentimientoController($scope, $location) {
    $scope.nombre = "sentimiento";
    $scope.irSentimiento = function () {
        $location.url('/sentimiento');
    };
}
function sentimientoController($scope, $location) {
    $scope.nombre = "sentimiento";
    $scope.irSentimiento = function () {
        $location.url('/sentimiento');
    };
}
function sentimientoController($scope, $location) {
    $scope.nombre = "sentimiento";
    $scope.irSentimiento = function () {
        $location.url('/sentimiento');
    };
}
*/
