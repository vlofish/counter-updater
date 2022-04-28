(function() {
    'use strict';

    angular.module('counter-updater').factory('counterFcty', ['counterSvc', 'textConstants', 'dbConstants', function(counterSvc, textConstants, dbConstants) {

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
            return counterSvc.getEventList().then(function(response) {
                var eventList = [];

                for (let property in response) {
                    eventList.push(response[property]);
                }
        
                eventList.unshift(textConstants.DEFAULT_EVENT);
                return eventList;
            });
        }

        var updateSheltersAvailable = function(eventSelectedObj, sheltersAvailable) {
            var referencePath        = dbConstants.REFERENCE02 + eventSelectedObj.id + '/';
            eventSelectedObj.shelter = sheltersAvailable;

            return counterSvc.updateSheltersAvailable(referencePath, eventSelectedObj).then(function() {
            }).catch(function(error) {
                return textConstants.ERROR_UPDATING + '\n.Error type: ' + error
            });
        }

        return {
            convertToArray          : convertToArray,
            getEventList            : getEventList,
            updateSheltersAvailable : updateSheltersAvailable
        }

    }]);
})();