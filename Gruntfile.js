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
        connect: {
            seever: {
                options: {
                    port: 3000,
                    base: 'dist'
                }
            }
        },
        copy: {
            main: {
                files: [
                    { expand: true, src: "components/bootstrap/css/*.min.css", dest: "content" },
                    { expand: true, src: "components/bootstrap/img/*", dest: "content" },
                    { expand: true, src: "components/bootstrap/js/*.min.js", dest: "content" },
                    { expand: true, src: "components/jquery/*.min.js", dest: "content" }
                ]
            }
        },
        watch: {
            files: ["content/**",
                    "layouts/**",
                    "lib/**",
                    "contents/**",
                    "config.yaml",
                    "nanoc.yaml",
                    "Rules"
            ],
            tasks: ['copy', 'shell', 'validation'],
        },
    });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-html-validation');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-shell');

  grunt.registerTask('build', ['copy', 'shell', 'validation']);
  grunt.registerTask('server', ['connect', 'watch']);
  grunt.registerTask('default', 'build');

};
