(() => {
	'use strict';

	angular.module('counterUpdater').controller('counterCtrl', ['$firebaseObject', '$scope', '$controller', '$timeout', 'constants', ($firebaseObject, $scope, $controller, $timeout, constants) => {

		/**
	     * Firebase needed configuration
	     */
		firebase.initializeApp(constants.FIREBASE_CONFIG);
		$firebaseObject(firebase.database().ref().child(constants.REFERENCE00));

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
	    $scope.decreaseNumber = () => {
	      if (sheltersAvailable > 0) {
	        sheltersAvailable -= 1;
	        updateUICounter(sheltersAvailable);
	      }
	    };

	    /**
	     * Update the number of houses available.
	     */
	    $scope.updateSheltersAvailable = (eventSelected) => {
			let reference         = constants.REFERENCE02 + eventSelected.id + '/';
			eventSelected.shelter = sheltersAvailable;

			displayOrHideDomElements(constants.UPDATING_SHELTERS_DIVS, constants.UPDATE_SHELTERS_DIVS);

			firebase.database().ref(reference).set(eventSelected).then( function(snapshot) {
				$timeout( () => {
					displayOrHideDomElements(constants.UPDATED_SHELTERS_DIVS, constants.UPDATING_SHELTERS_DIVS);
					$scope.events[eventSelected.id].shelter = sheltersAvailable; // Fixing for bug.
				}, 2000 );
			}, function(error) {
				window.alert(constants.ERROR_UPDATING);
			});

			$timeout( () => {
				displayOrHideDomElements(constants.UPDATE_SHELTERS_DIVS, constants.UPDATED_SHELTERS_DIVS);
			}, 4000);
	    };

		/**
		 * First call in all the app.
		 */
		$scope.init = () => {
			$scope.domObj   = {};
			$scope.animObj  = {};

			getEventsFromAgenda();
			setTextToDisplayInDOM($scope);
	    	disableDom(true);

	    	animationsAndDisplayabilityCtrl.setAnimation(constants.COUNTER_ANIM, constants.BOUNCE_IN);
			animationsAndDisplayabilityCtrl.displayOrHideDomObj(constants.UPDATE_SHELTERS_DIVS, true);
		};

		$scope.init();

		/**
		 * Sets the default DOM texts and/or messages to be displayed in the DOM.
		 */
		function setTextToDisplayInDOM($scope) {
			$scope.counterDOM      = constants.COUNTER;
			$scope.sheltersDOM     = constants.SHELTERS_AVAILABLE;
			$scope.firstNumberDOM  = constants.NA_ARRAY[0];
	      	$scope.secondNumberDOM = constants.NA_ARRAY[1];
	      	$scope.thirdNumberDOM  = constants.NA_ARRAY[2];
	      	$scope.text01DOM       = constants.SHELTERS_UPDATE;
	      	$scope.text02DOM       = constants.UPDATING;
	      	$scope.text03DOM       = constants.SHELTERS_UPDATED;
		};

	    /**
	     * Get the names of the events and set them to the select box in the DOM.
	     * Only until all events are loaded, theDOM will be shown.
	     */
		function getEventsFromAgenda() {
			let agendaEvents = [];

			firebase.database().ref(constants.REFERENCE01).once(constants.VAL).then(function(snapshot) {
		        for (let property in snapshot.val()) {
		          agendaEvents.push(snapshot.val()[property]);
		        }

		        agendaEvents.unshift(constants.DEFAULT_EVENT);
	        
	        	$scope.events        = agendaEvents;
				// $scope.eventSelected = agendaEvents[0];
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
		 * Set each cahr number to an index of an array.
		 * If number length is less than 2; insert a zero number to the left.
	     */
	    function updateUICounter(number) {
	    	let stringNumber = number.toString().split('');

			if (stringNumber.length <= 2) {
				for (let i = stringNumber.length; i < 3; i++) {
					stringNumber.unshift('0');
				}
			}

			$scope.firstNumberDOM  = stringNumber[0];
			$scope.secondNumberDOM = stringNumber[1];
			$scope.thirdNumberDOM  = stringNumber[2];
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