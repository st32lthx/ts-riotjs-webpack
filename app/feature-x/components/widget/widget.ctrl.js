var control = require('riot.control');
export default function (opts) {
  control.on('msg_sent', msg => {
    this.msg = msg.msg;
    this.update();
  });
}
