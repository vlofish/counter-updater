var app = angular.module('counter', ['firebase']);

firebase.initializeApp({
    'apiKey'            : "AIzaSyA4gYi1bLQQc2qNEu0-V3TSeawVwrQA3Zk",
    'authDomain'        : "counter-updater-mw.firebaseapp.com",
    'databaseURL'       : "https://counter-updater-mw.firebaseio.com",
    'projectId'         : "counter-updater-mw",
    'storageBucket'     : "counter-updater-mw.appspot.com",
    'messagingSenderId' : "178314421035"
});

app.value('constants', constants);