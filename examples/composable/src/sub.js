const Svenjs = require('../../sven.js');

let Sub = Svenjs.createComponent({
    displayName: "Sub",
    render(){
      "use strict";
      return (<div class="l-box">This is a subcomponent</div>);
    }
});
module.exports = Sub;