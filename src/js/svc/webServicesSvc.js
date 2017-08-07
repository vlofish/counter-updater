(function () {

  'use strict';
  
  angular.module('tym').service('webServicesSvc', ['$http', function ($http) {

      /**
       * WS for activating anything with timeout in the controller. This is dummmy.
       */
      this.dummyService = function() {
        return $http.get("").then( function(response) { }, function(error) { });
      };

    }]);
})();