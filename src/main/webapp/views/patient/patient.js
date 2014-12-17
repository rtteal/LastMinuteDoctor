'use strict';

angular.module('myModule', ['ui.bootstrap']);
angular.module('lastMinuteDoctor.patient', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/patient', {
    templateUrl: 'views/patient/patient.html',
    controller: 'patientCtrl'
  });
}])

.controller('patientCtrl', [function() {

}]);