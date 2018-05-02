(function () {

  'use strict';
  
  angular.module('counterUpdater').service('webServicesSvc', ['$http', 'constants', function ($http, constants) {

      /**
       * WS for activating anything with timeout in the controller. This is dummmy.
       
      this.dummyService = function() {
        return $http.get("").then( function(response) { }, function(error) { });
      };
      */
     var DB = firebase.database();
     
     var getEventList = function() {
			return DB.ref(constants.REFERENCE01).once(constants.VAL).then(function(snapshot) {
        return snapshot.val();
	    });
     }

      return {
        getEventList: getEventList
      }

    }]);
})();