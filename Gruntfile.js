/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
    grunt.initConfig({
        validation: {
            files: "dist/~maciakl/**/!(google*).html"
        },
    shell:
    {
        nanoc: {
            options: { stdout: true },
            command: 'nanoc'
        }
    },
    watch: {
        files: "content/**",
    tasks: ['shell', 'validation'],
    }
    });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-html-validation');
  grunt.loadNpmTasks('grunt-shell');
  grunt.registerTask('default', 'validation');

};
