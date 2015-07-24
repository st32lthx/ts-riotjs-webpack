var riot = require('riot');
<todoapp>
  <h1>This is inside the todoapp {data}</h1>
  <div>
    <p>this is the paragraph heheh { data }</p>
  </div>

  // logic
  class elm {
    data:string;
    constructor() {
      this.data = 'Data from class...';
    }
  }

  var myelm = new elm();
  this.data = myelm.data;


</todoapp>
