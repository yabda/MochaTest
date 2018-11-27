module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: 'js/*.js',
        dest: 'dist/testMocha.min.js'
      },
    },
    watch: {
      files: ['js/*.js'],
      tasks: ['uglify'],
      options: {
        spawn: false
      }
    },
    mochaTest:{
      test: {
        options: {
          reporter: 'mocha-junit-reporter',
          captureFile: 'log.txt'
        },
        src: ['test/test.js']
      }
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-mocha-test');

  // Default task(s).
  grunt.registerTask('default', ['watch']);
  grunt.registerTask('mocha',['mochaTest','uglify']);

};