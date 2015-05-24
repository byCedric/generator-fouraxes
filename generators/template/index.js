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

		this.option('withView', {
			type: Boolean,
			desc: 'Create a view, with the name of the template, too'
		});
	},

	/**
	 * Write the to-be-generated data.
	 *
	 * @return {void}
	 */
	writing: function () {
		this.copyTemplate('_template.hbs', 'app/scripts/templates/'+ this.getFileFrom(this.name, '.hbs'));

		if (this.options.withView) {
			var name = _.trimRight(this.getFileFrom(this.name, '.hbs'), '.hbs');

			this.composeWith('fouraxes:view', {
				args: [name],
				options: {
					template: name
				}
			});
		}
	}

});
