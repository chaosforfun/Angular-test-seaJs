'use strict';

/* App Module */

angular.module('phonecat', ['ngRoute', 'ngAnimate','phonecatFilters', 'phonecatServices','A']).
  config(['$routeProvider', function($routeProvider) {
  $routeProvider.
      when('/phones', {templateUrl: 'partials/phone-list.html',   controller: "PhoneListCtrl"}).
      otherwise({redirectTo: '/phones'});
}]);
