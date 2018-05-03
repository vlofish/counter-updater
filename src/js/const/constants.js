// angular.module('counterUpdater').constants('constants', globalData);
angular.module('counterUpdater').value('constants', {
	// Img src here:
	TYM_LOGO_ICO : './img/logo_tym.ico',
	TYM_LOGO_JPG : './img/tym_small.jpg',

	// Texts names here:
	// COUNTER            : 'Contador',
	// SHELTERS_AVAILABLE : 'Hospedajes Disponibles:',
	// SHELTERS_UPDATE    : 'Actualizar Hospedaje.',
	// UPDATING           : 'Actualizando...',
	// SHELTERS_UPDATED   : 'Hospedaje actualizado exitosamente.',
	// NA_ARRAY           : ['n', '/', 'a'],
	ERROR_UPDATING     : 'Hubo un error al actualizar el contador. \n Captura esta pantalla y contacta a tu administrador del sistema.',

	// Animations names here:
	BOUNCE_IN    : 'bounceIn',
	COUNTER_ANIM :  ['counter'],

	// Divs names here:
	UPDATE_SHELTERS_DIVS   : ['updateShelters'],
	UPDATING_SHELTERS_DIVS : ['updatingShelters'],
	UPDATED_SHELTERS_DIVS  : ['sheltersUpdated'],

	// Default event displayed in the counter
	DEFAULT_EVENT : {
		name    : 'Escoge el evento por actualizar:',
		shelter : 'n/a'
	},

	//Firebase here :
	REFERENCE00     : 'events',
	REFERENCE01     : '/events/',
	REFERENCE02     : '/events/event0',
	VAL             : 'value',
	// FIREBASE_CONFIG : { // Setup your firebase configuration here:
	// 	'apiKey'            : "AIzaSyA0fvlxnG30K4dL91tvwyPdBVGYZrbaU6Y",
	// 	'authDomain'        : "counter-updater-dev.firebaseapp.com",
	// 	'databaseURL'       : "https://counter-updater-dev.firebaseio.com",
	// 	'projectId'         : "counter-updater-dev",
	// 	'storageBucket'     : "counter-updater-dev.appspot.com",
	// 	'messagingSenderId' : "960363066712"
	// }

});
