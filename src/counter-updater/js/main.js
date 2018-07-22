var app = angular.module('counterUpdater', ['firebase']);

firebase.initializeApp({ // Setup your firebase configuration here:
    'apiKey'            : "AIzaSyA0fvlxnG30K4dL91tvwyPdBVGYZrbaU6Y",
    'authDomain'        : "counter-updater-dev.firebaseapp.com",
    'databaseURL'       : "https://counter-updater-dev.firebaseio.com",
    'projectId'         : "counter-updater-dev",
    'storageBucket'     : "counter-updater-dev.appspot.com",
    'messagingSenderId' : "960363066712"
});

app.value('textConstants', textConstants);
app.value('imgConstants', imgConstants);
app.value('dbConstants', dbConstants);
app.value('animationConstants', animationConstants);
app.value('domConstants', domConstants);