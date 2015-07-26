var riot = require('riot');
var control = require('./riot.control');

var template = `
  <h3>{ opts.title }</h3>
  <h2> { msg } </h2>
  <ul>
    <li each={ items }>
      <label class={ completed: done }>
        <input type="checkbox" checked={ done } onclick={ parent.toggle }> { title }
      </label>
    </li>
  </ul>
  <form onsubmit={ add }>
    <input name="input" oninput={ edit }>
    <button disabled={ !text }>Add #{ items.length + 1 }</button>
  </form>
  <button disabled={ !items.length } onclick={ remove }>Remove</button>
`;
var todo = function (opts) {
  // logic.
  this.on('mount', () => { control.trigger('todo_init') });
  control.on('change', items => { this.items = items; this.update(); } );

  this.disabled = true;
  this.items = [];

  this.edit = e => { this.text = e.target.value; };
  this.add = e => {
    if (this.text) {
      control.trigger('todo_add', { title: this.text });
      this.text = this.input.value = '';
    }
  };
  this.toggle = e => {
    var item = e.item;
    item.done = !item.done;
    return true;
  };
  this.remove = e => { control.trigger('todo_remove'); };

  control.on('msg_sent', msg => {
    this.msg = msg.msg;
    this.update();
  });
}

riot.tag('todo', template, todo);
