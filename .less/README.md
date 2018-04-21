## Filetype
The final stylesheet [Darkmode.css](./../Darkmode.css) is generated with use of the Less CSS preprocessor.  
Taken from http://lesscss.org/ :

>Less (which stands for Leaner Style Sheets) is a backwards-compatible language extension for CSS. Because Less looks just like CSS, learning it is a breeze. Less only makes a few convenient additions to the CSS language, which is one of the reasons it can be learned so quickly.

For more information about less, head over to http://lesscss.org/

## Filetree
[Darkmode.css](Darkmode.css) is the output of the Less preprocessor. Any changes made here will be overwritten later again when the result is compiled, so direct changes made to this file are futile.  
[Darkmode.less](Darkmode.less) is the main file where everything starts, all other `.less` files are imports to `Darkmode.less`. The main file should contain all used main colors in a variable so they can be easily changed if necessary. If you add to any of the less files please add a comment describing what your css applies to.  
[Mixins.less](Mixins.less) and [Standard wikia mixins.less](Standard%20wikia%20mixins.less) contain a bunch of usefull  mixins to make cross browse support or styling similar elements easier.

## Getting started
* If you don't have Node already installed, download it from here https://nodejs.org/en/download/  
* Install the `gulp` command with `npm install -g gulp-cli`. [More info about installing gulp](https://github.com/gulpjs/gulp/blob/v3.9.1/docs/getting-started.md)
* Install all dependencies in the root of the repository with `npm install`
* Now typing `gulp` in the console. Now everytime you save any of the .less files, Darkmode.css will automaticly update and changes will be visible in the browser. You only have to run this command once until you terminate it with `ctrl + c`