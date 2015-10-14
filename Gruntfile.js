"use strict";

module.exports = function(grunt) {

  // Load grunt tasks automatically
  require("load-grunt-tasks")(grunt);

  // Time how long tasks take. Can help when optimizing build times
  require("time-grunt")(grunt);

  grunt.initConfig({
    md2html: {
      options: {
        layout: "template.jst",
        templateData: {
          title: 'Waleed Samy',
          description: 'Waleed Samy Resumé',
          github_user: 'waleedsamy',
          email: 'waleed_samy@ymail.com',
          sec_email: 'waleedsamy634@gmail.com',
          github_link: 'https://github.com/waleedsamy',
          linkedin_link: 'http://eg.linkedin.com/in/waleedsamy/',
          skype_id: 'waleedsamy907',
          address: 'Cairo, Egypt'
        }
      },
      cv: {
        src: ['index.md'],
        dest: 'index.html'
      },
    }
  });

  grunt.loadNpmTasks('grunt-md2html');


  grunt.registerTask("default", [
    "md2html:cv"
  ]);
};
