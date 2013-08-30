'use strict';

/* Controllers */
define(function(require, exports, module) {
	angular.module('phonecat').controllerProvider.register("PhoneListCtrl", ["$scope", "Phone", "$http",
			function($scope, Phone, $http) {
				$scope.phones = Phone.query();
				$scope.orderProp = 'age';
			}
		])
})