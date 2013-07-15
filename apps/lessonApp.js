(function(angular, $, window) {
    'use strict';

    var profile = angular.module('lesson.teacher', [
        //'lesson.controller'
    ]);

    profile.config(['$routeProvider', function($routes) {
        $routes.when('/', {
            templateUrl: 'layouts/basicLayout.html'
        });
    }]);
}(angular, $, window));
