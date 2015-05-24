import View from 'view';<% if (template) { %>
import Template from 'hbs!templates/<%= template %>';<% } %>

export default View.extend({

	/**
	 * The name of the view.
	 *
	 * @type {string}
	 */
	name: '<%= path %><%= slug %>',

	/**
	 * The (handlebars) template to use.
	 *
	 * @type {handlebars}
	 */
	template: <%= template? 'Template': 'null' %>,<% if (tagName) { %>

	/**
	 * The tag of the view's root element.
	 *
	 * @type {string}
	 */
	tagName: '<%= tagName %>',<% } %><% if (className) { %>

	/**
	 * The class of the view's root element.
	 *
	 * @type {string}
	 */
	className: '<%= className %>',<% } %>

	/**
	 * The events of the view.
	 *
	 * @type {object}
	 */
	events: {

	},

	/**
	 * The view's constructor.
	 *
	 * @constructor
	 * @return {void}
	 */
	initialize () {

	}

});
