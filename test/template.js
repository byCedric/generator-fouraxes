'use strict';

var path = require('path');
var assert = require('yeoman-generator').assert;
var helpers = require('yeoman-generator').test;
var generators = require('yeoman-generator').generators;
var sinon = require('sinon');

describe('Fouraxes:generators/template', function () {
	before(function (done) {
		this.spy = sinon.spy();

		var viewGenerator = generators.Base.extend({
			exec: this.spy
		});

		helpers.run(path.join(__dirname, '../generators/template'))
			.withGenerators([
				[viewGenerator, 'fouraxes:view']
			])
			.withArguments('test')
			.withOptions({
				skipInstall: true,
				force: true,
				withView: true
			})
			.on('end', done);
	});

	it('creates files', function () {
		assert.file(['app/scripts/templates/test.hbs']);
	});

	it('runs view generator', function () {
		assert(this.spy.calledOnce);
	});
});
