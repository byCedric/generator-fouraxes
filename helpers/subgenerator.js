'use strict';

var yeoman = require('yeoman-generator');
var _ = require('lodash');

module.exports = yeoman.generators.NamedBase.extend({

	/**
	 * Only get the name of the full name + path + extension.
	 * Optionally, you can also provide the extension to trim.
	 *
	 * @param  {string} value
	 * @param  {string} extension (default: '.js')
	 * @return {string}
	 */
	getNameFrom: function (value, extension) {
		var name = _.last(value.split('/'));
			extension = extension || '.js';

		if (_.endsWith(name, extension)) {
			name = _.trimRight(name, extension);
		}

		return name;
	},

	/**
	 * Get the kebabCase equivalent of the .getName() value.
	 *
	 * @param  {string} value
	 * @param  {string} extension (default: null)
	 * @return {void}
	 */
	getSlugFrom: function (value, extension) {
		return _.kebabCase(this.getNameFrom(value, extension));
	},

	/**
	 * Only get the path of the full name + path + extension.
	 * This will append a trailing slash, IF a path was provided.
	 *
	 * @param  {string} value
	 * @return {string}
	 */
	getPathFrom: function (value) {
		var path = _.initial(value.split('/')).join('/');
			path = _.trimRight(path, '/');

		return _.isEmpty(path)? '': path +'/';
	},

	/**
	 * Get the fully qualified name + path + extension.
	 *
	 * @param  {string} value
	 * @param  {string} extension (default: '')
	 * @return {string}
	 */
	getFileFrom: function (value, extension) {
		extension = extension || '';

		return this.getPathFrom(value) + this.getSlugFrom(value, extension) + extension;
	},

	/**
	 * Get all properties it should use for templating.
	 * These options consists of:
	 *   - name, the result of .getName()
	 *   - slug, the result of .getSlug()
	 *   - path, the result of .getPath()
	 *   - file, the result of .getFile()
	 *   - any value within this.options (won't override above)
	 *
	 * @param  {string} extension (default: null)
	 * @return {object}
	 */
	getProperties: function (extension) {
		return _.extend({}, this.options, {
			name: this.getNameFrom(this.name, extension),
			slug: this.getSlugFrom(this.name, extension),
			path: this.getPathFrom(this.name),
			file: this.getFileFrom(this.name, extension)
		});
	},

	/**
	 * Copy a template, using .fs.copyTpl, from the template path to the destination path.
	 * Note, this will provide the .getProperties() result to the template if no properties was provided.
	 *
	 * @param  {string} from
	 * @param  {string} to
	 * @param  {object} properties (default: null)
	 * @return {void}
	 */
	copyTemplate: function (from, to, properties) {
		this.fs.copyTpl(
			this.templatePath(from),
			this.destinationPath(to),
			properties || this.getProperties()
		);
	}
});
