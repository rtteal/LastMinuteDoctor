'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.view1',
  'myApp.view2',
  'myApp.view3',
  'myApp.version'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.
  when("/view1", {templateUrl: "view1/view1.html"}).
  when("/view2", {templateUrl: "view2/view2.html"}).
  when("/view3", {templateUrl: "view3/view3.html"}).
  otherwise({redirectTo: '/view3'});
}]);
