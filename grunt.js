/*jslint node:true*/
module.exports = function (grunt) {
	'use strict';

	// Project configuration.
	grunt.initConfig({
		watch: {
			files: '<config:jslint.files>',
			tasks: 'default'
		},
		jslint: {
			files: [ // some example files
				'grunt.js', 'tasks/**/*.js'
			]
		},
		jslint_options: { // some example JSLint directives
			browser: true,
			vars: false
		}
	});

	// Load local tasks.
	grunt.loadTasks('tasks');

	// Default task.
	grunt.registerTask('default', 'jslint');

};