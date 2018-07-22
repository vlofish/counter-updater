(function() {
	'use strict';

	angular.module('counter').controller('counterCtrl', ['$scope', 'counterSvc', function($scope, counterSvc) {

		function getEventList() {
			counterSvc.getEventList().then(function(response) {
				$scope.events = response;
			});
		};

		getEventList();

	}]);
})();
