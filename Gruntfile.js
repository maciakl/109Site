/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    watch: {
      files: ['index.html'],
      tasks: 'htmllint'
    },
    htmllint: {
        files: 'index.html'
    },
    connect: {
        server: {
            options: {
                port: 3000,
                base: '.'
            }
        }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-html');
  grunt.registerTask('default', ['connect', 'watch']);

};
