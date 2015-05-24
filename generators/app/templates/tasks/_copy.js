module.exports = function (grunt) {
	grunt.config('copy', {
		// copy the tempaltes, for compiling.
		templates: {
			expand: true,
			cwd: 'app/scripts/templates',
			src: '**/*.hbs',
			dest: '.tmp/scripts/templates'
		}
	});

	// load the task
	grunt.loadNpmTasks('grunt-contrib-copy');
};
