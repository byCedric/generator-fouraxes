'use strict';

var path = require('path');
var assert = require('yeoman-generator').assert;
var helpers = require('yeoman-generator').test;
var generators = require('yeoman-generator').generators;
var sinon = require('sinon');

describe('Fouraxes:generators/view', function () {
	before(function (done) {
		this.spy = sinon.spy();

		var templateGenerator = generators.Base.extend({
			exec: this.spy
		});

		helpers.run(path.join(__dirname, '../generators/view'))
			.withGenerators([
				[templateGenerator, 'fouraxes:template']
			])
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
		assert.file(['app/scripts/views/test/something.js']);
	});

	it('runs template generator', function () {
		assert(this.spy.calledOnce);
	});
});
