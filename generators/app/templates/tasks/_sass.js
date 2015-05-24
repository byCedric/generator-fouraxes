module.exports = function (grunt) {
	grunt.config('sass', {
		// compile the sass files to a single css file
		styles: {
			files: [{
				expand: true,
				cwd: 'app',
				src: 'styles/**/*.{sass,scss}',
				dest: '.tmp',
				ext: '.css'
			}]
		},
		// compile sass, minified, to the build directory
		production: {
			options: {
				// minify everything
				style: 'compressed'
			},
			files: [{
				expand: true,
				cwd: 'app/styles',
				src: '**/*.{sass,scss}',
				dest: 'build',
				ext: '.css'
			}]
		}
	});

	// load the task
	grunt.loadNpmTasks('grunt-contrib-sass');
};
