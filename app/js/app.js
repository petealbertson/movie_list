'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', [
  'ui.bootstrap',
  'ngRoute',
  'myApp.filters',
  'myApp.services',
  'myApp.directives',
  'myApp.controllers',
  'firebase'
]).

config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/', {templateUrl: 'partials/partial.html', controller: 'MoviesCtrl'});
  $routeProvider.otherwise({redirectTo: '/view1'});
}]);


