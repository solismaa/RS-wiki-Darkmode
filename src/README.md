## Filetype
The final stylesheet [Darkmode.user.css](../Darkmode.user.css) is generated with use of the sass CSS preprocessor. For more information on the sass language head over to https://sass-lang.com/

## Filetree
[Darkmode.user.css](../Darkmode.user.css) is the output of the combined files found in the src folder. Any changes made here will be overwritten later again when the result is recompiled, so don't edit this file directly.
[src/Darkmode.scss](Darkmode.scss) is the main file where everything starts, all other `.scss` files are imported here. The main file should contain all used main colors in a variable so they can easily be changed if necessary. If you add to any of the files please add a comment describing what your css applies to.
[src/Mixins.scss](Mixins.scss) contains a bunch of usefull mixins to styling similar elements easily.

## Getting started
### First time setup
* If you don't have Node already installed, download it from here https://nodejs.org/en/download/  
* Install the `gulp` command with `npm install -g gulp-cli`.
* Install all dependencies in the root of the repository with `npm install`
* Create a file `browser.js` with content `exports.browser = () => "chrome";` and replace chrome with the name of the browser of your choice, this is the name you use to open your browser with the command line.
* Install the stylus extension in your browser, links for different browsers can be found [here](../readme.md#installing)
* Run `gulp` in the command line, a browser window will open with the developers stylesheet. If stylus does not recognise the style you need to allow stylus to acces local files first, if stylus does recognise the file click install style.

### After setup
Typing `gulp` in the command line. A browser window will popup and there will be an option for `live reload`. Now everytime you save any of the .scss files, Darkmode.dev.user.css will automaticly update and changes will be visible in the browser. You only have to run this command once until you terminate it with `ctrl + c`

When you are content with your changes, run `gulp clean` in the command line, this will generate the final `Darkmode.user.css`, `Darkmode.min.css` and `Darkmode.user.js`, then commit your changes and create a pull request.