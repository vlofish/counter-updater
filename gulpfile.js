let gulp     = require('gulp');
let concat   = require('gulp-concat');
let imagemin = require('gulp-imagemin');
let cache    = require('gulp-cache');
let pump     = require('pump');
let uglify   = require('gulp-uglify');
let babel    = require('gulp-babel');
let htmlMin  = require('gulp-html-minify');
let browser  = require('browser-sync').create();

const TASK01 = 'move-css-folder';
const TASK02 = 'move-img-folder';
const TASK03 = 'move-views-folder';
const TASK04 = 'move-indx-file';
const TASK05 = 'create-uglify-ctrl-js';

const BASE_SRC   = './src/';
const BASE_WEB   = './webapp/';
const CSS_PATH   = 'css/';
const IMG_PATH   = 'img/';
const VIEWS_PATH = 'views/';

const CSS_SRC  = ['./src/css/lib/authenty/authenty.css', './src/css/lib/countdown/countdown.css', './src/css/src/style.css'];
const CTRL_SRC = ['./src/js/main.js', './src/js/directives.js', './src/js/const/constants.js', './src/js/ctrl/loaderCtrl.js', './src/js/ctrl/counterCtrl.js', './src/js/ctrl/counterDisplayerCtrl.js', './src/js/ctrl/helperCtrl/animationsAndDisplayabilityCtrl.js', './src/js/svc/webServicesSvc.js'];

gulp.task(TASK01, () => {
    pump([
        gulp.src(CSS_SRC),
        gulp.dest(BASE_WEB + CSS_PATH)
    ], (err) => {
        console.log('pipe for ' + TASK01 + ' finished.');
        logError(err);
    });
});

gulp.task(TASK02, () => {
    pump([
        gulp.src(BASE_SRC + IMG_PATH + '**'), 
        gulp.dest(BASE_WEB + IMG_PATH)
    ], (err) => {
        console.log('pipe for ' + TASK02 + ' finished.');
        logError(err);
    });
});

gulp.task(TASK03, () => {
    pump([
        gulp.src(BASE_SRC + VIEWS_PATH + '**'), 
        htmlMin(),
        gulp.dest(BASE_WEB + VIEWS_PATH)
    ], (err) => {
        console.log('pipe for ' + TASK03 + ' finished.');
        logError(err);
    });
});

gulp.task(TASK04, () => {
    pump([
        gulp.src(BASE_SRC + 'index.html'), 
        htmlMin(),
        gulp.dest(BASE_WEB)
    ], (err) => {
        console.log('pipe for ' + TASK04 + ' finished.');
        logError(err);
    });
});

gulp.task(TASK05, () => {
    pump([
        gulp.src(CTRL_SRC),
        concat('ctrl.min.js'),
        babel({presets: ['es2015']}),
        uglify(),
        gulp.dest(BASE_WEB + 'js/')
    ], (err) => {
        console.log('pipe for ' + TASK05 + ' finished.');
        logError(err);
    });
});

gulp.task('server', [TASK01, TASK02, TASK03, TASK04, TASK05], () => {
    browser.init({
        server: {baseDir: BASE_WEB}
    });

    gulp.watch(BASE_SRC + CSS_PATH + '**',   [TASK01]).on('change', browser.reload);
    gulp.watch(BASE_SRC + IMG_PATH + '**',   [TASK02]).on('change', browser.reload);
    gulp.watch(BASE_SRC + VIEWS_PATH + '**', [TASK03]).on('change', browser.reload);
    gulp.watch(BASE_SRC + 'index.html',      [TASK04]).on('change', browser.reload);
    gulp.watch(CTRL_SRC,                     [TASK05]).on('change', browser.reload);
});

function logError(err) {
    if (err !== undefined) {
        console.log('Error: ' + err);
    }
};