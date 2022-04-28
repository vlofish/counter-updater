(function() {
	'use strict';

	angular.module('counter-updater').controller('loaderCtrl', ['$scope', 'imgConstants', function($scope, imgConstants) {
		
		$scope.displayLoader = true;
		$scope.logoSrc       = imgConstants.MAIN_LOGO;

	}]);
})();