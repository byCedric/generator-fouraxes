import * as $ from 'jquery';
import * as _ from 'underscore';
import * as Backbone from 'backbone';
import Config from 'config';
import RootView from 'views/root';

$(() => {
	// initialize the root view
	RootView.getInstance(document.body);

	// Initialize your routers here

	// Setup backbone's url driver "History".
	// Here you can set some basics about
	// the root and pushState use.
	// This also starts backbone and it's routes.
	Backbone.history.start(Config.backbone);
});
