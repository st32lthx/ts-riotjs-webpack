/*
/// <reference path="webpack.d.ts" />
*/
var riot = require('riot');
var control = require('./riot.control');
var todoStore = require('./todo.store');

control.addStore(todoStore);

require('./todo');
// require('./messenger');
// require('./widget');
require('./todoapp');

riot.mount('todoapp');
