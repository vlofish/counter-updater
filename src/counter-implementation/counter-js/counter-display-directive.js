angular.module('counter')
	.directive('counterDisplay', function() {
		return {
			templateUrl : './counter-display.html',
			controller  : 'counterCtrl'
		}
	});