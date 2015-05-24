module.exports = function (grunt) {
	grunt.config('requirejs', {
		production: {
			options: {
				// use the requirejs.js config (mostly for libraries)
				mainConfigFile: 'requirejs.js',
				// change the base url to the ES5 scripts
				baseUrl: '.tmp/scripts',
				// use almond as production AMD driver
				name: '../../bower_components/almond/almond',
				// we want everything as small as possible
				optimize: 'uglify2',
				// wrap the whole in a single AMD module
				wrap: true,
				// wrap (outdated) non-AMD code
				wrapShim: true,
				// write everything to a single file
				out: 'build/main.js'
			}
		}
	});

	// load the task
	grunt.loadNpmTasks('grunt-contrib-requirejs');
};
