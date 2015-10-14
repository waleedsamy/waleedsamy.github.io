"use strict";

module.exports = function(grunt) {

  // Load grunt tasks automatically
  require("load-grunt-tasks")(grunt);

  // Time how long tasks take. Can help when optimizing build times
  require("time-grunt")(grunt);

  grunt.initConfig({
    markdown: {
      all: {
        files: [{
          src: 'README.md',
          dest: 'index.html',
        }]
      }
    }
  });

  grunt.loadNpmTasks('grunt-markdown');

  grunt.registerTask("default", [
    "markdown"
  ]);
};
