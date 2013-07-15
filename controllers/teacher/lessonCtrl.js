(function(angular, window) { 
    'use strict';

    var controller = angular.module("teacherLesson.controller", []);

    controller.controller('TeacherLessonController', ['$scope', '$state', function($scope, $state) {

      // Decorate scope to access common lesson data/functionality
      AbstractLesson($scope);

      $state.transitionTo('teacherLesson.layout');
    }]);

}(angular, window));
