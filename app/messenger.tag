var riot = require('riot');
import {RiotControl} from './riot.control';
var control = RiotControl;
<messenger>
    <h2>this is the observer: count: { count }, added: { thing }</h2>

    <form onsubmit={ send }>
      <input name="message" onkeyup={ edit }>
      <button> send msg </button>
    </form>

    // logic
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

</messenger>
