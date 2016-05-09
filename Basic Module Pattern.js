
-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- - 
#DEMONSTRATING THE BASIC MODULE PATTERN

//dom is a simple object
//dom has a public "_counter" variable.
var dom = {
  _counter: 0,

  generateId: function() {
    return "customId" + this._counter++;
  },

  create: function(tagName, id) {
    var el = document.createElement(tagName);

    el.id = id || this.generateId();

    return el;
  },
};

//NOW dom is an IIFE
//dom is a "module" with EVERYTHING being private
//ALMOST copy and paste from dom-object to dom-module
var dom = (function() {
  //change this._counter to var _counter  
  var _counter: 0;

  //returning an object so that these methods are available.
  return {
    generateId: function() {
      return "customId" + _counter++;
    },

    create: function(tagName, id) {
      var el = document.createElement(tagName);

      el.id = id || generateId();

      return el;
    },
  }
})();


//module pattern - alternate version.
//no pros, no cons
//just a differnt way of writing it
var dom = (function() {
  //change this._counter to var _counter  
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
})();
