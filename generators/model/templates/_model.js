import Model from 'model';

export default Model.extend({

	/**
	 * The name of the model.
	 *
	 * @type {string}
	 */
	name: '<%= path %><%= slug %>',

	/**
	 * The URL of the resource.
	 *
	 * @type {string}
	 */
	urlRoot: '<%= url %>',

	/**
	 * The model's attributes.
	 *
	 * @type {object}
	 */
	defaults: {

	},

	/**
	 * The model's constructor.
	 *
	 * @constructor
	 * @return {void}
	 */
	initialize () {

	}

});
