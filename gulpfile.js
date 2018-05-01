var gulp = require('gulp');
var less = require('gulp-less');
var plumber = require('gulp-plumber');
var browserSync = require('browser-sync').create();
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var cleanCSS = require('gulp-clean-css');
var sessionID = [0];
try {
    sessionID = require("./sessionID.json");
} catch (error) {
    console.log("No sessionID found.");
}

gulp.task('less', function() {
    return gulp.src('./.less/darkmode.less')
        .pipe(plumber())
        .pipe(less())
        .pipe(postcss([ autoprefixer() ]))
        .pipe(gulp.dest('./'))
        .pipe(cleanCSS({level: 1}))
        .pipe(gulp.dest('minified'))
        .pipe(browserSync.stream());
});

gulp.task('serve', ['less'], function() {
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
                replace: '<link rel="stylesheet" type="text/css" href="/Darkmode.css"></body>'
            },
            {
                match: "<head>",
                replace: "<head>" + Cookies()
            }
        ]
    });

    gulp.watch(".less/*.less", ['less']);
});

gulp.task('default', ['serve']);

function Cookies() {
    var res = '<script>'
            + 'document.cookie = "access_token=' + sessionID[0] + '";'
            + 'document.cookie = "euCookiePolicy=1"'
            + '</script>';
    return res;
}