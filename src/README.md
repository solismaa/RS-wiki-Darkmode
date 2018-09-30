## Filetype
The final stylesheet [Darkmode.css](./../Darkmode.css) is generated with use of the Less CSS preprocessor.  
Taken from http://lesscss.org/ :

>Less (which stands for Leaner Style Sheets) is a backwards-compatible language extension for CSS. Because Less looks just like CSS, learning it is a breeze. Less only makes a few convenient additions to the CSS language, which is one of the reasons it can be learned so quickly.

For more information about less, head over to http://lesscss.org/

## Filetree
[Darkmode.css](../Darkmode.css) is the output of the Less preprocessor. Any changes made here will be overwritten later again when the result is compiled, so direct changes made to this file are pointless.  
[Darkmode.less](Darkmode.less) is the main file where everything starts, all other `.less` files are imports to `Darkmode.less`. The main file should contain all used main colors in a variable so they can easily be changed if necessary. If you add to any of the less files please add a comment describing what your css applies to.
[Mixins.less](Mixins.less) contain a bunch of usefull mixins to styling similar elements easier.

## Getting started
### First time setup
* If you don't have Node already installed, download it from here https://nodejs.org/en/download/  
* Install the `gulp` command with `npm install -g gulp-cli`. [More info about installing gulp](https://github.com/gulpjs/gulp/blob/v3.9.1/docs/getting-started.md)
* Install all dependencies in the root of the repository with `npm install`
* To make it easy to see what your edits change, it is recommended to install the [stylus extension](../README.md#installing) (not stylish as it does not support file watching).
* Run `gulp dev` once to generate the developer stylesheet `Darkmode.dev.user.css` and dragg this file into the browser. Stylus will recognise the userstyle and a window to install the style will open.

### After setup
Typing `gulp` in the console. A browser window will popup to install the developers userstyle and if the style is already installed there will be an option for `live reload` (requires stylus extension). Now everytime you save any of the .less files, Darkmode.dev.user.css will automaticly update and changes will be visible in the browser. You only have to run this command once until you terminate it with `ctrl + c`

When you are content with your changes, run `gulp clean` in the command line, this will generate the final `Darkmode.user.css`, `Darkmode.min.css` and `Darkmode.user.js`. After this commit your changes and create a pull request.
