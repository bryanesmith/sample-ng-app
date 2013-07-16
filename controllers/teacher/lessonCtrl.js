(function(angular, window) { 
    'use strict';

    var controller = angular.module("teacherLesson.controller", []);

    controller.controller('TeacherLessonController', ['$scope', '$state', 'lessonName', function($scope, $state, lessonName) {

      // Decorate scope to access common lesson data/functionality
      AbstractLesson($scope);

      // Store resolved variable
      $scope.lesson = {};
      $scope.lesson.name = lessonName;

      // Explicitly set the state. This is also implicitly accomplished via this
      // URL, as specified in teacherLessonApp.js (set to the $stateProvider)
      //$state.transitionTo('teacherLesson.layout');
    }]);

}(angular, window));
