'use strict';

// Declare app level module which depends on views, and components
angular.module('lastMinuteDoctor', [
  'ngRoute',
  'lastMinuteDoctor.patient',
  'lastMinuteDoctor.doctor',
  'lastMinuteDoctor.home',
  'lastMinuteDoctor.version',
  'ui.bootstrap'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.
  when("/patient", {templateUrl: "views/patient/patient.html"}).
  when("/doctor", {templateUrl: "views/doctor/doctor.html"}).
  when("/home", {templateUrl: "views/home/home.html"}).
  otherwise({redirectTo: '/home'});
}]);
