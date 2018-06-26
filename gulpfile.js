'use strict';
var gulp = require('gulp');
var less = require('gulp-less');
var plumber = require('gulp-plumber');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var cleanCSS = require('gulp-clean-css');
var safeImportant = require('postcss-safe-important');
var rename = require("gulp-rename");
var sourcemaps = require('gulp-sourcemaps');
var bump = require('gulp-bump');
var header = require('gulp-header');
var footer = require('gulp-footer');
var fs = require('fs');
var runSequence = require('run-sequence');
var open = require("open");

// For development
gulp.task('default', ['dev'], function() {
    gulp.watch(".less/*.less", ['dev']);
    open("Darkmode.dev.user.css", "chrome");
});

gulp.task('dev', function() {
    var pkg = JSON.parse(fs.readFileSync('./package.json'));
    var footerMsg = "\n}";
    var headerMsg = 
        `/* ==UserStyle==
        @name           dev Wiki darkmode
        @description    Developer stylesheet for the RuneScape Wiki darkmode
        @namespace      runescape.wikia.com
        @version        ${pkg.version}
        @homepageURL    ${pkg.homepage}
        @supportURL     ${pkg.bugs.url}
        @author         ${pkg.author}
        @license        ${pkg.license}
        ==/UserStyle== */
        @-moz-document domain('runescape.wikia.com') {
        `.replace(/^\s*/gm, "");

    return gulp.src('./.less/darkmode.less')
        .pipe(plumber())
        .pipe(sourcemaps.init())
        .pipe(less())
        .pipe(postcss([ autoprefixer() ]))
        .pipe(sourcemaps.write())
        .pipe(postcss([ safeImportant() ]))     // safeImportant doesn't support sourcemaps, so placed after sourcemap write
        .pipe(rename('Darkmode.dev.user.css'))
        .pipe(header(headerMsg))
        .pipe(footer(footerMsg))
        .pipe(gulp.dest('./'));
})

// Generate the final cleaned up css and minified files
gulp.task('clean', function() {
    var pkg = JSON.parse(fs.readFileSync('./package.json'));
    var d = new Date();
    var months = ['Jan.', 'Feb.', 'Mar.', 'Apr.', 'May', 'June', 'July', 'Aug.', 'Sept.', 'Oct.', 'Nov.', 'Dec.'];
    var footerMsg = "\n}";
    var headerMsg = 
        `/**
        * =================================
        *     Runescape wiki darkmode
        * =================================
        * Version:      ${pkg.version}
        * Release date: ${d.getDate()}-${months[d.getMonth()]}-${d.getFullYear()}
        * homepageURL:  ${pkg.homepage}
        * supportURL:   ${pkg.bugs.url}
        * author:       ${pkg.author}
        * License:      ${pkg.license}
        */
        @-moz-document domain('runescape.wikia.com') {
        `.replace(/^\s*/gm, "");

    return gulp.src('.less/darkmode.less')
        .pipe(plumber())
        .pipe(less())
        .pipe(postcss([ autoprefixer(), safeImportant()]))
        .pipe(cleanCSS({level: {2: {all: true}}, format: 'beautify'}))
        .pipe(header(headerMsg))
        .pipe(footer(footerMsg))
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