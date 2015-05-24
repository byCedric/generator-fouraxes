module.exports = function (grunt) {
	grunt.config('jscs', {
		options: {
			// declare the config file
			config: '.jscsrc',
			// we are using ECMAScript Harmony
			esnext: true,
			// this is only a help-tool, it should not stop any builds
			force: true
		},
		scripts: {
			// only scan the scripts, not templates or styles
			src: 'app/scripts/**/*.js'
		}
	});

	// load the task
	grunt.loadNpmTasks('grunt-jscs');
};
