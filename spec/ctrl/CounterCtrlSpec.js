describe('CounterCtrlSpec.', function(){
    var $controller;
    var $rootScope;

    beforeEach(function() {
        module('counterUpdater');

        inject(function(_$controller_, _$rootScope_) {
            $controller = _$controller_;
            $rootScope  = _$rootScope_;
        });
    });

    describe('Testing functions manipulated from the DOM.', function() {
        var scope, controller;

        beforeEach(function() {
            scope = $rootScope.$new();
            controller = $controller('counterCtrl', {$scope : scope});
        });

        afterEach(function() {
            scope.$destroy();
            controller = null;
        });

        it('must increase the number of shelters available.', function() {
            scope.increaseNumber();
            scope.increaseNumber();

            expect(scope.thirdNumberTextInDOM).toBeGreaterThanOrEqual(2);
        });
    });

});