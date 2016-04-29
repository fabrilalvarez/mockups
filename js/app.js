var app = angular
    .module("mockupsApp", [
        'ngRoute',
        'menuBar',
        'footer',
        'skip',
        'login',
        'sentimiento',
        'sentimiento2',
        'mainController']);

app.config(function ($routeProvider) {
    $routeProvider
        .when('/login', {
            templateUrl: 'js/components/login/login.html',
            controller: 'indexController'
        })
        .when('/sentimiento', {
            templateUrl: 'js/components/sentimiento/sentimiento.html',
            controller: 'sentimientoController'
        })
        .when('/signup', {
            templateUrl: 'js/components/signup/signup.html',
            controller: 'signup'
        })
        .otherwise({
            redirectTo: '/login'
        });
});
