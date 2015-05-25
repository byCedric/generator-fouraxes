export default {

	/**
	 * These backbone settings will be passed to Backbone.history.start.
	 * Append or modify any setting as you prefer.
	 *
	 * @see  http://backbonejs.org/#History-start
	 * @type {object}
	 */
	backbone: {

		/**
		 * To indicate that you'd like to use HTML5 pushState support in your
		 * application, use Backbone.history.start({ pushState: true }).
		 * If you'd like to use pushState, but have browsers that don't support
		 * it natively use full page refreshes instead, you can add
		 * { hashChange: false } to the options.
		 *
		 * @type {boolean}
		 */
		pushState: false,

		/**
		 * If your application is not being served from the root url / of your
		 * domain, be sure to tell History where the root really is,
		 * as an option: Backbone.history.start({ root: "/public/search/" }).
		 *
		 * @type {string}
		 */
		root: '/'
	}

};
