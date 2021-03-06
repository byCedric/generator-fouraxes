'use strict';

var path = require('path');
var assert = require('yeoman-generator').assert;
var helpers = require('yeoman-generator').test;

describe('Fouraxes:generators/router', function () {
	before(function (done) {
		helpers.run(path.join(__dirname, '../generators/router'))
			.withArguments('test')
			.withOptions({ skipInstall: true, force: true })
			.on('end', done);
	});

	it('creates files', function () {
		assert.file([
			'app/scripts/routers/test.js'
		]);
	});
});
