var app = angular.module("myApp", ["ngRoute"]);
app.config(function($routeProvider) {
    $routeProvider
    .when("/inicio", {
        templateUrl : "../Templates/inicio.html",
    })
    .when("/info", {
        templateUrl : "../Templates/info.html",
        //controller : "londonCtrl"
    })
    .when("/trabajo1", {
        templateUrl : "../Templates/trabajo1.html",
        //controller : "parisCtrl"
    })
    .when("/trabajo2", {
        templateUrl : "../Templates/trabajo2.html",
        //controller : "parisCtrl"
    });
});
