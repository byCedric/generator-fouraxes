'use strict';

var path = require('path');
var assert = require('yeoman-generator').assert;
var helpers = require('yeoman-generator').test;
var generators = require('yeoman-generator').generators;
var sinon = require('sinon');

describe('Fouraxes:generators/collection', function () {
	before(function (done) {
		this.spy = sinon.spy();

		var modelGenerator = generators.Base.extend({
			exec: this.spy
		});

		helpers.run(path.join(__dirname, '../generators/collection'))
			.withGenerators([
				[modelGenerator, 'fouraxes:model']
			])
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
		assert.file(['app/scripts/collections/test.js']);
	});

	it('runs model generator', function () {
		assert(this.spy.calledOnce);
	});
});
