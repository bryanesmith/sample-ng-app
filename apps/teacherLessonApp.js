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
    app.config(function($stateProvider, $urlRouterProvider) {

      // Set default path. Analogous to $routes.otherwise()
      $urlRouterProvider.otherwise("/");

      $stateProvider
        .state('teacherLesson', {
          abstract: true, // Abstract, parent state: https://github.com/angular-ui/ui-router/wiki/Quick-Reference#abstract
          templateUrl: "layouts/basicLayout.html",
          controller: "TeacherLessonController"
        })
          .state('teacherLesson.layout', { // The controller will transition to this state by default
            url: "", // This is the state matching the root url. 
                     // Alternatively, if want a non-root path, could set to "/foo",
                     // and set $urlRouterProvider.otherwise("/foo")
            views: {
              "header": {
                templateUrl: "partials/teacherLesson/header.html"
              },
              "navigation": {
                templateUrl: "partials/teacherLesson/navigation.html"
              },
              "content": {
                templateUrl: "partials/teacherLesson/contents.html"
              }
            }
          })

    });
    
}(angular, $, window));
