// Karma configuration
// Generated on Fri May 11 2018 17:31:29 GMT-0500 (Central Daylight Time (Mexico))

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    files: [
      "node_modules/angular/angular.min.js",
      "node_modules/angular-mocks/angular-mocks.js",
      "spec/lib/firebase.js",
      "node_modules/angularfire/dist/angularfire.min.js",
      "src/js/const/textConstants.js",
      "src/js/const/imgConstants.js",
      "src/js/const/dbConstants.js",
      "src/js/const/animationConstants.js",
      "src/js/const/domConstants.js",
      "src/js/main.js",
      "src/js/svc/webServicesSvc.js",
      "src/js/fcty/counterFcty.js",
      "src/js/ctrl/counterCtrl.js",
      "src/js/ctrl/helperCtrl/animationsAndDisplayabilityCtrl.js",
      "spec/ctrl/CounterCtrlSpec.js"
    ],


    // list of files / patterns to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  })
}
