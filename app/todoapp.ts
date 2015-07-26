var riot = require('riot');
var template = `
<div>
  <h2> something </h2>
  <todo title='Demo'></todo>
</div>
`;
riot.tag('todoapp', template, function (opts) {});
