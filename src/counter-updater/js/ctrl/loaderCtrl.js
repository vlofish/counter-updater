(function() {
	'use strict';

	angular.module('counterUpdater').controller('loaderCtrl', ['$scope', 'imgConstants', function($scope, imgConstants) {
		
		$scope.displayLoader = true;
		$scope.logoSrc       = imgConstants.MAIN_LOGO;

	}]);
})();