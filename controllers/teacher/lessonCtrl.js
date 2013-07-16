(function(angular, window) { 
    'use strict';

    var controller = angular.module("teacherLesson.controller", []);

    controller.controller('TeacherLessonController', ['$scope', '$state', function($scope, $state) {

      // Decorate scope to access common lesson data/functionality
      AbstractLesson($scope);

      // Explicitly set the state. This is also implicitly accomplished via this
      // URL, as specified in teacherLessonApp.js (set to the $stateProvider)
      //$state.transitionTo('teacherLesson.layout');
    }]);

}(angular, window));
