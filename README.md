# Fouraxes generator
Battle the web with Backbone, Handlebars, RequireJS and Harmony!

## Grunt tasks
Fouraxes comes with some grunt tasks preinstalled.

### Default
The main development task is the `grunt default` task.
It will build the app once, start a development server and watches for any changes.
Also livereload will be enabled, handled by watch.

### Compile
When exporting the project to production environments, you probably want everything compiled into a single file.
This is done by the `grunt compile` task.
It exportes everything to a single file, **main.js** and **main.css**, within the _build_ folder.

### Serve
When you want to test the production version of the app, you can use `grunt serve`.
This will compile the project, as described in `grunt compile`, and start a production server.

### Build
The `grunt build` task will convert the Harmony code to good ol' JS5 code.
This is stored in the _.tmp_ folder.
Also, this command can be separated in `grunt build:scripts` and `grunt build:styles`.
> Note, the _app/templates_ folder is not copied into the _.tmp_ folder.

### Validate
When you only want to check your code for errors, using jshint and jscs, `grunt validate` is your task.
> Note, this will check the _app_ folder **NOT** the _.tmp_ folder.

## Subgenerators
The Fouraxes generator contains the following subgenerators.

```bash
yo fouraxes:model ...
yo fouraxes:view ...
yo fouraxes:collection ...
yo fouraxes:router ...
yo fouraxes:template ...
```

## License
MIT
