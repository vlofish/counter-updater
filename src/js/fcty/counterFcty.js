(function() {
    'use strict';

    angular.module('counterUpdater').factory('counterFcty', ['webServicesSvc', 'constants', function(webServicesSvc, constants) {

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

        return {
            getEventList : getEventList
        }

    }]);
})();