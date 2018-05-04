(function() {
    'use strict';

    angular.module('counterUpdater').factory('counterFcty', ['webServicesSvc', 'constants', function(webServicesSvc, constants) {

        var convertToArray = function(number) {
            var numberArray = number.toString().split('');

			if (numberArray.length <= 2) {
				for (let i = numberArray.length; i < 3; i++) {
					numberArray.unshift('0');
				}
            }
            
            return numberArray;
        }

        var getEventList = function() {
            return webServicesSvc.getEventList().then(function(response) {
                var eventList = [];

                for (let property in response) {
                    eventList.push(response[property]);
                }
        
                eventList.unshift(constants.DEFAULT_EVENT);
                return eventList;
            });
        }

        var updateSheltersAvailable = function(eventSelectedObj, sheltersAvailable) {
            var referencePath        = constants.REFERENCE02 + eventSelectedObj.id + '/';
            eventSelectedObj.shelter = sheltersAvailable;

            return webServicesSvc.updateSheltersAvailable(referencePath, eventSelectedObj).then(function() {
            }).catch(function(error) {
                return constants.ERROR_UPDATING + '\n.Error type: ' + error
            });
        }

        return {
            convertToArray          : convertToArray,
            getEventList            : getEventList,
            updateSheltersAvailable : updateSheltersAvailable
        }

    }]);
})();