(function() {
	'use strict';
	
	angular.module('counterUpdater').controller('animationsAndDisplayabilityCtrl', ['$scope', function ($scope){
		/**
		 * Based on properties creation through the life of the site:
		 * The site displays specific animation for specific parts of the DOM.
		 * Creates animation properties that tells what type of animation to set in a div or DOM element.
		 */
		$scope.setAnimation = function(objToAnimate, animation) {
			objToAnimate.forEach(function(objName) {
				$scope.animObj[objName] = animation;
			});
		};

		/**
		 * Based on properties creation through the life of the site:
		 * The site displays dom objects based on true of created properties
		 * The site hides dom objects based on false of created properties
		 */
		$scope.displayOrHideDomObj = function(objToDisplay, boolean) {
			objToDisplay.forEach(function(objName) {
				$scope.domObj[objName] = boolean;
			});
		};
	}]);

})();