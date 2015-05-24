'use strict';

var path = require('path');
var assert = require('yeoman-generator').assert;
var helpers = require('yeoman-generator').test;

describe('Fouraxes:generators/collection', function () {
	before(function (done) {
		helpers.run(path.join(__dirname, '../generators/collection'))
			.withArguments('test')
			.withOptions({
				skipInstall: true,
				force: true,
				withModel: true,
				url: 'http://api.test.com/v1/tests'
			})
			.on('end', done);
	});

	it('creates files', function () {
		assert.file([
			'app/scripts/collections/test.js',
			'app/scripts/models/test.js'
		]);
	});
});
