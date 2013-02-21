/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    watch: {
      files: ['dist/**/*.html'],
      tasks: 'htmllint'
    },
    htmllint: {
        files: 'dist/**/*.html'
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

  grunt.registerTask('server', ['connect', 'watch']);
  grunt.registerTask('default', ['htmllint']);

};
