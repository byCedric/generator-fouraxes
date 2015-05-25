# Fouraxes generator
Battle the web with Backbone, Handlebars, RequireJS and Harmony!


## Grunt tasks
Fouraxes comes with some grunt tasks preinstalled.
These can be executed using `grunt-cli`, by typing `grunt _task_`.


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

> Note, each subgenerator requires a name. This name **MAY** be relative.


### Model
The model generator will create a model, within _app/scripts/models_.

option             | type      | description
---                | ---       | ---
**url**            | _String_  | The model's (root) URL.
**withCollection** | _Boolean_ | Create a collection, with the name of the model, too.


### View
The view generator will create a view, within _app/scripts/views_.

option           | type      | description
---              | ---       | ---
**className**    | _String_  | The class of the view's root element.
**tagName**      | _String_  | The tag of the view's root element.
**template**     | _String_  | The view's template, relative to the _app/scripts/templates_ folder.
**withTemplate** | _Boolean_ | Create a template, with the name of the view, too.

> Note, the _template_ option is ignored when using _withTemplate_.


### Collection
The collection generator will create a collection, within _app/scripts/collections_.

option        | type      | description
---           | ---       | ---
**url**       | _String_  | The collection's (root) URL.
**model**     | _String_  | The collection's model, relative to the _app/scripts/models_ folder.
**withModel** | _Boolean_ | Create a model, with the name of the collection, too.

> Note, the _model_ option is ignored when using _withModel_.


### Template
The template generator will create a template, within _app/scripts/templates_.

option       | type      | description
---          | ---       | ---
**withView** | _Boolean_ | Create a view, with the name of the template, too.


### Router
The router generator will create a router, within _app/scripts/routers_.


## License
The MIT License (MIT)

Copyright (c) 2015 Cedric van Putten

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
