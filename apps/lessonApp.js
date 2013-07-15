(function(angular, $, window) {
    'use strict';

    var app = angular.module('lesson.teacher', [
        //'lesson.controller'
        'ui.state'
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
          .state('layout', {
              url: "",
              templateUrl: "layouts/basicLayout.html"
          })
    });
    
}(angular, $, window));
