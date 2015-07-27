riot.tag ('todo-app',
  require('todoapp/todoapp.tpl.html'),
  require('todoapp/todoapp.style'),
  require('todoapp/todoapp.ctrl'));

riot.tag ('todo',
  require('todo/todo.tpl'),
  require('todo/todo.style'),
  require('todo/todo.ctrl'));

riot.tag ('messenger',
  require('messenger/messenger.tpl'),
  require('messenger/messenger.style'),
  require('messenger/messenger.ctrl'));