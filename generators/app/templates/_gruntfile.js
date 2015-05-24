module.exports = function (grunt) {
	// load all grunt tasks within the ./tasks folder
	grunt.loadTasks('tasks');

	/**
	 * Validate will check all scripts for errors
	 */
	grunt.registerTask('validate', ['validate:scripts']);
	grunt.registerTask('validate:scripts', ['jshint:scripts', 'jscs:scripts']);

	/**
	 * Build will transpile the scripts to ES5 and styles to CSS.
	 */
	grunt.registerTask('build', ['build:scripts', 'build:styles']);
	grunt.registerTask('build:scripts', ['babel:scripts']);
	grunt.registerTask('build:styles', ['sass:styles']);

	/**
	 * Various grunt tasks
	 */
	grunt.registerTask('default', ['build', 'connect:development', 'watch']);
	grunt.registerTask('compile', ['build', 'copy:templates', 'requirejs:production', 'clean:templates', 'sass:production']);
	grunt.registerTask('serve', ['compile', 'connect:production']);
};
