var control = require('riot.control');
export default function (opts) {
  this.count = 0;
  control.on('change', items => {
    this.count = items.length;
    this.update();
  });
  control.on('todo_add', item => {
    this.count +=1 ;
    this.thing = item.title;
    this.update();
  });
  control.on('todo_remove', () => {
    this.count -= 1;
    this.update();
  });

  this.send = (e) => {
    var msg = this.message.value;
    control.trigger('msg_sent', {
      msg: this.message.value
    });
    this.message.value = '';
  };
}
