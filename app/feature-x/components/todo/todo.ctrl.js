var control = require('riot.control');
export default function (opts) {
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

