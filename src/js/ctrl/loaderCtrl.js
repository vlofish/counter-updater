(function() {
	'use strict';

	angular.module('counterUpdater').controller('loaderCtrl', ['$scope', 'constants', function($scope, constants) {
		
		$scope.displayLoader = true;
		$scope.tymLogoSrc    = constants.TYM_LOGO_ICO;

	}]);
})();