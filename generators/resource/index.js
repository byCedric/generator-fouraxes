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

		this.option('url', {
			type: String,
			desc: 'The resource\'s (root) URL'
		});
	},

	/**
	 * Write the to-be-generated data.
	 *
	 * @return {void}
	 */
	writing: function () {
		var name = this.getFileFrom(this.name);
		var model = { args: [name], options: {} };
		var collection = {
			args: [name],
			options: {
				model: name
			}
		};

		if (!_.isEmpty(this.options.url)) {
			model.options.url = this.options.url;
			collection.options.url = this.options.url;
		}

		this.composeWith('fouraxes:model', model);
		this.composeWith('fouraxes:collection', collection);
	}
});
