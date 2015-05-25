'use strict';

var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');
var _ = require('lodash');

var makeFiles = function (files, that) {
	_.each(files, function (targets, source) {
		var sourcePath = that.templatePath(source);
		var targetPaths;

		targets = _.isArray(targets)? targets: [targets];
		targetPaths = _.map(targets, function (target) {
			return that.destinationPath(target);
		});

		_.each(targetPaths, function (path) {
			that.fs.copyTpl(sourcePath, path, that.props);
		});
	});
};

module.exports = yeoman.generators.Base.extend({

	prompting: function () {
		var done = this.async();

		// Have Yeoman greet the user.
		this.log(yosay(
			'Welcome to the rad '+ chalk.red('Fouraxes') +' generator!'
		));

		var prompts = [{
			name: 'appName',
			message: 'What is the name of your awesome app?'
		}, {
			type: 'confirm',
			name: 'useGitkeeps',
			message: 'Would you like me to add .gitkeep files to the folders?',
			default: false
		}];

		this.prompt(prompts, function (props) {
			// To access props later use this.props.someOption;
			this.props = props;
			// add some extra values
			this.props.appSlug = _.kebabCase(this.props.appName);
			// tell yeoman we are done
			done();
		}.bind(this));
	},

	writing: {
		project: function () {
			makeFiles({
				'editorconfig': '.editorconfig',
				'jshintrc': '.jshintrc',
				'jscsrc': '.jscsrc',
				'bowerrc': '.bowerrc',
				'gitignore': '.gitignore',
				'_package.json': 'package.json',
				'_bower.json': 'bower.json',
				'_gruntfile.js': 'Gruntfile.js',
				'_requirejs.js': 'requirejs.js'
			}, this);
		},

		grunt: function () {
			makeFiles({
				'tasks/_babel.js': 'tasks/babel.js',
				'tasks/_clean.js': 'tasks/clean.js',
				'tasks/_connect.js': 'tasks/connect.js',
				'tasks/_copy.js': 'tasks/copy.js',
				'tasks/_jscs.js': 'tasks/jscs.js',
				'tasks/_jshint.js': 'tasks/jshint.js',
				'tasks/_requirejs.js': 'tasks/requirejs.js',
				'tasks/_sass.js': 'tasks/sass.js',
				'tasks/_watch.js': 'tasks/watch.js'
			}, this);
		},

		app: function () {
			makeFiles({
				'build/_index.html': 'build/index.html',
				'app/_index.html': 'app/index.html',
				'app/_main.scss': 'app/styles/main.scss',
				'app/_main.js': 'app/scripts/main.js',
				'app/_model.js': 'app/scripts/model.js',
				'app/_view.js': 'app/scripts/view.js',
				'app/_collection.js': 'app/scripts/collection.js',
				'app/_router.js': 'app/scripts/router.js',
				'app/_config.js': 'app/scripts/config.js',
				'app/views/_root.js': 'app/scripts/views/root.js',
				'app/templates/_root.hbs': 'app/scripts/templates/root.hbs'
			}, this);
		},

		gitkeeps: function () {
			if (!this.props.useGitkeeps) {
				return this.log(yosay('Skipping .gitkeep files...'));
			}

			makeFiles({
				'gitkeep': [
					'app/scripts/models/.gitkeep',
					'app/scripts/views/.gitkeep',
					'app/scripts/collections/.gitkeep',
					'app/scripts/routers/.gitkeep',
					'app/scripts/templates/.gitkeep'
				]
			}, this);
		}
	},

	install: function () {
		this.installDependencies();
	}

});
