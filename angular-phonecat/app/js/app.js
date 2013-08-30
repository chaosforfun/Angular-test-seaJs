'use strict';
define(function(require, exports, module) {
	require('./filters.js')
	require('./services.js')
	require('./../moduleA/main')
	angular.module('phonecat', ['ngRoute', 'ngAnimate', 'phonecatFilters', 'phonecatServices', 'A']).
	config(['$routeProvider', '$controllerProvider',
		function($routeProvider, $controllerProvider) {
			angular.module('phonecat').controllerProvider = $controllerProvider;
			$routeProvider.
			when('/phones', {
				templateUrl: 'partials/phone-list.html',
				controller: "PhoneListCtrl",
				resolve: {deps: function ($q) {
					var deferred = $q.defer();
					require('./listCtrl');
					deferred.resolve();
					return deferred.promise;
				}}
			}).
			otherwise({
				redirectTo: '/phones'
			});
		}
	]);
	angular.bootstrap(document, ["phonecat"])
})