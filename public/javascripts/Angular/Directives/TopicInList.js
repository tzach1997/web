app.directive("topic", function() {
    return {
        scope: {
            topic: "@",
            creator: "@",
            lastPost: "@",
            lastPostAt: "@",
            topicId: "@"
        },
        restrict: 'E',
        templateUrl:"/views/Directives/TopicOnList.html"
    };
});