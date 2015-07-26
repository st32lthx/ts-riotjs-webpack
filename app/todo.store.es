// TodoStore definition.
// Flux stores house application logic and state that relate to a specific domain.
// In this case, a list of todo items.
var riot = require('riot');
function TodoStore() {
    var store = riot.observable(this); // event emitter
    this.todos = [
        { title: 'Task 1', done: false },
        { title: 'Task 2', done: false }
    ];

    this.stuff = [
        { title: 'tt', done: false },
        { title: 'tt', done: false }
    ];

    this.listen = (e, fn, d, bn) => {
        var self = this;
        var config = { model: d, triggerName: bn ? bn : 'change' };
        var broadcast = () => { self.trigger(config.triggerName, config.model); };
        if (typeof fn === 'function') {
            self.on(e, fn);
            broadcast();
        } else {
            self.on(e, () => { broadcast(); });
        }
    };

    this.listen('todo_init', 'broadcast', this.stuff);

    this.listen('todo_add', newTodo => {
        this.stuff.push(newTodo);
    });

    this.listen('todo_remove', () => {
        this.stuff.pop();
    });

    return store;
    // The store emits change events to any listening views, so that they may react and redraw themselves.

}

module.exports = new TodoStore;