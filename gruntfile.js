module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        watch: {
            scripts: {
                files: ['./.less/*.less'],
                tasks: ['less'],
                options: {
                    spawn: false,
                },
            },
        },
        less: {
            development: {
                options: {
                    paths: ['./.less/'], 
                },
                files: {
                    'Darkmode.css': './.less/Darkmode.less'
                }
            }
        }
    });
  
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-less');

    grunt.registerTask('default', ['watch']);
  
  };