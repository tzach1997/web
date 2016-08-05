app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "/views/Routes/main.html"
    })
    .when("/Fourm", {
        templateUrl : "/views/Routes/Fourm.html"
    })
    .when("/Fourm/Topic", {
        templateUrl : "/views/Routes/Topic.html"
    })
    .when("/blue", {
        templateUrl : "blue.htm"
    });
});