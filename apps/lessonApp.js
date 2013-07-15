(function(angular, $, window) {
    'use strict';

    var profile = angular.module('lesson.teacher', [
        //'lesson.controller'
    ]);

    profile.config(['$routeProvider', function($routes) {
        $routes.when('/', {
            templateUrl: 'partials/lesson.html'
        });
    }]);
}(angular, $, window));
