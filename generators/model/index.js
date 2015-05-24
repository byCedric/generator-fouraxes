'use strict';

var Subgenerator = require('../../helpers/subgenerator.js');

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
			desc: 'The model\'s (root) URL'
		});

		this.option('withCollection', {
			type: Boolean,
			desc: 'Create a collection, with the name of the model, too'
		});
	},

	/**
	 * Write the to-be-generated data.
	 *
	 * @return {void}
	 */
	writing: function () {
		this.copyTemplate('_model.js', 'app/scripts/models/'+ this.getFileFrom(this.name, '.js'));

		if (this.options.withCollection) {
			this.composeWith('fouraxes:collection', {
				args: [this.name],
				options: {
					url: this.options.url,
					model: this.name
				}
			});
		}
	}

});
