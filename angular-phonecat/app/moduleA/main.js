/**
 * A Module
 *
 * Description
 */
define(function(require, exports, module) {
	angular.module('A', []).config(["$routeProvider", '$controllerProvider',
		function($routeProvider, $controllerProvider) {
			angular.module('A').controllerProvider = $controllerProvider;
			$routeProvider.when('/phones/:phoneId', {
				templateUrl: 'partials/phone-detail.html',
				controller: "PhoneDetailCtrl",
				resolve: {
					deps: function($q) {
						var deferred = $q.defer();
						require("./controller/detailCtrl");
						deferred.resolve();
						return deferred.promise;
					}
				}
			})
		}
	])
})