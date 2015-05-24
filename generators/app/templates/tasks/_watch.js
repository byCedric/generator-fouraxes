module.exports = function (grunt) {
	grunt.config('watch', {
		options: {
			// enable livereloading
			livereload: true
		},
		// keep an eye out on the scripts
		scripts: {
			files: 'app/scripts/**/*.js',
			tasks: ['validate:scripts', 'build:scripts']
		},
		// keep an eye out on the sass styles
		styles: {
			files: 'app/styles/**/*.{sass,scss}',
			tasks: ['build:styles']
		}
	});

	// load the task
	grunt.loadNpmTasks('grunt-contrib-watch');
};
