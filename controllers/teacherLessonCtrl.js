(function(angular, window) { 
    'use strict';

    var controller = angular.module("teacherLesson.controller", []);

    controller.controller('TeacherLessonController', ['$scope', '$state', function($scope, $state) {
      $state.transitionTo('teacherLesson.layout');
    }]);

}(angular, window));
