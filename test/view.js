'use strict';

var path = require('path');
var assert = require('yeoman-generator').assert;
var helpers = require('yeoman-generator').test;

describe('Fouraxes:generators/view', function () {
	before(function (done) {
		helpers.run(path.join(__dirname, '../generators/view'))
			.withArguments('test/something')
			.withOptions({
				skipInstall: true,
				force: true,
				withTemplate: true,
				className: 'c-test',
				tagName: 'nav'
			})
			.on('end', done);
	});

	it('creates files', function () {
		assert.file([
			'app/scripts/views/test/something.js',
			'app/scripts/templates/test/something.hbs'
		]);
	});
});
