'use strict';
const gulp = require('gulp');
const sass = require('gulp-sass');
const plumber = require('gulp-plumber');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cleanCSS = require('gulp-clean-css');
const safeImportant = require('postcss-safe-important');
const rename = require("gulp-rename");
const sourcemaps = require('gulp-sourcemaps');
const bump = require('gulp-bump');
const header = require('gulp-header');
const footer = require('gulp-footer');
const fs = require('fs');
const open = require('opn');
const lec = require('gulp-line-ending-corrector');

/**
 * For development
 */
function watchFiles(cb) {
    gulp.watch("src/*.scss", dev);

    fs.access("./browser.js", (err) => {
        if (!err) {
            let browser = require("./browser");
            open("Darkmode.dev.user.css", {app: browser.browser()});
        } 
    })
    cb();
}

function dev() {
    const pkg = JSON.parse(fs.readFileSync('./package.json'));
    const footerMsg = "\n}";
    const headerMsg = 
        `/* ==UserStyle==
        @name           dev Wiki darkmode
        @description    Developer stylesheet for the RuneScape Wiki darkmode
        @namespace      https://github.com/CephHunter
        @version        ${pkg.version}
        @homepageURL    ${pkg.homepage}
        @supportURL     ${pkg.bugs.url}
        @author         ${pkg.author}
        @license        ${pkg.license}
        ==/UserStyle== */
        @-moz-document domain('runescape.wiki') {
        `.replace(/^\s*/gm, "");

    return gulp.src('./src/darkmode.scss')
        .pipe(plumber())
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(postcss([ autoprefixer(), safeImportant() ]))
        .pipe(sourcemaps.write())
        .pipe(rename('Darkmode.dev.user.css'))
        .pipe(header(headerMsg))
        .pipe(footer(footerMsg))
        .pipe(gulp.dest('./'));
}

/**
 * Generate the final cleaned up css and minified files
 */
function clean() {
    const pkg = JSON.parse(fs.readFileSync('./package.json'));

    const finalCSS = gulp.src('./src/darkmode.scss')
        .pipe(plumber())
        .pipe(sass().on('error', sass.logError))
        .pipe(postcss([ autoprefixer(), safeImportant()]))
        .pipe(cleanCSS({level: {2: {all: true}}, format: 'beautify'}))
        .pipe(lec({eolc: 'LF'}));

    //----- Final css file -----//
    const cssFooterMsg = "\n}";
    const cssHeaderMsg = 
        `/* ==UserStyle==
        @name           RunescapeWiki darkmode
        @description    ${pkg.description}
        @namespace      https://github.com/CephHunter
        @version        ${pkg.version}
        @homepageURL    ${pkg.homepage}
        @supportURL     ${pkg.bugs.url}
        @author         ${pkg.author}
        @license        ${pkg.license}
        ==/UserStyle== */
        @-moz-document domain('runescape.wiki') {
        `.replace(/^\s*/gm, "");

    finalCSS.pipe(rename('Darkmode.user.css'))
        .pipe(header(cssHeaderMsg))
        .pipe(footer(cssFooterMsg))
        .pipe(gulp.dest('./'))

    //----- Minified css file -----//
    finalCSS.pipe(rename('Darkmode.min.css'))
        .pipe(cleanCSS({level: 0}))
        .pipe(gulp.dest('./'));

    //----- User js file -----//
    const userjsHeaderMsg = 
        `// ==UserScript==
        // @name          Runescape wiki DarkMode
        // @namespace     https://github.com/CephHunter
        // @description	  ${pkg.description}
        // @author        ${pkg.author}
        // @homepage      ${pkg.homepage}
        // @supportURL    ${pkg.bugs.url}
        // @include       https://runescape.wiki/*
        // @run-at        document-start
        // @version       ${pkg.version}
        // ==/UserScript==
        (function() {var css = \`
        `.replace(/^\s*/gm, "");

    const userjsFooterMsg = 
        `\`;
        §if (typeof GM_addStyle != "undefined") {
        §    GM_addStyle(css);
        §} else if (typeof PRO_addStyle != "undefined") {
        §    PRO_addStyle(css);
        §} else if (typeof addStyle != "undefined") {
        §    addStyle(css);
        §} else {
        §    var node = document.createElement("style");
        §    node.type = "text/css";
        §    node.appendChild(document.createTextNode(css));
        §    var heads = document.getElementsByTagName("head");
        §    if (heads.length > 0) {
        §        heads[0].appendChild(node);
        §    } else {
        §        // no head yet, stick it whereever
        §        document.documentElement.appendChild(node);
        §    }
        §}
        §})();`.replace(/^\s*§/gm, "");

    return finalCSS.pipe(rename('Darkmode.user.js'))
        .pipe(header(userjsHeaderMsg))
        .pipe(footer(userjsFooterMsg))
        .pipe(gulp.dest('./'));
}

/**
 * Bump version number
 */
function _major() {
    return gulp.src('package.json')
        .pipe(bump({type: 'major'}))
        .pipe(gulp.dest('./'));
}

function _minor() {
    return gulp.src('package.json')
        .pipe(bump({type: 'minor'}))
        .pipe(gulp.dest('./'));
}

function _patch() {
    return gulp.src('package.json')
        .pipe(bump({type: 'patch'}))
        .pipe(gulp.dest('./'));
}

function _alpha() {
    return gulp.src('package.json')
        .pipe(bump({type:'prerelease', preid:'alpha'}))
        .pipe(gulp.dest('./'));
}

/**
 * Export gulp functions
 */
module.exports = {
    default: gulp.series(dev, watchFiles),
    dev: dev,
    clean: clean,
    major: gulp.series(_major, gulp.parallel(dev, clean)),
    minor: gulp.series(_minor, gulp.parallel(dev, clean)),
    patch: gulp.series(_patch, gulp.parallel(dev, clean)),
    alpha: gulp.series(_alpha, gulp.parallel(dev, clean))
}