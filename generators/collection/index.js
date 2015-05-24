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
			desc: 'The collection\'s (root) URL'
		});

		this.option('model', {
			type: String,
			desc: 'The model to use for each collection\'s item'
		});
	},

	/**
	 * When the generator has started, make sure we execute some code before writing.
	 *
	 * @return {void}
	 */
	initializing: function () {
		// sanitize the model input, we also don't need an extension
		this.options.model = this.getFileFrom(this.options.model || '');
	},

	/**
	 * Write the to-be-generated data.
	 *
	 * @return {void}
	 */
	writing: function () {
		this.copyTemplate('_collection.js', 'app/scripts/collections/'+ this.getFileFrom(this.name, '.js'));
	}

});
