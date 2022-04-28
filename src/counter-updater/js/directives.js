angular.module('counterUpdater')
	.directive('loaderDctv', function() {
		return {
			templateUrl : './views/loader.html',
			controller  : 'loaderCtrl'
		};
	})
	.directive('counterDctv', function() {
		return {
			templateUrl : './views/counter.html',
			controller  : 'counterCtrl'
		};
	})
	.directive('counterDisplayer', function() {
		return {
			templateUrl : './views/counter-displayer.html',
			controller  : 'counterDisplayerCtrl'
		}
	});