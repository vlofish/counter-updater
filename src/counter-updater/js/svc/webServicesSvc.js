(function () {
    'use strict';
  
    angular.module('counterUpdater').service('webServicesSvc', ['$http', '$firebaseObject', 'dbConstants', function ($http, $firebaseObject, dbConstants) {
    
        /**
	     * Firebase needed configuration
	     */
        $firebaseObject(firebase.database().ref().child(dbConstants.REFERENCE00));
        var DB = firebase.database();
     
        var getEventList = function() {
            return DB.ref(dbConstants.REFERENCE01).once(dbConstants.VAL).then(function(snapshot) {
                return snapshot.val();
            });
        }

        var updateSheltersAvailable = function(referencePath, eventSelectedObj) {       
            return DB.ref(referencePath).set(eventSelectedObj).then(function() {
            }, function(error) {
                return error;
            });
        }

        return {
            getEventList            : getEventList,
            updateSheltersAvailable : updateSheltersAvailable
        }
      /**
       * WS for activating anything with timeout in the controller. This is dummmy.
       
      this.dummyService = function() {
        return $http.get("").then( function(response) { }, function(error) { });
      };
      */
    }]);
})();