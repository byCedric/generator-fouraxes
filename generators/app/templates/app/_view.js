import { View } from 'backbone';
import * as _ from 'underscore';

export default View.extend({

	/**
	 * Render the view, using the provided or view template.
	 *
	 * @param  {handlebars} template
	 * @return {view}
	 */
	render (template) {
		let context = {};
		template = template || this.template;

		this.$el.html(template(context));
		return this;
	},

	/**
	 * When a view is used a static/containter view, it isn't rendered automatically.
	 * The .appendTo() method makes sure it's rendered and added to the target element.
	 *
	 * @param  {dom|string} target
	 * @return {void}
	 */
	appendTo (target) {
		this.render();
		this.$el.appendTo(target || document.body);
	},

	/**
	 * When backbone sets the attributes on the view's element, make sure we add some too.
	 *
	 * @param  {object} attributes
	 * @return {object}
	 */
	_setAttributes (attributes) {
		attributes = _.extend(attributes, {
			'data-view-name': this.name,
			'data-view-cid': this.cid
		});

		return View.prototype._setAttributes.call(this, attributes);
	}

});
