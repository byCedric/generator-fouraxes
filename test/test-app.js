'use strict';

var path = require('path');
var assert = require('yeoman-generator').assert;
var helpers = require('yeoman-generator').test;
var os = require('os');

describe('fouraxes:app', function () {
	before(function (done) {
		helpers.run(path.join(__dirname, '../generators/app'))
			.withOptions({ skipInstall: true })
			.withPrompts({ appName: 'Test App', useGitkeeps: true })
			.on('end', done);
	});

	it('creates project files', function () {
		assert.file([
			'.editorconfig',
			'.jshintrc',
			'.jscsrc',
			'.bowerrc',
			'.gitignore',
			'bower.json',
			'package.json',
			'Gruntfile.js',
			'requirejs.js'
		]);
	});

	it('creates grunt files', function () {
		assert.file([
			'tasks/babel.js',
			'tasks/clean.js',
			'tasks/connect.js',
			'tasks/copy.js',
			'tasks/jscs.js',
			'tasks/jshint.js',
			'tasks/requirejs.js',
			'tasks/sass.js',
			'tasks/watch.js'
		]);
	});

	it('creates app files', function () {
		assert.file([
			'build/index.html',
			'app/index.html',
			'app/styles/main.scss',
			'app/scripts/main.js',
			'app/scripts/model.js',
			'app/scripts/view.js',
			'app/scripts/collection.js',
			'app/scripts/router.js',
			'app/scripts/config.js',
			'app/scripts/views/root.js',
			'app/scripts/templates/root.hbs'
		]);
	});

	it('creates gitkeep files', function () {
		assert.file([
			'app/scripts/models/.gitkeep',
			'app/scripts/views/.gitkeep',
			'app/scripts/collections/.gitkeep',
			'app/scripts/routers/.gitkeep',
			'app/scripts/templates/.gitkeep'
		]);
	});
});
