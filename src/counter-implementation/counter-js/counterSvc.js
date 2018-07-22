(function () {
    'use strict';
  
    angular.module('counter').service('counterSvc', ['$firebaseObject', 'constants', function ($firebaseObject, constants) {
    
        /**
	     * Firebase needed configuration
	     */
        $firebaseObject(firebase.database().ref().child(constants.REFERENCE00));
        var DB = firebase.database();
     
        var getEventList = function() {
            return DB.ref(constants.REFERENCE01).once(constants.VAL).then(function(snapshot) {
                return snapshot.val();
            });
        };

        return {
            getEventList : getEventList
        }
    }]);
})();