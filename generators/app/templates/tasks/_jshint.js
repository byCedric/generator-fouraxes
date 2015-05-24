module.exports = function (grunt) {
	grunt.config('jshint', {
		options: {
			// declare thge config file
			jshintrc: '.jshintrc',
			// this is only a help-tool, it should not stop any builds
			force: true
		},
		scripts: {
			// only scan the scripts, not templates or styles
			src: 'app/scripts/**/*.js'
		}
	});

	// load the task
	grunt.loadNpmTasks('grunt-contrib-jshint');
};
