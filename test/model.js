'use strict';

var path = require('path');
var assert = require('yeoman-generator').assert;
var helpers = require('yeoman-generator').test;

describe('Fouraxes:generators/model', function () {
	before(function (done) {
		helpers.run(path.join(__dirname, '../generators/model'))
			.withArguments('test/that')
			.withOptions({
				skipInstall: true,
				force: true,
				withCollection: true,
				url: 'http://api.test.com/v1/tests'
			})
			.on('end', done);
	});

	it('creates files', function () {
		assert.file([
			'app/scripts/models/test/that.js',
			'app/scripts/collections/test/that.js'
		]);
	});
});
