module.exports = function (grunt) {
	grunt.config('clean', {
		// clean the copied templates, for compiling.
		templates: ['.tmp/scripts/templates']
	});

	// load the task
	grunt.loadNpmTasks('grunt-contrib-clean');
};
