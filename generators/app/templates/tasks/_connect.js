module.exports = function (grunt) {
	grunt.config('connect', {
		options: {
			// let watch handle the livereloading
			livereload: false,
		},
		development: {
			options: {
				// use the temporary development directort as root
				base: [
					// make sure all base directories & files are available
					// bower_components & require.js are both used
					'./',
					// lets make the "transpiled" code available
					'.tmp',
					// if nothing was found look in the 'app' folder
					// index.html is used
					'app'
				],
				// we want the "transpiled" code to be the primary root directory
				directory: '.tmp'
			}
		},
		production: {
			options: {
				// use build directory as root
				base: 'build',
				// and keep the server alive
				keepalive: true
			}
		}
	});

	// load the task
	grunt.loadNpmTasks('grunt-contrib-connect');
};
