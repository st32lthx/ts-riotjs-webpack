'use strict';
window.riot = riot;

var control = require('riot.control');
var todoStore = require('todo/todo.store');

control.addStore(todoStore);
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
  require('todoapp/todoapp.tpl.html'),
  require('todoapp/todoapp.style'),
  require('todoapp/todoapp.ctrl'));


riot.mount('todo-app');