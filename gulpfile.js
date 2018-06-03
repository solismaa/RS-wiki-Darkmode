'use strict';
var gulp = require('gulp');
var less = require('gulp-less');
var plumber = require('gulp-plumber');
var browserSync = require('browser-sync').create();
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var cleanCSS = require('gulp-clean-css');
var safeImportant = require('postcss-safe-important');
var rename = require("gulp-rename");
var sourcemaps = require('gulp-sourcemaps');
var bump = require('gulp-bump');
var header = require('gulp-header');
var fs = require('fs');
var runSequence = require('run-sequence');

// For development
gulp.task('dev', function() {
    return gulp.src('./.less/darkmode.less')
        .pipe(plumber())
        .pipe(sourcemaps.init())
        .pipe(less())
        .pipe(postcss([ autoprefixer(), safeImportant()]))
        .pipe(rename('Darkmode.dev.css'))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('./'))
        .pipe(browserSync.stream());
})

gulp.task('default', ['dev'], function() {
    browserSync.init({
        proxy: {
            target: "http://runescape.wikia.com",
            cookies: {stripDomain: false}
        },
        plugins: ['bs-rewrite-rules'],
        serveStatic: ["."],
        rewriteRules: [
            {
                match: "</body>",
                replace: '<link rel="stylesheet" type="text/css" href="/Darkmode.dev.css"></body>'
            },
            {
                match: "<head>",
                replace: "<head><script>document.cookie = 'euCookiePolicy=1'</script>"
            }
        ]
    });

    gulp.watch(".less/*.less", ['less']);
});   

// Generate the final cleaned up css and minified files
gulp.task('clean', function() {
    var obj = JSON.parse(fs.readFileSync('./package.json'));
    var d = new Date();
    var months = ['Jan.', 'Feb.', 'Mar.', 'Apr.', 'May', 'June', 'July', 'Aug.', 'Sept.', 'Oct.', 'Nov.', 'Dec.'];
    var headerMsg = 
    "/**\n" +
    " * =================================\n" +
    " *     Runescape wiki darkmode\n" +
    " * =================================\n" +
    " * Version: " + obj.version + "\n" +
    " * Release date: " + d.getDate() + "-" + months[d.getMonth()] + "-" + d.getFullYear() + "\n" +
    " * Website: https://github.com/CephHunter/RS-wiki-DarkMode\n" +
    " * License: CC-BY-SA-4.0\n" +
    " * \n" +
    " * If on stylish for firefox, add '@-moz-document domain('runescape.wikia.com') { }' around code\n" +
    " */\n";

    return gulp.src('.less/darkmode.less')
        .pipe(plumber())
        .pipe(less())
        .pipe(postcss([ autoprefixer(), safeImportant()]))
        .pipe(cleanCSS({level: {2: {all: true}}, format: 'beautify'}))
        .pipe(header(headerMsg))
        .pipe(gulp.dest('./'))
        .pipe(rename('Darkmode.min.css'))
        .pipe(cleanCSS({level: 0}))
        .pipe(gulp.dest('./'));

});

// Bump version number
gulp.task('_patch', function() {
    return gulp.src('package.json')
        .pipe(bump({type: 'patch'}))
        .pipe(gulp.dest('./'));
})

gulp.task('_minor', function() {
    return gulp.src('package.json')
        .pipe(bump({type: 'minor'}))
        .pipe(gulp.dest('./'));
})

gulp.task('_major', function() {
    return gulp.src('package.json')
        .pipe(bump({type: 'major'}))
        .pipe(gulp.dest('./'));
})

gulp.task('patch', function(callback) {
    runSequence('_patch', 'clean', callback);
})
gulp.task('minor', function(callback) {
    runSequence('_minor', 'clean', callback);
})
gulp.task('major', function(callback) {
    runSequence('_major', 'clean', callback);
})