(function(angular, $, window) {
    'use strict';

    var app = angular.module('teacherLesson', [
        'ui.state',
        'teacherLesson.controller'
    ]);

    // === ANGULAR WAY ===
    /* - - - - - - - - - - - - - - - - - - - - - - - - 
    app.config(['$routeProvider', function($routes) {
        $routes.when('/', {
            templateUrl: 'layouts/basicLayout.html'
        });
    }]);
    - - - - - - - - - - - - - - - - - - - - - - - - */

    // === ANGULAR UI WAY ===
    // Docs: https://github.com/angular-ui/ui-router
    app.config(function($stateProvider) {
      $stateProvider
        .state('teacherLesson', {
          url: "", // Root
          templateUrl: "layouts/basicLayout.html",
          controller: "TeacherLessonController"
        })
          .state('teacherLesson.layout', { // The controller will transition to this state by default
            views: {
              "header": {
                templateUrl: "partials/headers/teacherLesson.html"
              },
              "description": {
                templateUrl: "partials/descriptions/teacherLesson.html"
              },
              "content": {
                templateUrl: "partials/contents/teacherLesson.html"
              }
            }
          })

    });
    
}(angular, $, window));
