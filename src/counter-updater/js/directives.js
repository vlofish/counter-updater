angular.module('counterUpdater')
	.directive('vmLoader', () => {
		return {
			templateUrl: './views/vm-loader.html',
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