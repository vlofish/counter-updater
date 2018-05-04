(function() {
	'use strict';

	angular.module('counterUpdater').controller('counterCtrl', ['$scope', '$controller', '$timeout', 'constants', 'textConstants', 'counterFcty', ($scope, $controller, $timeout, constants, textConstants, counterFcty) => {

		/**
		 * Global variables
		 */
		var sheltersAvailable               = 0;
	    var animationsAndDisplayabilityCtrl = $scope;

		/**
		 * Bind controllers.
		 */
	    $controller('animationsAndDisplayabilityCtrl', {
	    	$scope : animationsAndDisplayabilityCtrl
	    });

	    /**
	     * Activated when choosing a specific event from the select box.
	     * If eventSelected is a real event, enable the DOM for its use.
	     * The number of houses are updated and displayed in the DOM.
	     */
		$scope.displayEventInfo = (eventSelected) => {
			let boolean = true;

			if (eventSelected.id) {
				boolean = false;
			}

			disableDom(boolean);
			updateUICounter(eventSelected.shelter);
			sheltersAvailable = eventSelected.shelter;
		};

	    /**
	     * Increase the number of houses available.
	     */
	    $scope.increaseNumber = () => {
			if (sheltersAvailable < 1000) {
	        	sheltersAvailable += 1;
	        	updateUICounter(sheltersAvailable);
	      	}
	    };

	    /**
	     * Decrease the number of houses available.
	     */
	    $scope.decreaseNumber = function() {
			if (sheltersAvailable > 0) {
				sheltersAvailable -= 1;
				updateUICounter(sheltersAvailable);
	      	}
	    };

	    /**
	     * Update the number of places available.
	     */
	    $scope.updateSheltersAvailable = (eventSelected) => {
            displayOrHideDomElements(constants.UPDATING_SHELTERS_DIVS, constants.UPDATE_SHELTERS_DIVS);

			counterFcty.updateSheltersAvailable(eventSelected, sheltersAvailable).then(function() {
				$timeout( () => {
					displayOrHideDomElements(constants.UPDATED_SHELTERS_DIVS, constants.UPDATING_SHELTERS_DIVS);
					$scope.events[eventSelected.id].shelter = sheltersAvailable; // Fixing for bug.
				}, 1000);

				$timeout( () => {
					displayOrHideDomElements(constants.UPDATE_SHELTERS_DIVS, constants.UPDATED_SHELTERS_DIVS);
				}, 2000);
			}).catch(function(error) {
				window.alert(error);
            });
	    };

		/**
		 * First call in all the app.
		 */
		function init() {
			$scope.domObj   = {};
			$scope.animObj  = {};

			getEventList();
			setTextToDisplayInDOM($scope);
	    	disableDom(true);

		    animationsAndDisplayabilityCtrl.setAnimation(constants.COUNTER_ANIM, constants.BOUNCE_IN);
			animationsAndDisplayabilityCtrl.displayOrHideDomObj(constants.UPDATE_SHELTERS_DIVS, true);
		};

		init();

		/**
		 * Sets the default DOM texts to be displayed in the DOM.
		 */
		function setTextToDisplayInDOM($scope) {
			$scope.counterTextInDOM      = textConstants.COUNTER;
			$scope.sheltersTextInDOM     = textConstants.SHELTERS_AVAILABLE;
			$scope.firstNumberTextInDOM  = textConstants.NA_ARRAY[0];
			$scope.secondNumberTextInDOM = textConstants.NA_ARRAY[1];
    		$scope.thirdNumberTextInDOM  = textConstants.NA_ARRAY[2];
    		$scope.text01DOM             = textConstants.SHELTERS_UPDATE;
    		$scope.text02DOM             = textConstants.UPDATING;
    		$scope.text03DOM             = textConstants.SHELTERS_UPDATED;
		};

	  /**
	   * Get the names of the events and set them to the select box in the DOM.
	   * 
	   * TODO : There's a bug, the DOM is shown before the events are loaded.
	   */
		function getEventList() {
			counterFcty.getEventList().then(function(response) {
				$scope.events = response;
				$scope.displayLoader = false;
			});
		};

		/**
		 * Disable or enables certain DOM objects.
		 * Buttons for increasing/decreasing the counter.
		 * Button for updating the counter.
		 */
		function disableDom(boolean) {
			$scope.disableIncreaseNumberDOM = boolean;
	    	$scope.disableDecreaseNumberDOM = boolean;
	    	$scope.disableUpdateSheltersDOM = boolean;
		};

	    /**
	     * Display the available houses in the UI when increasing or decreasing the number of houses
	     */
	    function updateUICounter(number) {
			var numberArray = counterFcty.convertToArray(number);

			$scope.firstNumberTextInDOM  = numberArray[0];
			$scope.secondNumberTextInDOM = numberArray[1];
			$scope.thirdNumberTextInDOM  = numberArray[2];
	    };


		/**
		 * Receives the arrays with the names of the doms that the user wants to display or hide.
		 * Each property has to be defined in order to be activated.
		 */
		function displayOrHideDomElements(domToDisplay, domToHide) {
			if (domToHide) {
				animationsAndDisplayabilityCtrl.displayOrHideDomObj(domToHide, false);
			}
			if (domToDisplay) {
				animationsAndDisplayabilityCtrl.displayOrHideDomObj(domToDisplay, true);
			}
		}

	}]);
})();
