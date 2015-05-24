'use strict';

var Subgenerator = require('../../helpers/subgenerator.js');

module.exports = Subgenerator.extend({

	/**
	 * Write the to-be-generated data.
	 *
	 * @return {void}
	 */
	writing: function () {
		this.copyTemplate('_router.js', 'app/scripts/routers/'+ this.getFileFrom(this.name, '.js'));
	}

});
