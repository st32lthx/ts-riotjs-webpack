'use strict';

var riot = require('riot');
/*
  To compile manually:
    1. webpack config:
    plugins: [
       new webpack.ProvidePlugin({
         riot: 'riot/riot+compiler.js'
       })
     ]
    2. in your index.js set `window.riot = riot`
    3. riot.compile(require('./todoapp/todoapp.tpl'));
    4. riot.compile(require('./todoapp/todoapp.tag'));
*/

riot.tag ('todo-app',
  require('./todoapp/todoapp.tpl'),
  require('./todoapp/todoapp.style'),
  require('./todoapp/todoapp.ctrl'));

riot.tag ('todo',
  require('./todo/todo.tpl'),
  require('./todo/todo.ctrl'));

riot.mount('todo-app');