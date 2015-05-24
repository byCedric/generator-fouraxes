'use strict';

var path = require('path');
var assert = require('yeoman-generator').assert;
var helpers = require('yeoman-generator').test;

describe('Fouraxes:generators/template', function () {
	before(function (done) {
		helpers.run(path.join(__dirname, '../generators/template'))
			.withArguments('test')
			.withOptions({
				skipInstall: true,
				force: true,
				withView: true
			})
			.on('end', done);
	});

	it('creates files', function () {
		assert.file([
			'app/scripts/templates/test.hbs',
			'app/scripts/views/test.js'
		]);
	});
});
