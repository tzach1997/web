app.directive("comment", function () {
    return {
        scope: {
            creator: '@',
            context: '@',
            admin: '@'
        },
        restrict: 'E',
        templateUrl: "/views/Directives/Comment.html"
    };
});