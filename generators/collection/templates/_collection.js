import Collection from 'collection';<% if (model) { %>
import Model from 'models/<%= model %>';<% } %>

export default Collection.extend({

	/**
	 * The name of the collection.
	 *
	 * @type {string}
	 */
	name: '<%= path %><%= slug %>',

	/**
	 * The URL of the collection.
	 *
	 * @type {string}
	 */
	url: '<%= url %>',

	/**
	 * The model to use for each collection's item.
	 *
	 * @type {model<%= model? 's/'+ model: '' %>}
	 */
	model: <%= model? 'Model': 'null' %>,

	/**
	 * The collection's constructor.
	 *
	 * @constructor
	 * @return {void}
	 */
	initialize () {

	}

});
