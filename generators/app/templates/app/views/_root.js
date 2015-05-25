import View from 'view';
import Template from 'hbs!templates/root';

var RootView = View.extend({

	/**
	 * The name of the view.
	 *
	 * @type {string}
	 */
	name: 'root',

	/**
	 * The (handlebars) template to use.
	 *
	 * @type {handlebars}
	 */
	template: Template,

	/**
	 * The class of the view's root element.
	 *
	 * @type {string}
	 */
	className: 'root',

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

// the singleton holder
var instance;

/**
 * Get the singleton instance of this view.
 *
 * @param  {dom|string} target
 * @return {view}
 */
RootView.getInstance = (target) => {
	if (!instance) {
		instance = new RootView()
		instance.appendTo(target || document.body);
	}

	return instance;
};

export default RootView;
