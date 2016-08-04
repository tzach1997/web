app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "/views/Routes/main.html"
    })
    .when("/red", {
        templateUrl : "red.htm"
    })
    .when("/green", {
        templateUrl : "green.htm"
    })
    .when("/blue", {
        templateUrl : "blue.htm"
    });
});