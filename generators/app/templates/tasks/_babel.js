module.exports = function (grunt) {
	grunt.config('babel', {
		options: {
			// transpile to AMD
			modules: 'amd'
		},
		// transpile all scripts
		scripts: {
			files: [{
				expand: true,
				cwd: 'app',
				src: 'scripts/**/*.js',
				dest: '.tmp'
			}]
		}
	});

	// load the task
	grunt.loadNpmTasks('grunt-babel');
};
