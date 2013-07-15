sample-ng-app
=============

## Description
Sample Angular application that demonstrates:
  * nested views (using UI-Router)
  * multiple views (using UI-Router)
  * shared functionality and data between controllers
  * using separate templates for layouts and contents
  * Sharing Angular modules (e.g., controllers, services) and views between multiple Angular apps

## Libraries
  * jQuery
  * Bootstrap
  * Angular
  * [UI-Router](https://github.com/angular-ui/ui-router)

## File structure
    ├── apps
    │   └── teacherLessonApp.js
    │   └── (Other app configs...)
    ├── controllers
    │   ├── lessonCtrl.js (module AbstractLesson, which provides shared lesson functionality)
    │   ├── (Other "abstract" modules providing shared functionality for role-specific controllers...)
    │   └── teacher
    │       └── lessonCtrl.js
    │       └── (Other teacher-specific controllers...)
    │   └── student
    │   └── (Other roles...)
    ├── css
    │   ├── all.css
    │   ├── basicLayout.css
    │   └── lesson.css
    ├── layouts
    │   └── basicLayout.html
    │   └── (Other layouts...)
    ├── partials
    │   └── lesson (any lesson-specific partials that are shared between roles... none for now)
    │   └── teacherLesson
    │       ├── contents.html
    │       ├── header.html
    │       └── navigation.html
    │   └── (Other collections of app-specific partials...)
    ├── README.md
    ├── teacherLesson.html
    ├── (Other landing HTML pages, one per Angular app...)
    └── vendor 

## Issues
  * Haven't thought about how to organize css files.
