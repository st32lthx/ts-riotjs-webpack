var control = require('riot.control');
var todoStore = require('components/todo/todo.store');

control.addStore(todoStore);
riot.tag ('feat-x',
  require('components/entry/feat-x.tpl.html'),
  require('components/entry/feat-x.style'),
  require('components/entry/feat-x.ctrl'));
riot.mount('feat-x');