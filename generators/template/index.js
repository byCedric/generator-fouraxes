'use strict';

var Subgenerator = require('../../helpers/subgenerator.js');
var _ = require('lodash');

module.exports = Subgenerator.extend({

	/**
	 * Write the to-be-generated data.
	 *
	 * @return {void}
	 */
	writing: function () {
		this.copyTemplate('_template.hbs', 'app/scripts/templates/'+ this.getFileFrom(this.name, '.hbs'));
	}

});
