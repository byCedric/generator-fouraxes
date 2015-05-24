'use strict';

var Subgenerator = require('../../helpers/subgenerator.js');
var _ = require('lodash');

module.exports = Subgenerator.extend({

	/**
	 * Add some options to the generator for customizing the output.
	 *
	 * @constructor
	 * @return {void}
	 */
	constructor: function () {
		Subgenerator.apply(this, arguments);

		this.option('withTemplate', {
			type: Boolean,
			desc: 'Create a template, with the name of the view, too'
		});

		this.option('template', {
			type: String,
			desc: 'The view\'s template, ignored when creating template.'
		});

		this.option('className', {
			type: String,
			desc: 'The class of the view\'s root element.'
		});

		this.option('tagName', {
			type: String,
			desc: 'The tag of the view\'s root element.'
		});
	},

	/**
	 * When the generator has started, make sure we execute some code before writing.
	 *
	 * @return {void}
	 */
	initializing: function () {
		if (this.options.withTemplate) {
			this.options.template = this.getFileFrom(this.name);
			this.composeWith('fouraxes:template', { args: [this.options.template] });
		}
	},

	/**
	 * Write the to-be-generated data.
	 *
	 * @return {void}
	 */
	writing: function () {
		this.copyTemplate('_view.js', 'app/scripts/views/'+ this.getFileFrom(this.name, '.js'));
	}

});
