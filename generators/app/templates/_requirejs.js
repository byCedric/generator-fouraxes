requirejs.config({
	baseUrl: './scripts',
	deps: ['main'],
	paths: {
		'jquery'     : '../../bower_components/jquery/dist/jquery',
		'underscore' : '../../bower_components/underscore/underscore',
		'backbone'   : '../../bower_components/backbone/backbone',
		'handlebars' : '../../bower_components/handlebars/handlebars',
		'text'       : '../../bower_components/text/text',
		'hbs'        : '../../bower_components/require-handlebars-plugin/hbs'
	}
});
