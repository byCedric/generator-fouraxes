'use strict';

var path = require('path');
var assert = require('yeoman-generator').assert;
var helpers = require('yeoman-generator').test;
var generators = require('yeoman-generator').generators;
var sinon = require('sinon');

describe('Fouraxes:generators/model', function () {
	before(function (done) {
		this.spy = sinon.spy();

		var collectionGenerator = generators.Base.extend({
			exec: this.spy
		});

		helpers.run(path.join(__dirname, '../generators/model'))
			.withGenerators([
				[collectionGenerator, 'fouraxes:collection']
			])
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
		assert.file(['app/scripts/models/test/that.js']);
	});

	it('runs collection generator', function () {
		assert(this.spy.calledOnce);
	});
});
