-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -
#DEMONSTRATING THE BASIC MODULE PATTERN: AMD  
//AMD = Asynchronous Module Pattern
//utilizes requireJS
//first need to 'define our module' then 'require' that module

//1. DEFINING our module
define('moduleName', ['dependency#1', 'jQuery', 'folder/dependency#2'], function(dep1, jQ, dep2){
  //use the dependencies here...
  
  var _counter: 0;

  var generateId = function() {
    return "customId" + _counter++;
  };

  var create = function(tagName, id) {
    var el = document.createElement(tagName);

    el.id = id || generateId();

    return el;
  };
  
  //returning an object so that these methods are available.
  return {
    generateId:generateId, 
    create:create
  };
});

//2.USING our module
require('moduleName');
require(['moduleName1', 'mod2'], function(mod2) {something});
