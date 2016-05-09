-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- - 
#SINGLETON PATTERN
//SINGLETON
//ensure there's only one global point of access to itx
var dom = (function() {
  //1.setup empty instance variable
  var instance; 
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
  
  //2.create instance fx that has all the properties required of that instance
  var createInstance = function(){
    return {
      generateId:generateId, 
      create:create
    };
  };

  //3.a publicly accessible endPoint to return the instance
  var getInstance: function(){
    return instance || (instance = createInstance())
   };

  //returning an object so that ONLY these methods are available.
  return { 
   getInstance: getInstance
  };
  
})();

-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- - 

var exampleOfSomething = function(){

  //private variables
  var privateVariable = 'something private';

  function showPrivate() {
    console.log(privateVariable);
  }

  //public variables and methods
  // which can access private variables and methods

  return {
    publicMethod: function(){
      showPrivate();
    },

    publicVar: 'the public can see this!'
  };
};

var single = mySingleton();
single.publicMethod();
console.log(single.publicVar);


var Singleton = (function(){
  var instantiated;

  var init = function init() {
    //singleton here
    return {
      publicMethod: function(){
        console.log('public.Method here!')
      },
      publicProperty: 'public.Property here'
    };
  };
 
  return {
    getInstance: function(){
      if(!instantiated) {
        instantiated = init();
      }
      return instantiated;
    }
  }
})();

Singleton.getInstance().publicMethod();
