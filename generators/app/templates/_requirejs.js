requirejs.config({
	baseUrl: './scripts',
	deps: ['main'],
	paths: {
		'jquery'     : '../../bower_components/jquery/dist/jquery',
		'underscore' : '../../bower_components/underscore/underscore',
		'backbone'   : '../../bower_components/backbone/backbone',
		'handlebars' : '../../bower_components/handlebars/handlebars',
		'text'       : '../../bower_components/text/text',
		// do not load requirejs-hbs's old handlebar-compiler dependency...
		'handlebars-compiler': 'empty:'
	},
	packages: [
		{
			name: 'hbs',
			location: '../../bower_components/requirejs-hbs',
			main: 'hbs'
		}
	]
});
