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
    ├── controllers
    │   ├── lessonCtrl.js
    │   └── teacher
    │       └── lessonCtrl.js
    ├── css
    │   ├── all.css
    │   ├── basicLayout.css
    │   └── lesson.css
    ├── layouts
    │   └── basicLayout.html
    ├── partials
    │   └── teacherLesson
    │       ├── contents.html
    │       ├── header.html
    │       └── navigation.html
    ├── README.md
    ├── teacherLesson.html
    └── vendor
