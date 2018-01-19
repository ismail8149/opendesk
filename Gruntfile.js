'use strict';
module.exports = function (grunt) {

  // Load grunt tasks automatically
  require('load-grunt-tasks')(grunt);
  grunt.initConfig({
	  connect: {
		  server: {
			options: {
			  hostname: 'localhost',
			  port: 9009,
			  keepalive: true
			}
		  }
		}
  });
  
  grunt.registerTask('serve', ['connect']);
};