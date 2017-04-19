var app = angular.module("myApp", ["ngRoute"]);
app.config(function($routeProvider) {
    $routeProvider
    .when("/info", {
        templateUrl : "./Templates/info.html",
    })
    .when("/trabajo1", {
        templateUrl : "./Templates/trabajo1.html",
    })
    .when("/trabajo2", {
        templateUrl : "./Templates/trabajo2.html",
     })
    .when("/contacto", {
        templateUrl : "./Templates/contacto.html",
    });
});
