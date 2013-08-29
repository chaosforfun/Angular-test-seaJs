/**
 * A Module
 *
 * Description
 */
angular.module('A', []).config(["$routeProvider", function($routeProvider) {
	$routeProvider.when('/phones/:phoneId', {templateUrl: 'partials/phone-detail.html', controller: "PhoneDetailCtrl"})
}])
