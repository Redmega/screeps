var creds = require('./credentials');


module.exports = function(grunt) {

  require("load-grunt-tasks")(grunt);

  grunt.initConfig({
      screeps: {
          options: {
              email: creds.email,
              password: creds.password,
              branch: 'default',
              ptr: false
          },
          dist: {
              src: ['dist/*.js']
          }
      },
      babel: {
        options: {
          sourceMap: false
        },
        dist: {
          files: [ {
                expand: true,
                cwd: 'src/',
                src: ['*.js'],
                dest: 'dist/'
            }]
        }
      }
  });

  grunt.loadNpmTasks('grunt-screeps');

  grunt.registerTask("default", ["babel"]);

}
